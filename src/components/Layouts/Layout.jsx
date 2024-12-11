 import Navbar from "./Navbar";
import Sidebar from "./Sidebar"
const Layout = ({children}) => {
    return (
        <>
        <div className="flex-col w-screen h-screen">
        <div className="flex   bg-blue-200 w-screen h-20">
            <Navbar/>
            </div>
          <div className="flex m-2  w-full h-full "> 
             <Sidebar/>
            {children}
        </div>
        </div>
        </>  
    );
};

export default Layout;