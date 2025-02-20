import { Container, Profile, Exit, Image } from './styles';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';


export function Header(){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut(){
        signOut();
        navigate('/');
    }
    return(
        <Container>        
            <h1>MoovieNotes</h1>
            <input type="text" placeholder='pesquisar pelo título'/>
            
            <Profile>
                <div> 
                     
                    <strong>Samuel Abrão</strong>
                    <Exit >
                        <span onClick={handleSignOut}>Sair</span>
                    </Exit>
                </div>

                <Image to={'/profile'}>
                    <img src= "https://github.com/samuka7abr.png" alt='Foto do usuário'/>
                </Image>
            </Profile>
        </Container>
    );
}