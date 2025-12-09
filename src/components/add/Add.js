import {  useContext, useState } from 'react';
import './add.css'
import { add } from '../../controller/insertData';
import { missonContext } from '../../context/missonContext';

export default function Add(){
    const [val,setVal]=useState("Add Mission")
    const mis = useContext(missonContext)
    return(
        <div className='add-container'>
            <input
            onFocus={()=>{
                setVal('')
            }}
            onChange={
                (e)=>{
                    setVal(e.target.value)
                }
            }
            style={{width:"300px"}} type='text' value={val}/>
            <button 
            onClick={()=>add(val,setVal,mis.setMission,mis.ms)}
            className='btn-add'>Adding Mission</button>
        </div>
    );
}