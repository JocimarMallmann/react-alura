import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }

        this.state = this.stateInicial;
    }

    escutadorDeEvento = (event) => {
        console.log( event.target );
        // pegando o name do input (que é o mesmo nome do objeto stateInicial) e o value (que é o valor do input)
        const { name, value } = event.target;

        this.setState(
            {
                [name] : value // pegando o name do input (que é o mesmo nome do objeto stateInicial) e o value (que é o valor do input)
            }
        );
    }
    // ENTENDI, "PROPS" SÃO AS PROPRIEDADES PASSADAS NAS TAGS, QUE EU POSSO PEGAR ASSIM: this.props.metodo(), this.props.objeto
    submitForm = () => {
        // jogando o state que contém as informações do input, lá pro App.js
        this.props.escutadorDeSubmit(this.state); // método lá da props que foi passado para a tag <Formulario />
        this.setState(this.stateInicial); // ressetando os campos
    }

    render() {

        const { nome, livro, preco } = this.state;

        // for="" palavra reservada, então utilizamos o htmlFor="" do JSX
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome" className="input-field">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={ nome }
                            onChange={ this.escutadorDeEvento }
                        />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="livro" className="input-field">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={ livro }
                            onChange={ this.escutadorDeEvento }
                        />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="preco" className="input-field">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={ preco }
                            onChange={ this.escutadorDeEvento }
                        />
                    </div>
                </div>

                <button onClick={ this.submitForm }
                        type="button"
                        className="waves-effect waves-light btn indigo lighten-2">Salvar</button>
            </form>
        );
    }
}
export default Formulario;
