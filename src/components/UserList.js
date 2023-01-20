import React from 'react';
const User = ({user}) => { //메모장 참조
    return(
        <div>
            <b>{user.username}</b><br/>
            <span>{user.email}</span>
        </div> 
    );
}

const UserList = () => {
    const users = [
        {
            id: 1,
            username: "민준",
            email: "민준@green.com"
        },
        {
            id: 2,
            username: "요한",
            email: "요한@green.com"
        },
        {
            id: 3,
            username: "재훈",
            email: "재훈@green.com"
        },
]
    return (
        <div id="ss">
            {users.map(user=>(<User key={user.id} user={user}/>))}
            
        </div>
    );
};
/* const ss = document.querySelector("#ss");
let {key} = ss
console.log(key); */

export default UserList;