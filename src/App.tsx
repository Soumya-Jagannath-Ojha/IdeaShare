import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NewNote from './NewNote'

import { Container } from 'react-bootstrap'
function App() {

  return (
    <Container className='my-4'>
      <Routes>
        <Route path="/" element ={<h1>Hii</h1>} />
        <Route path="/new" element ={<NewNote/>} />
        <Route path="/:id">
        <Route index element={<h1>Show opath</h1>} />
        <Route path="edit" element={<h1>Edit</h1>} />

          <Route/>
        </Route>
        <Route path="/*" element ={<Navigate to="/"/>} />
        
      </Routes>
    </Container>
  )
}

export default App
