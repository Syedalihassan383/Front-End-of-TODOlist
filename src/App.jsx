import { Route, Routes } from "react-router-dom";
import Auth from "./auth";
import Index from "./Index";
import Products from "./Products";
import CreateProduct from "./product/create";
import Get from "./product/get";
import Layout from "./components/Layouts/Layout"
import { useLocation} from "react-router-dom";
import Product from "./Products";

const App = () =>{
  const location =useLocation();
  const isAuthPath = location.pathname === "/";
  return(
    <>
   <div className="flex- justify-center items-center w-screen h-screen bg-blue-">
{  isAuthPath ? (
  <Routes>
    <Route index element={<Auth />} />
    </Routes>
) : (
<div className="flex flex-col items-center w-screen bg-slate-500 h-screen">
  <Layout>
       <div className=" flex justify-center items-center w-screen h-screen" >
        <Routes>
        <Route path="Index"element ={<Index/>}/>
        <Route path="product">
        <Route index element ={<Products/>}/>
        <Route path="CreateProduct" element ={
          <Product><CreateProduct/>
          </Product>}/>
        <Route path="get" element ={
          <Product><Get/>
          </Product>}/>
        </Route>
        </Routes>
        
        </div>
        </Layout>
        

  </div>
)}
   </div>
  </>
  )
}
export default App
