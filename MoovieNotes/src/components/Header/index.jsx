import { Container, Profile } from './styles';

export function Header(){
    return(
        <Container>        
            <h1>MoovieNotes</h1>
            <input type="text" placeholder='pesquisar pelo título'/>
            <Profile> 
            <div>
                <strong>Samuel Abrão</strong>
                <span>sair</span>
            </div>

            <img src= "https://github.com/samuka7abr.png" alt='Foto do usuário'/>

            
            </Profile>
        </Container>


    )

}