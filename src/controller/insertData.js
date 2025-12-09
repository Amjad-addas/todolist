function add(val,setVal,setMission){
            if(window.localStorage.getItem("key")){
            let mission =window.localStorage.getItem("key")
            mission=JSON.parse(mission)
            mission.push({
                "id":mission.length+1,
                "mission":val,
                "complete":false,
                'desc':''
            })
            setMission(mission)
            let m=JSON.stringify(mission)
             window.localStorage.setItem("key",m)
        }else{
             window.localStorage.setItem("key",JSON.stringify(
                
               [ {"id":1,"mission":val,"complete":false,"desc":''}]
            ))
            setMission([ {"id":1,"mission":val,"complete":false,"desc":''}])
        }
        setVal("Add Mission")
        
}

export {add}