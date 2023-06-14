import styled from "@emotion/styled"

const DivEstilizada = styled.div`
  padding: ${props => props.theme.espacamentos.l};
  border: 0;
  border-radius: ${props => props.theme.espacamentos.s};
  background-color: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.56);
  height: 58vh;
  width: 28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Card = ({ children }) => {
  return (<DivEstilizada>
    {children}
  </DivEstilizada>)
}