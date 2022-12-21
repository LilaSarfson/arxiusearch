import { useState } from "react"
export default function NumberGeneration (){
    const[numero, setNum]=useState('')
    const[pares, setPares]=useState('') 
    const numPares = ()=>{
        let size = parseInt(numero)
        // Invalid length of array wtf??
        let range = Array.from(Array(size).keys())
        // let rangePar = range.find(num => (num % 2)===0)
        // console.log(rangePar)
    }
    return(
        <div>
            <input className='border-2 border-black border-solid w-1/3' onChange={(e)=>setNum(e.target.value)} type='text'></input>
            <button onClick={numPares()}>Pares</button>
            <p>{pares}</p>
        </div>
    )
}