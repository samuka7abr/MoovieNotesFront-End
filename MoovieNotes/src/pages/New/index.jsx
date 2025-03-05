import { api } from '../../../../../MoviesNotesAPI/src/services/api';
import { Container, Form, Markers, Controls } from './styles';
import { ButtonText } from '../../components/ButtonText' ;
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';


export function New(){
    const { user } = useAuth();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag]);
        setnewTag('');
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){
        console.log("🔹 Enviando para API:", { user_id: user.id, title, description, rating, tags });

        try{
            if(newTag){
                return alert('adicione a tag preenchida');
            }
    
            await api.post(`/moovies`, {
                user_id: user.id,
                title,
                description,
                rating,
                tags
              }, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("@movienotes:token")}`
                }
            });
          
            alert("Nota cadastrada com sucesso!")
            navigate('/')
        }catch(error){
            if(error.response){
                return alert(error.response.data.message);
                console.log(error)
            }else{
                return alert('erro')
            }
        }
        }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <FiArrowLeft />
                        <ButtonText to="/"title='Voltar' />
                        <h1>Novo Filme</h1>
                    </header>
                    <div>
                        <Input placeholder='Título' 
                        onChange={e => setTitle(e.target.value)}
                        />
                        <Input placeholder='Sua nota (de 0 a 5)'
                        onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <Textarea placeholder='Observações'
                    onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>
                    <Markers>
                        {
                            tags.map((tag, index) => (
                            <NoteItem 
                            key={String(index)}
                            value={tag} 
                            onClick={() => {handleRemoveTag(tag)}}
                            />
                        ))
                        }
                        <NoteItem isNew 
                        placeholder="Nova Tag"
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddTags}
                        />
                    </Markers>
                    <Controls>
                        <Button className="exclude" title="Cancelar" onClick={() => {navigate('/')}} />
                        <Button title="Salvar alterações" onClick={handleNewNote}/>
                    </Controls>
                </Form>
            </main>
        </Container>
    )
}