import { Container, Form, Markers, Controls } from './styles';
import { ButtonText } from '../../components/ButtonText' ;
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { use } from 'react';

export function New(){
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    function handleAddTags(){
        setTags(prevState => [...prevState, newTag]);
        setnewTag('');
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
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
                        <Input placeholder='Título' />
                        <Input placeholder='Sua nota (de 0 a 5)'/>
                    </div>
                    <Textarea placeholder='Observações'/>
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
                        <Button className="exclude" title="Excluir Filme" />
                        <Button title="Salvar alterações"/>
                    </Controls>
                </Form>
            </main>
        </Container>
    )
}