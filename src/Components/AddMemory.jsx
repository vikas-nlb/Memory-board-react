import React , {Component} from 'react';

class AddMemory extends Component{
    constructor(){
        super()
       this.handleSubmit= this.handleSubmit.bind(this) 
    }
    handleSubmit(event){
        console.log('enetered')
        event.preventDefault();
        const link = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post ={
            id:Number(new Date()),
            description:description,
            imageLink:link
        }
        if(link && description){
            this.props.onAdd(post);
        }

    }
    render(){
        return (
            <div className="add-memory">
                <h2>Add Memory</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Link' name='link' id="inputOne"/>
                    <input type='text' placeholder='Description' name='description' id="inputTwo"/>
                    <button>Record</button>
                </form>
            </div>
        )
    }

}
export default AddMemory