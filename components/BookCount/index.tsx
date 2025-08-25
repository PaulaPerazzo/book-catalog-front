import React from "react";
import { Container, CountText, DescriptionText } from "./styles";

type Props = {
    count?: number
};
  
export default function BookCount({
    count
}: Props) {

    return (
        <Container>
            <CountText>{count}</CountText>
            <DescriptionText> Books registered </DescriptionText>
        </Container>
    );
}
