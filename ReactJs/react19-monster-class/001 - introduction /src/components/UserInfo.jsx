
const UserInfo = () => {
    const users= [
        {id:1, name:"alice", age:25},
        {id:2, name:"bob", age:30},
        {id:3, name:"charly", age:22},
    ]
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default UserInfo