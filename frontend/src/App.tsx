import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import RoutingTable from './pages/RoutingTable'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<RoutingTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App