import styled from 'styled-components'
import BackgroundImg from '../../assets/image.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > h2 {
    font-size: 24px;
    margin-top: 84px;
    margin-bottom: 24px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }

  > a {
    margin-top: 100px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;