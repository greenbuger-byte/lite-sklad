import React from 'react';
import style from '../styles/Login.module.scss';


const Login = () => {
    return (
        <div className={style.login}>
                <h1>Login</h1>
                <Button>Войти через google</Button>
        </div>
    );
};

export default Login;