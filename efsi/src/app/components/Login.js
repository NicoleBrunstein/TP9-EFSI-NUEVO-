import React from 'react'
import axios from 'axios'

export default function Login() {


    const login = async(user,pass) =>{
        axios.post('/api/login',{
            username: user,
            password: pass
        }).then(function(response){
            return response.data.token;
        })        
    }

    const handleLogin = async (user,pass)=>{
        try {
            const token = await login(user,pass);
            
        } catch (error) {
            
        }
    }

  return (
    <div><button on onClick={handleLogin}>Login</button></div>
  )
}
