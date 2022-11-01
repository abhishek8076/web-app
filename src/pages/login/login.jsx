import React from "react";
import './login.scss';
const Login = () => {
    return (
        <>
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>
                        Real world
                    </h1>
                    <p>
                        Recently, the React team and a number of contributors released a fantastic tool for creating configuration-less React applications based on a set of minimal ideas to help beginners dive into building React 
                    </p>
           <span>
            Dont't have  an account ?
           </span>
           <button>Register</button>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type='text'
                        placeholder='username'/>
                        <input type='password'
                        placeholder='password'/>
                        <button>Login</button>
                    </form>
                </div>

            </div>
            </div>

        </>

    )

}
export default Login;