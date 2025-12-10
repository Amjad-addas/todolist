import MissionContainer from "../components/missionContainer/MissionContainer"

export default function Done(){
           const  ms=JSON.parse(window.localStorage.getItem("key"))
           const res= ms.filter((ele)=>ele['complete']==true)

            
    return(
        <MissionContainer res={res}/>
    )
       
    
}