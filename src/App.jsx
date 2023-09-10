import './App.css';
import Button from '@mui/material/Button'
import ResponsiveAppBar from './Nav/Nav.jsx'
import College from './colleges/Colleges';
import { Container ,Grid ,Box } from '@mui/material';
import Welcome from './Welcome/Welcome';
import { Route, Routes, useParams } from 'react-router-dom';
import React from 'react';
import MediaPage from './MediaPage/MediaPage';
import axios from 'axios';
import HomePage from './HomePage/HomePage';
import SubjectPage from './SubjectPage/SubjectPage'
import DrNumbers from './DrNumbersPage/DrNumbers';
import ScientificPage from './ScientificPage/ScientificPage';
function App() {
 
  return (
    <>
      <div className="allroot">

      <ResponsiveAppBar />
      
      

    <Routes>
        <Route exact path='/' element={<HomePage />} /> 
        <Route exact path='/Home' element={<HomePage />} /> 
        <Route exact path='/DrEmails' element={<DrNumbers/>}/>
        <Route exact path='/ScientificBooks' element={<ScientificPage/>}/>
        <Route exact path='/major/:id' element={<><div className="colleges"><SubjectPage/></div></>} /> 
        
        <Route path='major/:id/subjects/:subId' element={<><div className="colleges"><MediaPage/></div></>}/>
    </Routes>

      </div>
      
      
    </>
  );
}


export default App;
