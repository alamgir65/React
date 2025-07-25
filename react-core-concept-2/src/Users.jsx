import { useEffect, useState } from "react"
import User from "./User";

export default function Users(){

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    },[]);

    return (
        <>
            <div className="container">
                <h1 className="title">Users fetch</h1>
                <h3>Users Count : {users.length}</h3>
                <div style={{display: 'grid',gridTemplateColumns:'repeat(3, 1fr)'}}>
                    {
                        users.map(user => <User user={user}></User>)
                    }
                </div>
            </div>
        </>
    )
}