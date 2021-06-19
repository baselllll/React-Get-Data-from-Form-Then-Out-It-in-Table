import { useState, useEffect } from "react";
import User from "./User";
import React from "react";
class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    renderUser = (users) => {
        if (users && users.length > 0) {
            return users.map((user) => (
                <User userInfo={user} key={user.id} />
            ))
        } else {
            return  <div className="text-center spinner-border text-primary" 
            style={{ margin:'50px 300px',fontSize:'50px',width:'120px',height:'120px' }} role="status">
          </div>
        }
    }
    componentDidMount = () => {
        setTimeout(()=>{
            fetch('http://localhost:3000/artists')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    users: data
                })
            })
        },2000)
        
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <h1 className='alert alert-dark text-center'>Musical</h1>
                        <img className='text-center' width='100%' height='300px' src={`/images/cover.png`} />
                        <h1 className='alert alert-success w-25 text-center' style={{
                            
                            opacity:'.7'
                        }}>Albums</h1>
                        {this.renderUser(this.state.users)}
                    </div>
                    <div className='col-lg-4'></div>
                </div>

            </div>
        )
    }

}

export default Users;