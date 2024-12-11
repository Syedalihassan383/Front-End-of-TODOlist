import Signup from "./components/Auth/signup";
import Login from "./components/Auth/login";
import { useState } from "react";
const Auth = () =>{
    const[auth , setAuth] = useState("login");
    return(
     <>
          {auth == "login" && <Login setAuth={setAuth}/>}  
           {auth == "signup" && <Signup setAuth={setAuth}/>}
            </>
           
    );
};
export default Auth;