/* eslint-disable prettier/prettier */
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import {
  Header,
  Section,
  Input,
  Textarea,
  Noteitem,
  ButtonText,
  Nav,
} from "../../components";
import { Container, Form } from "./styles";

import { api } from "../../services/api";

export function New() {
  const { user } = useAuth();
  const [title,setTitle]=useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating]=useState("")


  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

 function handleRemoveTag(deleted){
  setTags(prevState=>prevState.filter(tag=>tag!==deleted))
 }
 
 async function handleNewNote(){

  if(!title){
    return alert("Digite um título para nota.")
  }

  if(newTag){
    return alert("Confirme a tag , para adcionar-la.")
  }
  await api.post(`/notes/${user.id}`,{
    title,
    description,
    tags,
    rating
  });
  alert("Nota criada com sucesso!");
  navigate('/');
 }

  return (
    <Container>
      <Header />
      <Nav icon={FiArrowLeft} title="voltar" />
      <Section>
        <Form>
          <h2>Novo Filme</h2>
          <div className="appointment">
            <Input 
            placeholder="Título" 
            type="text" 
            onChange={e=>setTitle(e.target.value)}
            />
            <Input 
            placeholder="Sua nota (de 0 a 5)" 
            type="number" 
            onChange={e=>setRating(e.target.value)}
             />
          </div>
          <Textarea 
          placeholder="Observações" 
          onChange={e=>setDescription(e.target.value)} 
          />
          <h3>Marcadores</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <Noteitem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
            ))}
            <Noteitem
              isNew
              placeholder="Nova tag"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <footer>
            <ButtonText title="Excluir" action="button-delete"  />
            <ButtonText title="Salvar" action="button-add" onClick={handleNewNote}/>
          </footer>
        </Form>
      </Section>
    </Container>
  );
}
