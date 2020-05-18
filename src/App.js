import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Tabela from './Tabela';
import Formulario from './Formulario';

class App extends Component {

    // Gerenciamento de estado
    state = {
        autores: [
            {
                nome: 'Paulo',
                livro: 'React',
                preco: '1000'
            },
            {
                nome: 'Daniel',
                livro: 'Java',
                preco: '99'
            },
            {
                nome: 'Marcos',
                livro: 'Design',
                preco: '150'
            },
            {
                nome: 'Bruno',
                livro: 'DevOps',
                preco: '100'
            }
        ],
    };

    removeAutor = (i) => {
        const { autores } = this.state;
        // Para alterar o state não pode ser diretamente, deve ser pelo método setState()
        this.setState(
            // Esse método recebe um JSON que servirá para fazer o merge dos dados que já estão no state e aqueles que estão sendo passados. No caso, nosso objetivo é alterar a chave autores, da qual removeremos o elemento que sofreu o clique na tabela.
            // Antes de efetuarmos a mudança, precisaremos do array autores atual, que conseguiremos criando uma constante autores recebendo this.state
            // A partir de autores, chamaremos o método filter(), dentro do qual escreveremos um método que recebe o autor (a unidade dentro de autores) e a posAtual dessa iteração.
            {
                autores : autores.filter( (elemento, index) => {
                    // console.log(elemento, ' | ', index);
                    return index !== i;
                }),
            }
        );
    };

    escutadorDeSubmit = (autor) => {
        this.setState(
            {
                autores: [ ...this.state.autores, autor ]
            }
        );
    }


    // um componente criado por meio de uma classe precisa, obrigatoriamente, da declaração de um método render()
    render() {
        // Fazendo isso, teremos um erro de compilação, já que agora temos duas tags raiz - <Tabela /> e <Form /> - o que é inválido em uma linguagem de marcação. Porém, se começarmos a adicionar divs no código, vamos poluir nosso DOM com muitos elementos. Para solucionarmos isso, utilizaremos uma ferramenta do React chamada Fragment. Criaremos então um <Fragment> que conseguirá retornar tags irmãs sem necessariamente ter um wrapper/envelope ao redor delas que as renderize no HTML.
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <Tabela autores={ this.state.autores } removeAutor={ this.removeAutor } />
                    <Formulario escutadorDeSubmit={ this.escutadorDeSubmit } />
                </div>
            </Fragment>
        );
    } // passando os dados atraves da props, e passando os metodos através da props também

}

export default App;
