import { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormCom from './formCom'
import TableCom from './tableCom'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            arrItems: [],
            displayBtn: 'd-none',
            show:false
        }
    }
    displayItems = (itemsData) => {
        this.state.arrItems.push(itemsData)
        this.setState({
            arrItems: this.state.arrItems
        })
    }
    handleClose = () =>{
        this.setState({
            show:false
        })
    }
    handleShow = () =>{
        this.setState({
            show:true
        })
    }

    render() {
        return (
            <div>
                <Button className='w-25 mt-lg-4' style={{ marginLeft:'630px' }}  variant="primary" onClick={this.handleShow}>
                   Register
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <div>
                       <FormCom display = {this.displayItems}/>
                       </div>
                    </Modal.Body>
                </Modal>
                <TableCom items={this.state.arrItems} />
            </div>
        )
    }
}
export default Home