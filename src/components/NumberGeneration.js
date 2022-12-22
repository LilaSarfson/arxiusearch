import { useState } from "react"
export default function NumberGeneration (){
    const[numero, setNum]=useState(0)
    const[pares, setPares]=useState('') 
    let size = parseInt(numero)
    const numParesImpares = (signo)=>{
        let range = Array.from(Array(size +1).keys())
        if(signo === 'par'){
        let rangePar = range.filter(num => num%2===0)
        console.log(rangePar)
        }
        else if(signo==='todo'){
            console.log(range)
        }
        else{
            let rangePar = range.filter(num => num%2!==0)
            console.log(rangePar)}
        }
    return(
        <div className="flex flex-col gap-4 items-center">
            <input className='border-2 border-black border-solid w-1/3' onChange={(e)=>setNum(e.target.value)} type='text'></input>
            <button className="bg-yellow-200" onClick={()=>{numParesImpares('todo')}}>Todos</button>
            <button className="bg-orange-200" onClick={()=> {numParesImpares('par')}}>Pares</button>
            <button className="bg-yellow-200" onClick={()=>{numParesImpares('impar')}}>Impares</button>
            <p>{pares}</p>
        </div>
    )
}