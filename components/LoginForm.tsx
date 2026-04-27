"use client"

import { useState } from "react"
import {useRouter} from "next/navigation"

interface Props{
   onSend: (email: string, password: string) => Promise<void | string> 
}

export default function LoginForm({onSend}: Props){
    
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(){
        const response = await onSend(email, password)

        if(response){
            alert(response)
            return
        }

        router.push("/")
    }

    return(
            <div className=" shadow-2xl shadow-gray-300  flex w-3/12 h-8/12  items-center gap-5 flex-col bg-blue-300/20 p-10 py-20 flex-nowrap overflow-hidden">
                <h1 className="pl-2 w-full text-3xl text-gray-900 font-bold tracking-[5]  ">Login</h1>
                <input className=" h-15 w-full mt-10 px-5 border border-black bg-white text-black rounded-sm" type="email" placeholder="Email" value={email} onChange={(e) =>  setEmail(e.target.value)}/>
                <input className=" h-15 w-full mt-5 px-5 border border-black bg-white text-black  rounded-sm" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="h-15 mt-10 cursor-pointer hover:opacity-50 w-60 border-3 border-black rounded-4xl bg-amber-600 items-center flex justify-center font-semibold" onClick={handleSubmit}>Entrar</button>
            </div>
    )
}