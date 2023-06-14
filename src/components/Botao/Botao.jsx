import styled from "@emotion/styled"

const BotaoEnviar = styled.button`
  background-color: ${props => props.theme.cores.primarias.a};
  border-radius: 90px;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  display: block;
  padding: 0 40px;
  margin: auto auto;
  :hover {
    background-color: ${props => props.theme.cores.secundarias.b};
    transition: all 0.5s;
    transform: scale(1.1);
  }
`

export const Botao = ({ text }) => {
  return (<BotaoEnviar> {text} </BotaoEnviar>)

}