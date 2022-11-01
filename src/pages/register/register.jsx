
import React from "react";
import './register.scss';
const Registration = () => {
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
            Do you  have  an account ?
           </span>
           <button>Login</button>

                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type='text'
                        placeholder='username'/>
                        <input type='password'
                        placeholder='password'/>
                         <input type='email'
                        placeholder='Email'/>
                        <input type='text'
                        placeholder='Name'/>
                        <button>Register</button>
                    </form>
                </div>

            </div>
            </div>

        </>

    )

}
export default Registration;