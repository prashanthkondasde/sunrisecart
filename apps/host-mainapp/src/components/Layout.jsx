import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './shared/Navbar';
import Footer   from './shared/Footer';
import CartDrawer from './shared/CartDrawer';  
const Layout = () => {
const [cartOpen, setCartOpen] = useState(false);
// useEffect(() => {
//   const initializeAuth = async () => {
//       try {
//         const response =await apiClient.me();
//         setTokens(response.accessToken,response.csrfToken);
//         setUser(response.user);
//       } catch (error) {
//         console.log("No active session",error);
//       }
//     };
//   initializeAuth();
// }, []);
  return (
    <>
        <Navbar onCartClick={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} setOpen={() => setCartOpen(false)} />
        <main>
            <Outlet/>
        </main>
        <Footer/>  
    </>
  )
}

export default Layout