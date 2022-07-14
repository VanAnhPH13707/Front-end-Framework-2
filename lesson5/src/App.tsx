import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'
import UserPage from './pages/User/user'
import AdminLayout from './components/Layout/admin'
import AdminPage from './pages/Admin/admin'
import Category from './pages/Admin/categories'
import Product from './pages/Admin/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<UserPage />}></Route>
        <Route path='' element={<ProductDetail />}></Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminPage/>}/>
          <Route path='category' element={<Category />}/>
          <Route path='product' element={<Product />}/>
        </Route>
      </Routes>
    </Container>
  )
}
const Container = styled.div`
  text-align: center;
`


export default App
