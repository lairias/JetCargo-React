import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import jwt from "jwt-decode"
import axios from  "axios"
//Context.Provider
import { TokenPass } from "../context/token"
//Componentes
import {Header} from "../components/ForgotPassword/Header"

export const ForgotPassword = () => {
  const [veryToken, set_veryToekn] = useState(false)
  const { token, correo } = useParams()
  const {email,id} = jwt(token);

  console.log(TokenPass(token))
  useEffect(()=>{
    handleVery()
  }, [])
  const handleVery = async ()=>{
    const valido =  await axios.get(`http://localhost:4000/api/passreset/${email}`)
    if (valido.data.EMAIL === correo) return set_veryToekn(true);
    return set_veryToekn(false);
  }
  return (
    <>
      <Header email={email} veryToken={veryToken} token={token} id={id} />
    </>
  );};
