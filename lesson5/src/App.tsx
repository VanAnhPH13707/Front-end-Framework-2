import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/Auth/signin'
import Header from './components/Header'
import UserPage from './pages/User/user'
import AdminLayout from './components/Layout/admin'

import Signin from './pages/Auth/signin'
import ProductAdminPage from './pages/Admin/Product'
import ProductAdd from './pages/Admin/Product/add'
import ProductEdit from './pages/Admin/Product/edit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Routes>
        <Route path="/" element={<UserPage />}></Route>
        <Route path='signin' element={<Signin />}></Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<ProductAdminPage />} />
          <Route path='product/add' element={<ProductAdd/>}/>
          <Route path='product/edit' element={<ProductEdit/>}/>
        </Route>
      </Routes>
    </Container>
  )
}
const Container = styled.div`
  text-align: center;
`


export default App
