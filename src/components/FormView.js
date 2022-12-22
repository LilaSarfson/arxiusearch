
import { useEffect, useState } from "react"
export default function FormView (){
    const[street, setStreet]=useState('');
    const [num, setNum]= useState('');
    const [district, setDistrict]= useState('')
    const [seccion, setSeccion]= useState('')
    const [dataStreet, setDataStreet]=useState([])

    useEffect(()=>{
        localStorage.setItem("calles", JSON.stringify(dataStreet));
    }, [dataStreet])
    const armarObj = () =>{
        let objStreet = {calle: street, numero:[num], distrito:district, seccion:seccion}
        setDataStreet(dataStreet=> [...dataStreet, objStreet]) 
    }   
    const SetearObj = (e) =>{
        e.preventDefault()
        armarObj()
        console.log(dataStreet)
    }

    return(
    <div className="flex flex-col">
        <form onSubmit={(e) => {e.preventDefault(); e.stopPropagation()}} className="flex flex-col items-center">
            <label>Nombre de la calle</label>
            <input onChange={(e)=>{setStreet(e.target.value); e.preventDefault()}} className="border-2 border-black border-solid w-1/3" type='text'></input>
            <label>Número</label>
            <input onChange={(e)=>{setNum(e.target.value); e.preventDefault()}} className="border-2 border-black border-solid w-1/3" type='text'></input>
            <label>Distrito</label>
            <input onChange={(e)=>{setDistrict(e.target.value); e.preventDefault()}} className="border-2 border-black border-solid w-1/3" type='text'></input>
            <label>Sección</label>
            <input onChange={(e)=>{setSeccion(e.target.value); e.preventDefault()}} className="border-2 border-black border-solid w-1/3" type='text'></input>
            <button type="submit" value="submit form" className="border-solid border-2 border-blue self-center" onClick={SetearObj}>Enviar</button>
        </form>
        <br/>
        <div className='w-1/3 self-center'><p>{JSON.stringify(dataStreet)}</p></div>
    </div> 
    )
}