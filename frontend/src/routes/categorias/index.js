import { h, Component } from 'preact';
import { API } from '../../config';

class Categorias extends Component {

    constructor(props){
        super(props)

        this.state = {
            categorias:[]
        }
    }

    componentDidMount(){
        this.load()
    }

    load(){

        const vm = this;

        fetch(API+'categoria')
        .then(res => res.json())
        .then(res => vm.setState({categorias:res.data}))
        .catch(err => console.log('hum deu ruim',err))
    }

    delete(id){

        const vm = this;
        fetch(API+'categoria/delete/'+id)
        .then(res => res.json())
        .then(res => vm.load() )
        .catch(err => console.log('hum deu ruim no delete',err))
    }

    render(){
        return(
            <div>

        <h1 >Categorias</h1>

        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th><a className="button is-success"> Novo</a></th>
            </tr>
        </thead>

            <tbody>
                {
                    this.state.categorias.map((item) =>
                        <tr>
                            <td>{ item.id }</td>
                            <td>{ item.nome }</td>
                            <td><button onClick={() => this.delete(item.id)} className="button is-danger">delete</button></td>
                        </tr>
                    )
                }
            </tbody>


        </table>
        </div>
        )
    }
}

export default Categorias