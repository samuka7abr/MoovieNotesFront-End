import { Container } from './styles'

export function ButtonText({ title, to, isActive = false, ...rest }) {
  return (
    <Container to={to}
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}