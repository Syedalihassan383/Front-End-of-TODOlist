import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <div className=" flex items-center w-screen  h-full bg-gray-400  justify-end">
            <div> profile</div> 
       <div className="flex gap-2 w-2/4 items-center justify-evenly">
        <Link to={"Index"} class="bg-violet-500  p-2 rounded-full" > Home</Link>
        <Link  className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-2 rounded-full"  > About</Link>
        <Link class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-2 rounded-full" > Contact</Link>
        <Link class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-2 rounded-full" > products</Link>
        </div>
        </div>
    )
};
export default Navbar;