import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>React Folder Structure</h1>
      <div className='app-container'>
      
      <div className='beginner'>
      <ul>Beginner
        <li>Components</li>
        <li>Styles</li>
      </ul></div>
     <div className='beginner'>
      <ul>Intermediate
        <li>Components</li>
        <li>Styles</li>   
             <li>Assets(audios,images and videos)</li>
             <li>Authorization</li>
             <li>Helpers</li>
             <li>Hooks</li>
               <li>Pages /Routes</li>
             
             <li>Redux</li>

      </ul>
      </div>
      <div className='beginner'>
      <ul>Advanced
        <li>Components</li>
        <li>Styles</li>   
             <li>config</li>
             <li>constants</li>
             <li>Core-ui</li>
             <li>Interface</li>


      </ul>
      </div>
      </div>
   </div>
  )
}

export default App
