import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RoutingTable from './pages/RoutingTable'
import Home from './pages/Home'
import TableForm from './pages/TableForm'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tableForm' element={<TableForm/>}/>
        <Route path="/result" element={<RoutingTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App