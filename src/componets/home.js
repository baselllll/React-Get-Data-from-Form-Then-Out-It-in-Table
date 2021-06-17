import {Component} from 'react';
import FormCom from './formCom'
import TableCom from './tableCom'
class Home extends Component{
    constructor(){
        super()
        this.state = {
            arrItems:[],
            displayBtn:'d-none'
        }
    }
    displayItems = (itemsData) => {
        this.state.arrItems.push(itemsData)
        this.setState({
            arrItems:this.state.arrItems
        })    
    }
    displayBtn = () => {
        let diBlock = 'd-block'
        this.setState({
            displayBtn:diBlock
        })
    }
    render(){
        return (
        <div>
            <button className='text-center btn btn-success w-25' onClick={this.displayBtn} style={{ margin:'80px 600px' }}>Register</button>
            <div className={this.state.displayBtn}><FormCom display = {this.displayItems}/></div>
            <TableCom items = {this.state.arrItems} />
        </div>
        )
    }
}
export default Home