import { useState,useEffect } from "react";
const Users = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/artists')
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        })
      },[]);
     let DisplayData = () => {
        if (user && user.length > 0) {
            return user.map((item)=>{
                return <div>{item.cover}</div>
            })
        }else{
            return <div>Not users found</div>
        }
        }
    return (
       <div>
           <h1>ddfdf</h1>
             <p>{DisplayData()}</p>
           
          
       </div>
    )
      
      
}

export default Users;
