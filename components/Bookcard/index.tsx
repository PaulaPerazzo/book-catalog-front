import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { 
    CardContainer, 
    TextContainer, 
    ContentContainer, 
    BookImage, 
    Title, 
    Subtitle,
    MenuButton,
} from "./styles";
import { 
    ImageSourcePropType, 
    LayoutChangeEvent
} from "react-native";
import { CardLayout } from "@/app/types/cards";

type Props = {
    id: number;
    title?: string;
    subtitle?: string;
    imageSource: ImageSourcePropType;
    onLayout: (id: number, layout: CardLayout) => void;
    onPressMenu: (id: number) => void;
};
  
export default function Card({
    id,
    title,
    subtitle,
    imageSource,
    onLayout,
    onPressMenu,
}: Props) {
    if (!imageSource) {
        throw new Error("Image source is required");
    }

    return (
        <CardContainer
            onLayout={(e: LayoutChangeEvent) => {
                const { x, y, width, height } = e.nativeEvent.layout;
                onLayout(id, { x, y, width, height });
            }}
        >
            <MenuButton onPress={() => onPressMenu(id)}>
                <MaterialIcons name="more-vert" size={24} color="#555" />
            </MenuButton>
  
            <ContentContainer>
                <BookImage source={imageSource} />
                <TextContainer>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </TextContainer>
            </ContentContainer>
      </CardContainer>
    );
}
