import { toast } from "react-toastify";
// import { api } from "../../services/api";
import { Button } from '../../../components/Button'
import { Container, Form } from './styles'
import { useNavigate} from "react-router-dom";

export function UsersReport() {
 const navigation = useNavigate();

    function handleBackOut() {
    navigation("/");
    
  }
  const fetchReport = async () => {
    try {
      const response = await fetch("http://localhost:3333/reportTestRouters/report", {
        // localhost:3333/reportTestRouters/report
        method: "GET",
        credentials: "include", // Se estiver usando autenticação via cookies
      });
  
      if (!response.ok) {
        throw new Error("Erro ao gerar o relatório");
      }
  
      const blob = await response.blob(); // Converte a resposta em um blob (arquivo)
      const url = window.URL.createObjectURL(blob); // Cria uma URL para o arquivo
      const a = document.createElement("a");
      a.href = url;
      a.download = "relatorio.pdf"; // Nome do arquivo ao baixar
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Libera a URL criada
    } catch (error){
      if (error.response){
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao gerar o relatório");
      }
    };
  };
  
  return (
    <Container>
      <Form>
        <h1>Relatório de usuários</h1>
        <Button title="Gerar Relatório" onClick={fetchReport}/>
        <Button title="Voltar" onClick={handleBackOut} />
      </Form>
    </Container>
  ) 
}
