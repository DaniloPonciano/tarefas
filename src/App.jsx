import { useState } from 'react'
import MenuSuperior from './components/MenuSuperior'
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Navigate } 
from 'react-router-dom';
function App() {
  //código javascript
  
  //retorno da função que é visualização do componente html
  return (
    <Router>        
        <Routes>
            <Route path="/" element={<MenuSuperior/>}/>
        </Routes>
    </Router>    
  )
}
export default App;