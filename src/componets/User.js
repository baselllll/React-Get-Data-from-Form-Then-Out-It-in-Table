import { Link } from "react-router-dom";
const User = (props) => {
    return (<>
        <Link to={`/user/${props.userInfo.id}`}>
            <img width='100%' height='300px' src={`images/covers/${props.userInfo.cover}.jpg`} />
        </Link>
        <h1 className='alert alert-success w-50 text-center' style={{
            position: 'inherit',
            top:'316px',
            opacity: '.7',
            height:'90px'
        }}>{props.userInfo.name}</h1>
    </>
    )
}

export default User;