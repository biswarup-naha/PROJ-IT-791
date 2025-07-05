import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RoutingTable from './pages/RoutingTable'
import Home from './pages/Home'
import TableForm from './pages/TableForm'
import Contact from './pages/Contact'
import HowItWorks from './pages/HowItWorks'
import Layout from './pages/Layout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path='/tableForm' element={<TableForm/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/howItWorks" element={<HowItWorks/>} />
        <Route path="/result" element={<RoutingTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App