import React from 'react';
import { Link } from 'react-router-dom';
// Board의 index.js에서 불러오기 때문에 한번에 중괄호로 묶어 Board에서 import가 가능하다
// import { Page1, Page2, Page3 } from './Board';

export default function Home(){
    return(
        <>
        <h1>Home</h1>
        <Link to ="/Login">
            <button>Login</button>
        </Link>
        </>
    )
}