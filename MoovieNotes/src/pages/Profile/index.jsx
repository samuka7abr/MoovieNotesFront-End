import { FiArrowLeft, FiUser, FiLock, FiMail,FiCamera } from "react-icons/fi";
import { api } from "../../../../../MoviesNotesAPI/src/services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import avatarPlaceholder from '../../assets/user.svg';
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from '../../hooks/auth';
import { useState } from "react";

export function Profile(){
    const { user, updateProfile} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name, 
            email,
            password: passwordNew,
            old_password: passwordOld
        };
       
        await updateProfile({user, avatarFile})
}

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return(
        <Container>
            <header>
                <Link to="/">
                    <>
                        <FiArrowLeft />
                    </>

                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do Usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" 
                        type="file"
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}