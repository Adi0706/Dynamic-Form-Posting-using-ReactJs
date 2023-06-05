import React, { useEffect, useState } from "react";
import UserData from "./UserData";


// const API ="https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture";

export default function Data(){
    const [users,setusers] = useState([]);

const fetchUser = async ()=>{
    try {
       const res = await fetch("https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture");
       const data = await res.json();
       setusers(data);
       console.log(data)
    //    if(data.length > 0)
    //    {
    //     setusers(data);
    //    }
    } catch(e){
        console.error()
    }

}

    useEffect(() => {
      fetchUser();
    }, [])
    
    return(
        <></>
    )
}