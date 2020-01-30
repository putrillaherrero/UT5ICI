import React, { Component } from "react";

const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
        </thead>
    )
}

const TablaCuerpo = props => {
    const filasDeDatos = props.datosActoresActrices.map((fila, indice) => {
        return (
            <tr key = {indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>
            </tr>
        )
    })
    return (
        <tbody>
            { filasDeDatos }
        </tbody>
    )
}

class TablaComponentesSimplesProps extends Component {
    render() {
        const { datosActoresActrices } = this.props
        /*Utilizo propos pasados al componente desde 
        la aplicación principal -> App.js*/
        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo datosActoresActrices = { datosActoresActrices } />
            </table>
        )
    }
}

export default TablaComponentesSimplesProps;