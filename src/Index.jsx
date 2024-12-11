import { Link } from "react-router-dom";
const index = () => {
    return (
        <>
        <div className="flex flex-col items-center w-full p-2 h-screen">
            <h1>Index</h1>
            <Link to="/Product">Product</Link>
            </div>
        </>
    );
};
 export default index;