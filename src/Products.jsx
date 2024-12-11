import { Link } from "react-router-dom";
const Product = ({ children}) =>{
    return(
        <>
        <div className="flex-col flex w-full h-full">
        <h1 className="text-white flex justify-center m-3 text-2xl font-bold p-2">Products</h1>
       <div className="w-full h-full flex flex-col ">
        <div className="flex gap-2 w-full h-1/7">
        <Link  to={"/product/CreateProduct"} className="bg-blue-900 text-white p-1 rounded-md">
            Create Product
        </Link>
        <Link to={"/product/get"}  className="bg-blue-900 text-white p-1 rounded-md">
            get product
        </Link>
        </div>
        <div className="w-full h-full bg-pink-500">{ children}</div>
       </div>
       </div>
</>
    );
};
export default Product;