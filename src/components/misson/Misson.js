import Button from '../buttons/Button';
import './misson.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import PopupForm from '../popup/popUp';
import { useContext, useState } from 'react';
import { missonContext } from '../../context/missonContext';
export default function Misson(){
    const allMission = useContext(missonContext)
    if(allMission.ms!=null){
    return(
        <div >
            {allMission.ms.map((ele)=>(
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
    );
    }
    else{
        return(
            <div>
                <h1>
                    no mission
                </h1>
            </div>
        )
    }
}