import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex p-2 bg-blue-300 w-2/6 h-full">

            <div className=" flex-col flex gap-2 w-full h-full ">
                <Link to={"/Products"} className="text-white bg-blue-600 m-2 text-xl p-2 rounded-lg">project management</Link>
                <h1 className="text-white bg-slate-500 rounded-lg  m-1 text-xl  p-2">order mangament</h1>
                <h1 className="text-white  text-xl m-1 bg-slate-500 rounded-lg  p-2">Customer  management</h1>
                <input placeholder="Search...."
                    required className="w-5/6 p-2 rounded-md m-1" />
                <button>search</button>
            </div>

        </div>
    )
};

export default Sidebar;