import Home from './components/home';
import react from 'react';
import LogIn from './components/LogIn';
import DetailItem from './components/DetailItem';
import CustomerCare from './components/CustomerCare';
import Cart from './components/Cart';
const routes = [
    {
        path:'/',
        main : () => <Home/>,
        exact:true
    },
    {
        path:'/san-pham/:slug.:id.html',
        main :  ({match}) => <DetailItem match={match} />,
        exact:false
    },
    {
        path:'/care',
        main : () => <CustomerCare/>,
        exact:false
    },
    {
        path:'/login',
        main : () => <LogIn/>,
        exact:false
    },
    {
        path:'/cart',
        main : () => <Cart/>,
        exact:false
    },
]
export default routes