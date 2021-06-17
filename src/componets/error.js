import React from 'react'
class ErrorCom extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className='text-center mt-5'>
                <h1 style={{ fontSize:'100px' }}>Not Page Found</h1>
            </div>
        )
    }
}
export default ErrorCom