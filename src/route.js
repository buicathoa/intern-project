import Home from './components/home';
import react from 'react';
import LogIn from './components/LogIn';
import DetailItem from './components/DetailItem';
import Cart from './components/Cart';
import Config from './components/config';
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
        path:'/login',
        main : () => <LogIn/>,
        exact:false
    },
    {
        path:'/cart',
        main : () => <Cart/>,
        exact:false
    },
    {
        path:'/config',
        main : () => <Config/>,
        exact:false
    },
]
export default routes