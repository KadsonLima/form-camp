import { useState } from "react";
import styled from "styled-components";
import Komy from '../assets/komy.webm';
import axios from "axios";

export default function Formulario() {
  const [formValues, setFormValues] = useState({});

  function sendPost(){
    axios.post('https://sheetdb.io/api/v1/6lk2ldo1vnqjh', {
           "data": {
             "NICK": formValues.name,
             'MENSAGEM':formValues.bio
           }
       }).then(()=>{alert("ENVIADO COM SUCESSO")})
   }
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckebox = type === "checkbox";

    const data = formValues[name] || {};

    if (isCheckebox) {
      data[value] = checked;
    }
    const newValue = isCheckebox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    sendPost()
    console.log(data);
  }

  return (
    <Container>
        <h1>CAMPEONATO PVP</h1>

      <Form onSubmit={(e)=>{handleSubmit(e)}}>
        <h2>DEIXE SUA OPINIAO</h2>
        <input
          type="text"
          name="name"
          placeholder="Nick"
          onChange={handleInputChange}
          value={formValues.name || ""}
        />
        <h2> Deixe sua sugestão voce prefere um campeonato de PTXPT no formato 4vs4  ou  5v5 - se tiver mais alguma outra sugestao escreva para nós também.</h2>
        <textarea
          name="bio"
          onChange={handleInputChange}
          value={formValues.bio || ""}
        ></textarea>
        <button style={{width: "200px"}} type="submit">Enviar</button>
      </Form>
      <video src={Komy} autoPlay="true"></video>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: xx-large;
    color: white;
    margin-bottom: 10px;
  }
  video{
    height: 30%;
  }
`;

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  width: 90%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  color: white;
  h2{
    font-size: small;
  }

  input{
    width: 100%;
    text-align: center;
  border: none;
  border-radius: 10px;  

  }
  textarea{
    width: 100%;
    height: 200px;
  border-radius: 10px;
  padding:10px;
  border: none;

  }select{
    width: 100px;
  }
`;
