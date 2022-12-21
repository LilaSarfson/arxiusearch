import {useState} from 'react'
import dataStreet from '../data/data.json'
export default function Search (){
    const[calle, setCalle]= useState('')
    const[num, setNum]= useState('')
    const[data, setData]=useState(dataStreet)
    const[active, setActive]=useState(false)
    const[findedData, setFindedData]=useState('')

const handleClick = (e) =>{
    e.preventDefault();
    let newdata = data.find((calles)=> calles.calle === calle);
    if(newdata){
        if(newdata.numero === num) {
            setFindedData(newdata)
        }
        else {
            let arrayNum = newdata.numero
           arrayNum.find(numeros => numeros === parseInt(num)) ? setFindedData(newdata) : console.log('esa calle no tiene ese numero')
        }
    }
    else{
        setFindedData('')
        setActive(true)
        setTimeout(() => {
            setActive(false);
          }, "5000")
        console.log('Nombre incorrecto')}
}

    return(
        <div>
            <form className='flex flex-col items-center'>
                <h2 className='font-bold'>Busca tu calle</h2>
                <label>Calle</label>
                { active ?
                <p className='text-red-500 underline'>Ese nombre no se encuentra en nuestra base de datos</p> : ''
                }
                <input required onChange={(e)=>{setCalle(e.target.value)}} className="border-2 border-black border-solid w-1/3" type='text'></input>
                <label>Número</label>
                <input onChange={(e)=>{setNum(e.target.value)}} className="border-2 border-black border-solid w-1/3" type='text'></input>
                <button type="submit" value="submit form" className="border-solid border-2 border-blue self-center" onClick={handleClick}>Enviar</button>
            </form>
            <div className='text-center'>
                <p>Distrito: {findedData ? JSON.stringify(findedData.distrito) : ''}</p>
                <p>Seccion: {findedData ?  JSON.stringify(findedData.seccion): ''}</p>
            </div>

        </div>
    )
}