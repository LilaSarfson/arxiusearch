import {useState} from 'react'
import dataStreet from '../data/data.json'
export default function Search (){
    const[calle, setCalle]= useState('')
    const[data, setData]=useState(dataStreet)
    const[findedData, setFindedData]=useState('')

const handleClick = (e) =>{
    e.preventDefault();
    let newdata = data.find((calles)=> calles.calle === calle);
    setFindedData(newdata);
    console.log(newdata)
}

    return(
        <div>
            <form className='flex flex-col items-center'>
                <label>Busca tu calle</label>
                <input onChange={(e)=>{setCalle(e.target.value)}} className="border-2 border-black border-solid w-1/3" type='text'></input>
                <button type="submit" value="submit form" className="border-solid border-2 border-blue self-center" onClick={handleClick}>Enviar</button>
            </form>
            <p>{JSON.stringify(findedData)}</p>
        </div>
    )
}