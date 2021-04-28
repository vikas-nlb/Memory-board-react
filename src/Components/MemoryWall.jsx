import React , { Component} from 'react'
import Memory from './Memory'
class MemoryWall extends Component{
render(){
    return(
        <div className="memorywall">
            {this.props.posts
            .sort(function(x,y){
                return y.id -x.id;
            })
            .map((post,index) => <Memory key={index} post={post} onRemove={this.props.onRemove}/>)}
        </div>
    )
}
}
export default MemoryWall