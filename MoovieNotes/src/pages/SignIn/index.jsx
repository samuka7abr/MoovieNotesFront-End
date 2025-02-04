import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi'; 
import { Input } from '../../components/Input';
import { Container, Form } from './styles';
import { Background } from './styles';




export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>MoovieNotes</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a>Criar conta</a>

      </Form>
      <Background />
    </Container>
  )
}