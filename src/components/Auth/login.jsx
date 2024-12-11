import { useNavigate } from "react-router-dom";



const Login = ({setAuth} )=>{
    const navigate = useNavigate();
    return(
        <div className="flex justify-center items-center bg-blue-600 w-screen h-screen">
<div className=" flex-col justify-center items-center  w-2/4 h-5/6 bg-green-300 rounded-md">
<h1 className= "text-white flex justify-center m-3 text-2xl font-bold p-2">login form</h1>
<div className=" flex justify-center items-center h-3/5 bg-gray-400 flex-col gap-2">
<label className="text-x1">username</label>
    <input 
    className="p-2 rounded-md" 
    placeholder="username"
    type="text"
    required
    
    />
    <label className="text-x1">Password</label>
<input 

    className="p-2 rounded-md" 
    placeholder="Enter Password"
    type="password"
    required
    
    />
    <p>
        don't have an account 
        <span className="text-blue-600 cursor-pointer" onClick={() => setAuth("signup")} >signup</span>
    </p>

    <button className="p-2 rounded-md text-white bg-gray-400 w-2"
    onClick={() => navigate("/Index")}>
        login
    </button>
</div>
    </div>
</div>
        
    );
};
export default Login;