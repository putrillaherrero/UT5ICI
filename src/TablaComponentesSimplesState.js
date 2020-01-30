import React, { Component } from "react";

const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Borrar</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = props => {
    const filasDeDatos = props.datosPersonaje.map((fila, indice) => {
        return (
            <tr key={indice}>
            <td>{fila.name}</td>
            <td><button onClick = {() => props.borrarPersonajes(indice)}>Borrar</button></td>
            </tr>
        )
    })
    return (
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}

const TablaComponentesSimplesState = (props) => {
    const { datosPersonaje, borrarPersonajes } = props;
    return (
        <table>
            <TablaCabecera />
            <TablaCuerpo datosPersonaje = { datosPersonaje }
            borrarPersonajes = { borrarPersonajes } />
        </table>
    )
}

export default TablaComponentesSimplesState