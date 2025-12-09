import { Link } from "react-router-dom"
import './links.css'
export default function Path({title,path,c}){
    

    return(
            <Link className="link-path btn-path" id="btn" to={`/${path}`}
        style={{color:c}}
        onClick={(e)=>{

            document.querySelectorAll("a").forEach((btn)=>{
                
                btn.style.color='#7f8284'
            })

           e.target.style.color='red'
           
           
        }}
        >{title}
       
            
            </Link>
      
    );
}