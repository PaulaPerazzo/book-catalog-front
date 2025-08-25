import InfoModal from '@/components/InfoModal';
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActionBtn,
  ActionText,
  BottomBar,
  CameraWrap,
  CloseBtn,
  CloseText,
  Guide,
  Header,
  InfoText,
  Mask,
  Screen,
  Title
} from './capture.styles';

type TorchState = 'on' | 'off';

function normalizeISBN(code: string) {
  // EAN-13 com prefixo ISBN (978/979) → ISBN-13
  if (/^\d{13}$/.test(code) && (code.startsWith('978') || code.startsWith('979'))) {
    return code;
  }
  // ISBN-10 (com ou sem 'X' no final)
  if (/^\d{9}[\dX]$/.test(code)) {
    return code;
  }
  return null;
}

export default function Capture() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanningEnabled, setScanningEnabled] = useState(true);
  const cooldown = useRef<NodeJS.Timeout | null>(null);
  const [lastIsbn, setLastIsbn] = useState<string | null>(null);
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  const handleBarcode = useCallback(async (res: BarcodeScanningResult) => {
    if (!scanningEnabled) return;
    const value = Array.isArray(res.data) ? res.data[0]?.rawValue ?? '' : (res.data as any)?.rawValue ?? res.data;

    // Expo Camera retorna .rawValue (SDK 50) ou .data string (SDKs antigos)
    const raw = typeof value === 'string' ? value : String(value ?? '');

    const isbn = normalizeISBN(raw.replace(/[-\s]/g, ''));
    if (!isbn) return;

    setScanningEnabled(false);
    setLastIsbn(isbn);
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // TODO: aqui você pode buscar metadados do livro via API e/ou navegar
    console.log('ISBN detectado:', isbn);

    if (cooldown.current !== null) clearTimeout(cooldown.current);
    cooldown.current = setTimeout(() => setScanningEnabled(true), 1500);

    setShowAdded(true);
  }, [scanningEnabled]);

  const closeModal = () => {
    setShowAdded(false);
    setScanningEnabled(true);
  };

  if (!permission) return null;

  if (!permission.granted) {
    return (
      <Screen>
        <Header>
          <Title>My Library</Title>
          <CloseBtn onPress={() => router.back()}><CloseText>×</CloseText></CloseBtn>
        </Header>
        <InfoText>Precisamos da permissão da câmera.</InfoText>
        <BottomBar>
          <ActionBtn onPress={requestPermission}><ActionText>Conceder acesso</ActionText></ActionBtn>
        </BottomBar>
      </Screen>
    );
  }

  return (
    <Screen>
      <Header>
        <Title>My Library</Title>
        <CloseBtn onPress={() => router.back()}><CloseText>×</CloseText></CloseBtn>
      </Header>

      <CameraWrap>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          barcodeScannerSettings={{
            // EAN_13 para ISBN-13; CODE_39/93/128 ajudam em rótulos variados; QR opcional
            barcodeTypes: ['ean13', 'ean8', 'code128', 'code39', 'code93', 'upc_a', 'upc_e'],
          }}
          onBarcodeScanned={scanningEnabled ? handleBarcode : undefined}
        />

        <Mask pointerEvents="none">
          <Guide />
        </Mask>
      </CameraWrap>

      <InfoModal
        visible={showAdded}
        title="New book!"
        message={
          lastIsbn
            ? `You added ISBN ${lastIsbn} to your catalog`
            : 'You added a new book to your catalog'
        }
        okText="Ok"
        onClose={closeModal}
      />
    </Screen>
  );
}
