import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTheme, changeTheme } from "../features/theme/themeSlice"
import { LoginPageStyled } from "../components/Login/LoginPageStyled"
import LoginPhoto from "../assets/images/home.jpg"
import { LoginImageStyled } from "../components/Login/LoginImageStyled"
import { LoginFormContainerStyled } from "../components/Login/LoginFormContainerStyled"
import LogoPic from "../assets/images/logo.png"
import { FormStyled, InputStyled, LabelStyled } from "../components/Form/FormStyled"
import { LogoImg, LogoImgSolo } from "../components/Logo/LogoStyled"
import { ButtonFormStyled } from "../components/Button/ButtonStyled"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeSelectorAbsoluteStyled } from "../components/ThemeSelector/ThemeSelectorStyled"
import { MoonStyledIcon, SunStyledIcon } from "../components/Icons/IconsStyled"


export const  LoginPage =()=> {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const themeData = useSelector(getTheme)

  const loginError = () =>
    toast.error("Can't login, please use the data in the placeholders")

  const handleThemeChange = () => {
    dispatch(changeTheme())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = e.target.user.value
    const password = e.target.password.value
    if (user !== 'test@test.com' || password !== 'test') {
      loginError()
    } else {
      navigate('/root/dashboard')
    }
  }
  return (
    <LoginPageStyled>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <LoginImageStyled src={LoginPhoto} alt="Hotel photo" />
        <LoginFormContainerStyled>
        <LogoImgSolo src={LogoPic} alt="Logo" />
        <FormStyled onSubmit={handleSubmit}>
            <LabelStyled>User</LabelStyled>
            <InputStyled
                type="email"
                name="user"
                placeholder="test@test.com"
            />
            <LabelStyled>Password</LabelStyled>
            <InputStyled
                type="password"
                name="password"
                placeholder="test"
            />
            <ButtonFormStyled
                type="submit"
            >
                Login
            </ButtonFormStyled>
            
        </FormStyled>
        <ThemeSelectorAbsoluteStyled onClick={handleThemeChange}>
            {themeData ? <SunStyledIcon /> : <MoonStyledIcon />}
        </ThemeSelectorAbsoluteStyled>

        </LoginFormContainerStyled>
    </LoginPageStyled>
  )
}

