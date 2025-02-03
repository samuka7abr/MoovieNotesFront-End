import { Container, Content, About, Rating } from './styles';
import { FiArrowLeft, FiClock, FiStar} from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tags';

export function Details(){
    return(
    <Container>
        <Header />
        <main>  
           <Content>
                <FiArrowLeft />
                <ButtonText title='Voltar' />
                <Rating>
                    <h1>Django Libre</h1>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FiStar />
                </Rating>
                <About>
                    <img src='https://github.com/samuka7abr.png' />
                    <p>por Samuel Abrão</p>
                    <p> <FiClock /> 03/02/2025 às 08:00</p>
                </About>
                <div>
                <Tag title={"Ação"}/>
                <Tag title={"História"}/>
                <Tag title={"Faroeste"}/>
                </div>
                <p>Django, um escravo liberto por um caçador de recompensas chamado Dr. King Schultz, embarca em uma jornada de vingança e redenção no sul dos Estados Unidos, pouco antes da Guerra Civil. Schultz busca capturar os irmãos Brittle, criminosos procurados, e oferece a Django a liberdade em troca de sua ajuda, já que ele conhece os homens. Após cumprir a missão, Schultz torna Django seu parceiro e o treina para ser um caçador de recompensas. Django, agora livre, está determinado a encontrar e resgatar sua esposa, Broomhilda, que foi separada dele quando ambos foram vendidos a diferentes fazendeiros. A busca os leva a "Candyland", uma grande plantação gerida pelo cruel Calvin Candie, onde Broomhilda é mantida como escrava. Schultz e Django elaboram um plano para se infiltrar na propriedade sob o pretexto de uma transação de escravos de luta.<br></br><br></br>À medida que o plano avança, Django precisa lidar com a brutalidade e o racismo ao seu redor, mantendo sua determinação para resgatar sua esposa. Eles enganam Candie temporariamente, mas o mordomo Stephen desconfia de suas intenções. Um confronto violento ocorre quando o plano é revelado, e Schultz mata Candie antes de ser morto por Stephen. Django é capturado, mas consegue escapar, eliminando todos os capangas restantes de Candyland. Em uma cena de vingança final, ele retorna à propriedade, liberta Broomhilda e destrói a plantação. Com o passado de escravidão e dor agora atrás dele, Django cavalga em direção a um futuro onde finalmente pode viver em liberdade ao lado de sua esposa.
                </p>
            </Content> 
        </main>
    </Container>
    )
}