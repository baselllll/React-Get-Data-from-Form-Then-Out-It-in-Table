import React from 'react'
import {Redirect} from 'react-router-dom'
class ErrorCom extends React.Component{
    constructor(){
        super()
    }
    GoToHome = () =>{
        this.props.history.push('/')
    }
    render(){
        return (
            <div className='text-center mt-5'>
                <h1 style={{ fontSize:'100px' }}>Not Page Found</h1>
                <button className='text-center btn btn-success w-25'style={{ margin:'80px 600px' }} 
                onClick={this.GoToHome}> 
                
                 Go to Home
                </button>
            </div>
        )
    }
}
export default ErrorCom