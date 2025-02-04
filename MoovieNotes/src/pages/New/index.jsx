import { Container, Form, Markers, Controls } from './styles';
import { ButtonText } from '../../components/ButtonText' ;
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiArrowLeft } from 'react-icons/fi';

export function New(){
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
                        <NoteItem value="Drama"/>
                        <NoteItem isNew placeholder="Nova Tag"/>
                    </Markers>
                    <Controls>
                        <Button className="exclude" title="Excluir Filme"/>
                        <Button title="Salvar alterações"/>
                    </Controls>
                </Form>
            </main>
        </Container>
    )
}