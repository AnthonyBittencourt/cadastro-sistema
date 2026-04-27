import AlunoItem from '../../components/AlunoItems'
import Link from 'next/link'
import { getAlunos } from './actions'

export default async function AlunosPage(){
    const alunos = await getAlunos()

    console.log(alunos)

    return(
        <div className="p-10 flex justify-center items-center flex-col w-full h-full ">
            <h1 className="flex justify-center font-bold text-4xl mb-50">Lista de Alunos</h1>

            <div className=" flex w-auto h-100 shadow-1xl shadow-white bg-white justify-center  rounded-4xl overflow-auto" >
                <ul className="text-black m-3 flex flex-col ">
                    {
                        alunos.map((aluno) => <AlunoItem id={aluno.id} name={aluno.name} key={aluno.id}/>)
                    }
                </ul>
            </div>
            <Link href="/aluno/cadastro"> Cadastrar </Link>
        </div>
    )
}