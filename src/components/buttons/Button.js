import { useContext } from 'react';
import './buttons.css'
import { missonContext } from '../../context/missonContext';

export default function Button(props){
    const msi = useContext(missonContext)
    
    return(
        <button
        onClick={()=>{
        if(props.color=='red'){
           const  ms=JSON.parse(window.localStorage.getItem("key"))
           const res= ms.filter((index)=>index['id']!=props.index)
           msi.setMission(res)
           window.localStorage.setItem("key",JSON.stringify(res))
        }
        else if(props.color=='gray'){
           const  ms=JSON.parse(window.localStorage.getItem("key"))
           const res= ms.find((index)=>index['id']==props.index)

           const listUnCompleted = ms.filter((ele)=>ele.id!=props.index)
           msi.setMission([...listUnCompleted,{
            "id":res.id,
            "mission":res.mission,
            "complete":true
        }].sort((a, b) => a.id - b.id))
        window.localStorage.setItem('key',JSON.stringify(
            [...listUnCompleted,{
            "id":res.id,
            "mission":res.mission,
            "complete":true
        }].sort((a, b) => a.id - b.id)
        ))
        }
        else if(props.color=='green'){
            let key =JSON.parse( window.localStorage.getItem("key"))
            const updateEle =key.find((ele)=>ele.id==props.index)
            const fillterKey=key.filter((ele)=>ele.id!=props.index)
            let updateList=[...fillterKey,{
                    "id":updateEle.id,
                    "mission":updateEle.mission,
                    "complete":false
                }].sort((a, b) => a.id - b.id)
            window.localStorage.setItem("key",JSON.stringify(
                updateList
            ))
            msi.setMission(updateList.sort((a, b) => a.id - b.id))

        
        }
        

    }}
        style={{color:props.color}}
        className='icon-btn'>
            {props.children}
        </button>
    );
}