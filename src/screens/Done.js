import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import Button from '../components/buttons/Button';
import PopupForm from '../components/popup/popUp';

export default function Done(){
           const  ms=JSON.parse(window.localStorage.getItem("key"))
           const res= ms.filter((ele)=>ele['complete']==true)

            console.log(res)
    return(
        <div style={{width:'80%'}}>
            <div >
            {res.map((ele)=>(
                <div className='row'>

                    <div className='btns'>
                    <PopupForm index={ele.id} />
                     <Button
                     index={ele.id}
                     color='red'
                     >
                        <DeleteIcon className='icon'/>
                    </Button>
                    <Button
                    color={ele['complete']==true?'green':'gray'}
                    index={ele.id}
                    
                    >
                        <CheckIcon className='icon'/>
                    </Button>
            </div>

            <div className='misson-container'>
             <h2 className='text'>{ele['mission']}</h2>
            <p className='text'>{ele.desc}</p>
            </div>
           
        </div>
            ))}
        </div>
        </div>
    )
       
    
}