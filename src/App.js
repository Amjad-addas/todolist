import {  Route, Routes } from 'react-router-dom';
import Done from './screens/Done';
import All from './screens/All';
import NotDone from './screens/NotDone';
import './App.css'
import Path from './components/links/Path';
export default function App() {
  return (
    <div>
        <div className='container'>
            <h1>All Mission</h1>
            <div className='links'>
            <Path
            c='red'
            title='all'
            path='all'
            />
            <Path
            title='done'
            path='done'
            />
             <Path
            title='notdone'
            path='notdone'
            />

          </div>
          <Routes>
              <Route path='/' element={<All/>}/>  
              <Route path='all' element={<All/>}/>
              <Route path='done' element={<Done/>}/>
              <Route path='notdone' element={<NotDone/>}/>

          </Routes>
        </div>

    </div>
  );
}
