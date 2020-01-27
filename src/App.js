import React, { Component } from 'react'
import Tabla from "./Tabla"
import TablaComponentesSimples from './TablaComponentesSimples'
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>¡Funciona!</h1>
                <h2>Tabla creada sin componentes simples</h2>
                <Tabla />
                <h2>Tabla creada con un componente de clase que usa componentes simples</h2>
                <TablaComponentesSimples />
            </div>
        )
    }
}
export default App