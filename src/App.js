import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { Login } from "./components/Login/Login";
import { Cabecalho} from "./components/Cabecalho/Cabecalho";
import './App.css'
import { Botao } from "./components/Botao/Botao";


function App() {
  return (
    <ProvedorTema>
      <Estilos /> 
      <Cabecalho/>
      <Login> 
        <Card>
        <img src="./imagens-freelando/Imagens/image 2.png" alt="imagem" width="120px"/>
        
          <Tipografia variante="body1" componente="h1"> 
            BEM-VINDO AO ORIENTE  
          </Tipografia>
      
          <CampoTexto label="TIA/DRT" />
          <CampoTexto label="SENHA" />
         <Botao text="Enviar"/>
        </Card>
        </Login>
    </ProvedorTema>
  );
}

export default App;
