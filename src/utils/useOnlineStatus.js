import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const[onlinestatus,setonlinestatus] = useState(true);
    //check if online use eventlistner

    useEffect( () =>{
       
        //whenever user go offline set false
        window.addEventListener("offline", () => {
             setonlinestatus(false);
        })

        //set tre for online

        window.addEventListener("online", () => {
            setonlinestatus(true);
       })

    },[])


    return onlinestatus;
}

export default useOnlineStatus;