import React, {useState} from "react";

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await fetch("http://127.0.0.1:8000/login",{
                method:"POST",
                // headers: {
                //     'content-type': 'application/json'
                // },
                body:JSON.stringify({
                    email,
                    password,
                })
            });
            const status = await res.json();
            console.log(status);
        } catch(err){
           console.log(err);
        }
        setEmail("");
        setPassword("");
    }

    return (
        <>
          <div className="login-main">
            <div className="login-container">
              <h1>Log in</h1>
              <form className="login-form" onSubmit={handleSubmit}>
                <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                <button type="submit">Submit</button>
              </form>
              <a href="">Forgot password?</a>
            </div>
          </div>
        </>
    );
};

export default Login;
