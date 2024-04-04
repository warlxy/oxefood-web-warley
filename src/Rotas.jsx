import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './view/Cliente/FormCliente';
import ListCliente from './view/Cliente/ListCliente';
import FormEntregador from './view/Entregador/FormEntregador';
import ListEntregador from './view/Entregador/ListEntregador';
import Home from './view/Home/Home';
import FormProduto from './view/Produto/FormProduto';
import ListProduto from './view/Produto/ListProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas
