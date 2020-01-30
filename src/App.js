import React, { Component } from 'react'
import Tabla from "./Tabla"
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps.js'
import TablaComponentesSimplesState from  './TablaComponentesSimplesState'

class App extends Component {
    /*Objeto para utilizar en state*/
    state = {
        personajes: [
            {
                name: 'Payton Hobart',
            },
            {
                name: 'Wendy Carr',
            },
            {
                name: 'Mina',
            },
            {
                name: 'Jonathan Harker',
            },
            {
                name: 'Drácula',
            },
            {
                name: 'Once',
            },
            {
                name: 'Jim Hopper',
            }
        ]
    }

    /*Método para borrar personajes.*/
    borrarPersonajes = indice => {
        const { personajes } = this.state;

        this.setState({
            personajes: personajes.filter((personaje, i) => {
                return i !== indice; 
                /*Devuelve todos los que tiene que borrar, es decir, 
                los distintos al índice.*/
            })
        });
    }

    render() {
        /*Colección de objetos, con nomenclatura json,
         para utilizar con props.*/
        const actoresactrices = [
            {
                nombre: 'Joel',
                apellidos: 'Edgerton'
            },
            {
                nombre: 'Carmen',
                apellidos: 'Mauran'
            },
            {
                nombre: 'Luis',
                apellidos: 'Tosar'
            },
            {
                nombre: 'Chloe',
                apellidos: 'Grace Moretz'
            }
        ]

        /*Para utilizar el state*/
        const { personajes } = this.state

        return (
            <div className="App">
                <h1>¡Funciona!</h1>
                <h2>Tabla creada sin componentes simples</h2>
                <Tabla />
                <h2>Tabla creada con un componente de clase que usa componentes simples</h2>
                <TablaComponentesSimples />
                <h2>Tabla creada mediante un componente de clase que utiliza paso de parametros con props</h2>
                <TablaComponentesSimplesProps datosActoresActrices = {actoresactrices}/>
                <h2>Tabla creada con un componente simple (con state y que permite eliminar elementos), que utiliza dos elemetos simples</h2>
                <TablaComponentesSimplesState datosPersonaje={ personajes } borrarPersonajes = { this.borrarPersonajes }/>            
            </div>
        )        
    }
}
export default App