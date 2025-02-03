import { Container, Description, Rating, TagContainer } from "./styles";
import { Tags } from '../Tags'
import { FaStar, FaRegStar } from 'react-icons/fa';

export function Moovie({data, ...rest}){
    return(
        <Container {...rest}>
                <h1>{data.title}</h1>

                <Rating>
                    {Array(5)
                    .fill(0)
                    .map((_, index) => (
                        index < data.rating ? <FaStar key={index} /> : <FaRegStar key={index} />
                    ))}
                </Rating>

                <Description>
                    {data.description}
                </Description>

                <TagContainer>
                    {data.tags.map(tag => (
                    <Tags key={tag.id} title={tag.name} />
                    ))}
                </TagContainer>

        </Container>
    )
}