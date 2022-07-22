import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/Auth/signin'

import AdminLayout from './components/Layout/admin'

import Signin from './pages/Auth/signin'
import ProductAdminPage from './pages/Admin/Product'
import ProductAdd from './pages/Admin/Product/add'
import ProductEdit from './pages/Admin/Product/edit'
import HomePage from './pages/Home'
import UserLayout from './components/Layout/user'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='signin' element={<Signin />}></Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<ProductAdminPage />} />
          <Route path='product/add' element={<ProductAdd />} />
          <Route path='product/edit/:id' element={<ProductEdit />} />
        </Route>
      </Routes>
    </Container>
  )
}
const Container = styled.div`
  text-align: center;
`


export default App
