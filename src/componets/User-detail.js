import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const UserDetail = (props) => {
    const id = props.match.params.id;
    const [user, setUser] = useState({})

    useEffect(() => {
        setTimeout(()=>{
            fetch(`http://localhost:3000/artists/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
        },3000)
    }, [])

    let displayAlbum = () => {
        return (user.albums.map((album) => {
            return <img width='200px' height='200px' src={`/images/albums/${album.cover}.jpg`} />
        })
        )
    }

    if (user.name) {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-lg-3'>
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='text-center alert alert-success' ><Link to='/'>Musical</Link></h1>
                        <div className='text-center alert alert-dark' style={{ fontWeight: 'bold' }} >
                            {user.name}'s details
                        </div>
                        <div className="card-body">
                            <p>
                                <img width='100%' height='300px' src={`/images/covers/${user.cover}.jpg`} />
                            </p>
                            <h1 className='text-center alert alert-dark'>
                                {user.name}
                            </h1>
                            <p className='text-center alert alert-dark'>
                                {user.bio}
                            </p>
                            <p className='text-center alert alert-dark'>
                                {displayAlbum()}
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                    </div>
                </div>

            </div>
        )
    }
    return <div className="text-center spinner-border text-primary" 
    style={{ margin:'300px 700px',fontSize:'50px',width:'120px',height:'120px' }} role="status">
  </div>
}

export default UserDetail;