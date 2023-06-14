import styled from '@emotion/styled'

const ImagemCabecalho = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
    height: 10vh;

    @media (max-width: 768px) {
        padding: ${props => props.theme.espacamentos.s};
        height: 8vh;
      }
`

export const Cabecalho = () => {
    return (
        <ImagemCabecalho>
            <img src="./imagens/Imagens/image 1.png" alt="logo" height="70vh"/>
        </ImagemCabecalho>
    )
}
