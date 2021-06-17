import {Component} from 'react';
import FormCom from './formCom'
import TableCom from './tableCom'
class Home extends Component{
    constructor(){
        super()
        this.state = {
            arrItems:[]
        }
    }
    displayItems = (itemsData) => {
        this.state.arrItems.push(itemsData)
        this.setState({
            arrItems:this.state.arrItems
        })    
    }
    render(){
        return (
        <div>
            <FormCom display = {this.displayItems}/>
            <TableCom items = {this.state.arrItems} />
        </div>
        )
    }
}
export default Home