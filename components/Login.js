import React from 'react';
import style from '../styles/Login.module.scss';
import {Button} from 'antd';
import { logIn } from '../DAL/authRequest';
import { useRouter } from 'next/router'
import { LIST_ROUTE } from '../utils/routers';

const Login = () => {
    const router = useRouter();
    const setLogin = ()=> { 
          logIn();
        router.push(LIST_ROUTE); 
     
          
    }
    return (
        <div className={style.login}>
            <div className={style.login__box}>
                 <img src="/logo.svg" alt="logo" width={200}/>
                <h1>LITE SKLAD</h1>
                <Button onClick={setLogin}>Войти через google</Button>
            </div>
           
        </div>
    );
};

export default Login;