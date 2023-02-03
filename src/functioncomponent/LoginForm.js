import React from 'react';
import { useState, useEffect } from "react";

const LoginForm = () =>{
    const [account,setAccount] = useState("type something...");
    const [password, setPassword] = useState("");
    return (
        <div>
            <input type="text" value={account} onChange={(e)=>{ setAccount(e.target.value) }}></input>
            <div>
                目前Account: {account};
            </div>
        </div>
    )
}

export default LoginForm;
