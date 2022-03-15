import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props)
    {
        super(props);
        this.input = React.createRef();
    }
    //criar o monipulador do evento
    inserirItem(e){
        e.preventDefault();
        var value = this.input.current.value;
        var text = value.trim();
        this.props.onAddClick(text)
    }

    render(){
        return(
            <div>
                <input type='text' ref={this.input}/>
                <button onClick={(e) => this.inserirItem(e)}>Adicionar Item</button>
            </div>
        )
    }
}

export default AddTodo;