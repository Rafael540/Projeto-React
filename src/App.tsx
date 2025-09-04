import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import ClientHome from './routes/ClientHome';
import Cart from './routes/ClientHome/Cart';
import { useState } from 'react';
import { ContextCartCount } from './utils/context-carts';
import Login from './routes/ClientHome/Login';
import AdminHome from './routes/Admin/AdminHome';
import Admin from './routes/Admin';


export default function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [contextCartCount, setcontextCartCount] = useState<number>(0);


  return (
    <ContextCartCount.Provider value={{ contextCartCount, setcontextCartCount }}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product-details/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element={<Admin/>}>
            <Route index element={<AdminHome/>}/>

          </Route>
          <Route path="*" element={<Navigate to='/' />} />

        </Routes>

      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}
