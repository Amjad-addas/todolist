import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import PopupForm from '../popup/popUp';
import Button from '../buttons/Button';


export default function MissionContainer({res}){
    return(
            <div style={{width:'100%'}}>
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