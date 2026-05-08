import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './shared/Navbar';
import Footer   from './shared/Footer';
import CartDrawer from './shared/CartDrawer';  
const Layout = () => {
const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
        <Navbar onCartClick={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} setOpen={() => setCartOpen(false)} />
        <main>
            <Outlet/>
        </main>
        <Footer />  
    </>
  )
}

export default Layout