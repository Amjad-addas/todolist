import { useState } from "react";
import Add from "../components/add/Add";
import Misson from "../components/misson/Misson";
import { missonContext } from "../context/missonContext";

export default function All(){
        const ms=JSON.parse(window.localStorage.getItem("key"))

    const [misson,setMisson]=useState(ms||[])

    return(
        <missonContext.Provider
        value={{setMission:setMisson,ms:misson}}
        >
        <div style={{width:"97%",padding:"12px"}}>
           <Misson />
           <Add/>
           
        </div>
        </missonContext.Provider>
    );
}