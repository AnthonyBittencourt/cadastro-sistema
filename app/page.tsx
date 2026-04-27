"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";


export default function Home() {
const router = useRouter()

function Login(){
  router.push("/login")
}

  return (
    <>
      <nav className="bg-gray-900 w-screen h-25 flex ">
        <div className="w-9/10 flex items-center justify-center text-2xl gap-50">
          <Link href="/">Home</Link>
          <Link href="/alunos">Alunos</Link>
        </div>
        <div className="flex justify-center items-center p-10">
          <button onClick={Login} className=" text-black h-10 w-40 border-2 font-bold text-2xl  border-gray-900 rounded-2xl bg-blue-300 px-5">Login</button>
        </div>
      </nav>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-gray-600">
        
      </div>
    </>
  );
}
