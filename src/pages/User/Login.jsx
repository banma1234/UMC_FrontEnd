import { React, useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './UserStyle.css';   // css 파일 불러오기
import { Container } from './UserStyle';    // styled-components 불러오기

// const TIME_OUT = 60 * 60 * 1000;

export default function Login(){
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userType, setUserType] = useState("default");
    // const [input, setInput] = useState({});
    const navigate = useNavigate();

    // const handleOnChange = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value })
    // }

    const handleInputId = (e) => {
        setUserId(e.target.value)
    };
    const handleInputPw = (e) => {
        setUserPw(e.target.value)
    };
    const handleCombo = (e) => {
        setUserType(e.target.value)
    }
    const onLogin = async () => {
        const body = {
            email: userId,
            password: userPw,
        };
        await axios.post('http://localhost:8080/auth/login', body)
            .then(res => {
                console.log("token : " + res.data);
                let headers = { "accessToken": res.data.token }
                localStorage.setItem("token", headers);
                axios.defaults.headers.common['Authorization'] = `Bearer` + headers;
                // setTimeout(LoginRefresh(headers), TIME_OUT - 60000);
                init();
            })
            .catch(err => {
                console.log(err);
                init(false);
        });
    };

    const init = (flag) => {
        setUserId("");
        setUserPw("");
        if(flag){
            alert("로그인 성공");
            navigate("/");
        }else{
            alert("로그인 실패");
        }
    }

    // const LoginRefresh = (headers) => {
    //     axios.get('http://localhost:8080/users', headers)
    //         .then(onLogin)
    //         .catch(err => {
    //             console.log(err);
    //         })
    // };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "unset"; }
    }, []);

    return(
        <>
        <img className = "bg" src = "img/bg.jpg" alt = ""/>
        <Container> {/* styled-components 파일에서 불러온 스타일 */}
            <div className = "content">
                <h1>Login</h1>
                    <select className = "loginType" onChange = {handleCombo}>
                        <option key = "default" value = "default">default</option>
                        <option key = "expert" value = "expert">expert</option>
                    </select>
                    <input value = {userId} className = "loginInput" placeholder = "e-mail" onChange={handleInputId}/>
                    <input value = {userPw} className = "loginInput" placeholder = "password" type='password' onChange={handleInputPw}/>
                <div className = "btnContainer">
                    <button className = "btn" onClick={onLogin}>Submit</button>
                    <Link to ="/Register">
                        <button className = "btn2">Register</button>
                    </Link>
                </div>
                <br/><hr/><br/>
                <span className = "text_users">this site is sponsered by UMC</span>
            </div>
        </Container>
        </>
    );
}