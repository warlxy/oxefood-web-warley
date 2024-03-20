import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function ListCliente () {
    return(
        <div>
            <div style={{marginTop: '3%'}}>
                <Table color='orange' sortable celled>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>CPF</Table.HeaderCell>
                            <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                            <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                            <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        { lista.map(cliente => (

                            <Table.Row key={cliente.id}>
                                <Table.Cell>{cliente.nome}</Table.Cell>
                                <Table.Cell>{cliente.cpf}</Table.Cell>
                                <Table.Cell>{formatarData(cliente.dataNascimento)}</Table.Cell>
                                <Table.Cell>{cliente.foneCelular}</Table.Cell>
                                <Table.Cell>{cliente.foneFixo}</Table.Cell>
                                <Table.Cell textAlign='center'>

                                    <Button
                                        inverted
                                        circular
                                        color='green'
                                        title='Clique aqui para editar os dados deste cliente'
                                        icon>
                                            <Icon name='edit' />
                                    </Button> &nbsp;
                                    <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este cliente'
                                                icon>
                                                    <Icon name='trash' />
                                            </Button>

                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                        
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}