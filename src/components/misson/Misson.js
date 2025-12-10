import Button from '../buttons/Button';
import './misson.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

import PopupForm from '../popup/popUp';
import { useContext, useState } from 'react';
import { missonContext } from '../../context/missonContext';
import MissionContainer from '../missionContainer/MissionContainer';
export default function Misson(){
    const allMission = useContext(missonContext)
    if(allMission.ms!=null){
    return(
        <MissionContainer res={allMission.ms}/>
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