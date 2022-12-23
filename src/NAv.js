import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Edit from './Edit';
import Table from './Table';

export default function NAv() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/table' element={<Table/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
