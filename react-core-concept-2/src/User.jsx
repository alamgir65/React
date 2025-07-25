export default function User({user}){
    console.log(user)
    return (
        <>
            <div className="box">
                <h4>Name : {user.name}</h4>
                <h6>Email : {user.email}</h6>
                <a href={user.website}>{user.website}</a>
            </div>
        </>
    )
}