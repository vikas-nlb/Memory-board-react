import React , { Component } from 'react'
import Title from './Title'
import MemoryWall from './MemoryWall'
import AddMemory from './AddMemory'



class Main extends Component {
    constructor(){
        super()
        this.state={
            post:[{
                id: 0,
                description: "Great day with the mountains and we all had a great day",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: 1,
                description: "Awesome day , full of adventure and discoveries",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: 3,
                description: "Long awaited vacation with family and it was awesome",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
        }
        this.removeMemory = this.removeMemory.bind(this);
        this.addMemory =  this.addMemory.bind(this);
    }

    removeMemory(removed){
        this.setState((state)=>({
            post: state.post.filter((post) => post !== removed)
        }))

    }
    addMemory(add){
        console.log(add)
        this.setState((state)=>({
            post:state.post.concat([add])
        }))
    }
    render(){
        return (
            <div>
                <Title title='Memory Wall'/>
                <MemoryWall posts={this.state.post} onRemove={this.removeMemory}/>
                <AddMemory onAdd={this.addMemory}/>
            </div>
        )
    }
}
export default Main;