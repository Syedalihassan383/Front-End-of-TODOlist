import { use } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import index from './../Index';

const Get = () =>{
    const[data ,setData] = useState([]);
    
    const getAllusers =async () =>{
        console.log("Before,======>");
        try{
            console.log("check")
            const data = await axios.get("http://localhost:3000/users/get-All",{
                withCredentials: true,
          
           
           

            });
            console.log(data.data.data);
           
         
            if (data.data.data.length > 0) {
             return   setData(data.data.data);
            }
        
        }catch(error){
            console.log(error);
        }
    };
    const UserCard=(
        
        
        {user})=>{

        return(
            <div 
            className="flex-col rounded-xl justify-center items-center bg-slate-500 w-1/6 h-2/6">

           <p className="text-white flex justify-center m-2 text-xl font-bold ">{user.userid}</p>
           <p className="text-white flex justify-center m-2 text-xl font-bold ">{user.name}</p>
           <p className="text-white flex justify-center m-2 text-xl font-bold ">{user.username}</p>

           <p className="text-white flex justify-center m-2 text-xl font-bold ">{user.email}</p>   
           </div>
        )
    }
    useEffect(() => {
        getAllusers();
    },
[])
    return(
        <>
        <div className="w-full flex flex-wrap gap-2 h-full p-2">
          {data.length > 0 ?(
<>
               {data.map((user , index) => {
   return(
       <UserCard key={index} user={user}/>
   );
           
          
            }
        )
    }
      </>
              


          ):(
            <>
        <div> 
           {""} <p>Loading...</p></div> {" "}
            </>) }   
            </div>
            </>
    );
};
export default Get;