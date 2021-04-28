import React , { Component } from 'react'

class Memory extends Component {
    render(){
        const post = this.props.post;
        return(
            <div className="memory">
                <img className="memory-pic" src={post.imageLink}/>
                <p className="memory-descriptions" >
                    {this.props.post.description}
                </p>
                <button className="memory-cancel" onClick={()=>{
                    this.props.onRemove(post)
                }}/>
            </div>
        )
    }
}

export default Memory;