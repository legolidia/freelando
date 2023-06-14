import styled from "@emotion/styled"
import { useState } from "react";

const InputEstilizada = styled.input`
    display: block; 
    width: 100%;
    box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.brancas}; 
    background-color: ${props => props.theme.cores.secundarias.a};
    border: 0;
    border-radius: ${props => props.theme.espacamentos.s};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 10px;

    ::placeholder {
      color: ${props => props.theme.cores.neutras.a};
      font-family: ${props => props.theme.fontFamily};
      padding: 0 5px;
    }
`

export const CampoTexto = ({ label }) => {
  const [placeholder, setPlaceholder] = useState(label);

  const handleClick = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    if (placeholder === '') {
      setPlaceholder(label);
    }
  };

  return (
    <InputEstilizada
      placeholder={placeholder}
      onClick={handleClick}
      onBlur={handleBlur}
    />
  );
};