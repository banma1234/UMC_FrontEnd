import { Route, Routes } from 'react-router-dom';
import { Home, NotFound } from '../../pages';
import { Login, Register } from '../../pages/User';

export default function Router(){
    return(
        <>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/Login" element = {<Login/>}/>
            <Route path = "/Register" element = {<Register/>}/>
            <Route path = "*" element={<NotFound />}/>
        </Routes>
        </>
    );
}