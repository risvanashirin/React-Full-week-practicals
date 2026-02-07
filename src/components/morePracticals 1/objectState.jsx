import { useState } from "react";

function User(){
    const [user,setUser]=useState({name:'Riss',age:23})
    function change(){
        return setUser({...user,age:user.age+1})
    }
    return(
        <>
        <h1>{user.name}-{user.age}</h1>
        <button onClick={change}>click</button>
        </>
    )
}
export default User