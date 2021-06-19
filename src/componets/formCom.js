import {Component} from 'react'

class formCom extends Component{
    constructor(props){
        super()
        this.state = {
            name:"",
            age:0,
            props
        }
        
    }
    handelClick = () => {
        this.props.display({name:this.state.name,age:this.state.age})
    }
    getname = (e) => {
        this.setState((state)=>{
            state.name = e.target.value;
            return state
        })
    }
    getage = (e) => {
        this.setState((state)=>{
            state.age = e.target.value;
            return state
        })
    }
    render(){
        return (
            <div>
                <form style={{paddingTop:'20px',margin: '68px 7px',textAlign:'center',fontSize:'30px'}}>
                    <input type="text" className='mt-3' value={this.state.name} onChange={this.getname} placeholder="Enter Your Name"/><br/>
                    <input type="text" className='mt-3' value={this.state.age} onChange={this.getage} placeholder="Enter Your Age"/><br/>
                    <input type="button" className='btn btn-success w-25' value="Click" onClick={this.handelClick}/><br/>
                </form>
            </div>
        )
    }
}
export default formCom