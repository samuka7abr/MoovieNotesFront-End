import { api } from '../../../../../MoviesNotesAPI/src/services/api.js'
import { Container, Profile, Exit, Image } from './styles';
import avatarPlaceholder from '../../assets/user.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


export function Header(){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
                     
                    <strong>{user.name}</strong>
                    <Exit >
                        <span onClick={handleSignOut}>sair</span>
                    </Exit>
                </div>

                <Image to={'/profile/'}>
                    <img src={avatarUrl} alt='Foto do usuário'/>
                </Image>
            </Profile>
        </Container>
    );
}