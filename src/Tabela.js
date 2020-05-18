import React, { Component } from 'react';


// Como está no mesmo documento não preciso importar
const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
};

                // são as propriedades que estou passando ali no <TableBody />
const TableBody = (props) => {
    const linhas = props.autores.map( (linha, index) => {
        // No React, a propriedade key serve para identificar qual elemento está sendo alterado (adicionado ou removido) no componente
        return (
            <tr key={ index }>
                <td>{ linha.nome }</td>
                <td>{ linha.livro }</td>
                <td>{ linha.preco.toString() }</td>
                <td>
                    <button onClick={ () => { props.removeAutor(index); } }
                            className="waves-effect waves-light btn indigo lighten-2">Remover</button>
                </td>
            </tr>
        );
    });
    return (
        <tbody>
            { linhas }
        </tbody>
    );
};

class Tabela extends Component {
    // Toda class Component precisa ter o método render(){} para renderizar algo na tela
    render() {

        const { autores, removeAutor } = this.props; // vai receber as props se existir
        // console.log(autores, removeAutor);

        // vai retornar um JSX/template
        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores={ autores } removeAutor={ removeAutor } />
            </table>
        ); // VOU TER ACESSO A ESSAS PROPIEDADES LÁ EM props NA function/component TableBody
    }
}
export default Tabela; // para conseguir importar no App.js
