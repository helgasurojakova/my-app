import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import {useContext} from 'react';
import React, {useState} from 'react';
import { API } from '../API/Service';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";

function AuthPage() {

  const {isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  function handleChangeLogin(event:React.FormEvent<HTMLInputElement>) {
    setLogin(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  function handleChangePassword(event:React.FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  const validation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login.length === 0) {
      return alert('Введите логин')
    } 

    if (password.length < 6) {
      return alert('Минимальная длина пароля - 6 символов')
    }
      API.auth()
      setIsAuth(true);
      navigate("/home")
  }

    return (
      <div className="content__auth-page">
        <h1 className="content__auth-page__title">ВХОД В СИСТЕМУ</h1>
        <form className="content__auth-page__form" onSubmit={validation}>
        <Input onChange={handleChangeLogin} title={''} type={'text'} placeholder={'Введите логин'} value={login}/>
        <Input onChange={handleChangePassword} title={''} type={'password'} placeholder={'Введите пароль'} value={password}/>
        <Button text={'ВОЙТИ'}/>
        </form>
      </div>
    );
  }
  
  export default AuthPage;