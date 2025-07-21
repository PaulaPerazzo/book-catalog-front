import { 
    CardContainer, 
    TextContainer, 
    ContentContainer, 
    BookImage, 
    Title, 
    Subtitle 
} from "./styles";

import type { ImageSourcePropType } from "react-native";
  
export default function Card(props: {
    title?: string;
    subtitle?: string;
    imageSource: ImageSourcePropType;
}) {

    if (!props.imageSource) {
        throw new Error("Image source is required");
    }

    return (
        <CardContainer>
            <ContentContainer>
                <BookImage source={props.imageSource} />
                <TextContainer>
                    <Title> {props.title} </Title>
                    <Subtitle> {props.subtitle} </Subtitle>
                </TextContainer>
            </ContentContainer>
        </CardContainer>
    );
}
