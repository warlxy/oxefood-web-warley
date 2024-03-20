import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente () {

   const [nome, setNome] = useState();
   const [cpf, setCpf] = useState();
   const [dataNascimento, setDataNascimento] = useState();
   const [foneCelular, setFoneCelular] = useState();
   const [foneFixo, setFoneFixo] = useState();

   function salvar() {

     let clienteRequest = {
          nome: nome,
          cpf: cpf,
          dataNascimento: dataNascimento,
          foneCelular: foneCelular,
          foneFixo: foneFixo
     }

     // axios.post("http://localhost:8082/api/cliente", clienteRequest)
     // .then((response) => {
     //      console.log('Cliente cadastrado com sucesso.')
     // })
     // .catch((error) => {
     //      console.log('Erro ao incluir o um cliente.')
     // })
     // }


   return(
        <div>
            <div style={{marginTop: '3%'}}>
               <Container textAlign='justified'>
                    <Form>
                         <Form.Group widths='equal'>

                              <Form.Input
                                   required
                                   fluid
                                   label='Nome'
                                   maxLength="100"
                                   value={nome}
                                   onChange={e => setNome(e.target.value)}
                              />

                              <Form.Input
                                   fluid
                                   label='CPF'>
                                   <InputMask 
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)} /> 
                              </Form.Input>

                              <Container textAlign='right'>
                                                                      
                                   <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='blue'
                                        floated='right'
                                        onClick={() => salvar()}
                                   >
                                        <Icon name='save' />
                                        Salvar
                                   </Button>
                              
                              </Container>


                         </Form.Group>

                    </Form>

               </Container>
            </div>
        </div>
        
    )
}}