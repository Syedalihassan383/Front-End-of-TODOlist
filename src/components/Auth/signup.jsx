const Signup = ({setAuth} )=> {
    return(
        
         
        <div className=" flex-col p-10 justify-center items-center  w-screen  bg-green-300 rounded-md">
        <h1 className= "text-white flex justify-center m-3 text-2xl font-bold p-2">SignUp form</h1>
        <div className=" flex justify-center items-center  p-4 p-2 h-3/5 bg-gray-400 flex-col gap-2">
      <div className="flex gap-2 bg-red-600 p-1 flex justify-center items-center rounded-md"> <label className="text-x1">FirstName</label>
            <input 
            className="p-2 rounded-md" 
            placeholder="Firstname"
            type="text"
            required
            
            />
            </div> 
            <div className="flex gap-2 bg-red-600 p-1 flex justify-center items-center rounded-md"> <label className="text-x1">LastName</label>
            <input 
            className="p-2 rounded-md" 
            placeholder="LastName"
            type="text"
            required
            
            />
            </div>
            <div className="flex gap-2 bg-red-600 p-1 flex justify-center items-center rounded-md">
                             <label className="text-x1">Your Gmail</label>
            <input 
            className="p-2 rounded-md" 
            placeholder="Your Gamil"
            type="text"
            required
            
            />
            </div>
            <div className="flex gap-2 bg-red-600 p-1 flex justify-center items-center rounded-md">

             <label className="text-x1">Password</label>
            <input 
            className="p-2 rounded-md" 
            placeholder="Password"
            type="Password"
            required
            
            />
            </div>
            <div className="flex gap-2 bg-red-600 p-1 flex justify-center items-center rounded-md">
            <label className="text-x1"> RE-type Password</label>
        <input 
        
            className="p-2 rounded-md" 
            placeholder="Re-type Password"
            type="password"
            required
            
            />
            </div>
            <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-2 rounded-md">
  Save My Details
</button>
            <p>
            
                Already have an account 
                <span className="text-blue-600 cursor-pointer gap-2 flex justify-center items-center" onClick={() => setAuth("signup")} >login</span>
            </p>
        
            
        </div>
            </div>
    );
};
export default Signup;