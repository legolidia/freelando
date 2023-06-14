import styled from "@emotion/styled"

const DivCentralizada = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Login = ({ children }) => {
  return (<DivCentralizada>
    {children}
  </DivCentralizada>)
}