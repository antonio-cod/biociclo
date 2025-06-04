import { FiUser } from 'react-icons/fi';

import { useNavigate } from "react-router-dom";

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useEffect, useState } from 'react';
import { Background, Container, Form, IconWrapper, Select, SelectWrapper } from './styles';


import { BsBuilding } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import { SiGooglemaps } from 'react-icons/si';
import { toast } from 'react-toastify';
import { api } from "../../services/api";

export function Producer() {

  const navigation = useNavigate();

  function handleExit() {
    navigation("/");

  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [regions, setRegions] = useState([]);
  const [region_id, setRegion_id] = useState("");



  useEffect(() => {
    async function fetchRegions() {
      try {
        const response = await api.get("/region/regions");
        setRegions(response.data);
      } catch (error) {
        toast.error("Erro ao carregar regiões");
      }
    }

    fetchRegions();
  }, []);

  console.log(regions.region)
  function handleSaveProducer() {
    if (!name || !email || !phone || !cnpj || !region_id) {
      return toast.info("Algum campo não foi preenchido");
    }

    api.post("/producer", { name, email, phone, cnpj, region_id })
      .then(() => {
        toast.success("Produtor cadastrado com sucesso!");

        // ✅ Limpa os campos
        setName("");
        setEmail("");
        setPhone("");
        setCnpj("");
        setRegion_id("");
      })
      .catch(error => {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar!");
        }
      });
  }
  return (
    <Container>
      <Background />

      <Form>
        <h1>Cadastro de produtor</h1>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={HiOutlineMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Telefone"
          type="phone"
          icon={CiPhone}
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <Input
          placeholder="CNPJ"
          type="CNPJ"
          icon={BsBuilding}
          value={cnpj}
          onChange={e => setCnpj(e.target.value)}
        />

        <SelectWrapper>
          <IconWrapper>
            <SiGooglemaps size={20} />
          </IconWrapper>
          <Select value={region_id} onChange={e => setRegion_id(e.target.value)}>
            <option value="">Selecione uma região</option>
            {regions?.region?.map(region => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </Select>
        </SelectWrapper>

        <Button title="Cadastrar" onClick={handleSaveProducer} />
        <Button title="Voltar" onClick={handleExit} />


      </Form>

    </Container>
  )
}