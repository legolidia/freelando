import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: '#FFFFFF',
    primarias: {
      a: '#CC0C1C'
    },
    secundarias: {
      a: '#E8DADA',
      b: '#cf2937'
    },
    neutras: {
      a: '#373737'
    }
  },
  espacamentos: {
    xs: '8px',
    s: '12px',
    l: '32px'
  },
  fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>
    {children}
  </ThemeProvider>
}