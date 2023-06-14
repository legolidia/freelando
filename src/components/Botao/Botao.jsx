import styled from "@emotion/styled"

const BotaoEnviar = styled.button`
  background-color: ${props => props.theme.cores.primarias.a};
  border-radius: 90px;
  height: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  margin-top: 60px;
  margin-left: auto;
  display: block;
  padding: 0 40px;
  :hover {
    background-color: ${props => props.theme.cores.secundarias.b};
    transition: all 0.5s;
    transform: scale(1.1);
  }
`

export const Botao = ({ text }) => {
  return (<BotaoEnviar> {text} </BotaoEnviar>)

}