import { useState } from "react"
import { Heading } from "../components/heading"
import { InputBox } from "../components/inputBox"
import { SubHeading } from "../components/subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { ButtonWarning } from "../components/ButtonWarning"


export const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const navigate = useNavigate()

    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading lable={"Sign Up"}/>
                    <SubHeading label={"Enter your information to create an account"}/>
                    <InputBox onChange = {e => {
                        setFirstName(e.target.value)
                    }} placeholder="John" label={"First Name"}/>
                     <InputBox onChange = {e => {
                        setLastName(e.target.value)
                    }} placeholder="Doe" label={"Last Name"}/>
                     <InputBox onChange = {e => {
                        setUserName(e.target.value)
                    }} placeholder="Johndoe@gmail.com" label={"Email"}/>
                     <InputBox onChange = {e => {
                        setPassword(e.target.value)
                    }} placeholder="password" label={"Password"}/>
                    <div className="pt-3">
                        <Button onClick={ async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                firstName,
                                lastName,
                                username,
                                password
                            });
                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")
                        }} lable={"Sign Up"}/>
                        <ButtonWarning lable={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


