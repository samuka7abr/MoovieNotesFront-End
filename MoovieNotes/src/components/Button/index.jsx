import { Container, LinkContainer } from './styles';

export function Button({ title, loading = false, to, ...rest }) {
  if (to) {
    return (
      <LinkContainer to={to} {...rest}>
        {loading ? 'Carregando...' : title}
      </LinkContainer>
    );
  }

  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
