import {useState} from 'react'
import dataStreet from '../data/data.json'
import HandleError from './HandleError'
export default function Search (){
    const[calle, setCalle]= useState('')
    const[num, setNum]= useState('')
    const[posicion, setPosicion]= useState('')
    const[data, setData]=useState(dataStreet)
    const[activeName, setActiveNam]=useState(false)
    const[activeNum, setActiveNum]=useState(false)
    const[findedData, setFindedData]=useState('')

const handleClick = (e) =>{
    e.preventDefault();
    let newdata = data.filter((calles)=> calles.calle === calle.toLowerCase());
    // console.log(newdata)
    if(newdata && num){
        if(newdata.numero === num || newdata.numero=== 'toda') {
            setFindedData(newdata)
        }
        else if (newdata.length !== 1){
            Object.entries(newdata).forEach(([key, value]) => {
                (value.numero).map((numer) => numer === parseInt(num)) ? setPosicion(key) : console.log('ese numero no esta e el array')
                console.log(posicion)
                posicion ? setFindedData(newdata[posicion]) : console.log('no se puedo')
              });
        }
        else {
            let arrayNum = newdata.numero
           arrayNum.find(numeros => numeros === parseInt(num)) ? setFindedData(newdata) : setActiveNum(true);setTimeout(() => {
            setActiveNum(false);
          }, "5000")
        }
    }
    else if (newdata){
        if(newdata.length != 1){
            console.log('necesita un numero')
        }
        else{
            setFindedData(newdata)}

    }
    else{
        setFindedData('')
        setActiveNam(true)
        setTimeout(() => {
            setActiveNam(false);
          }, "5000")
        console.log('Nombre incorrecto')}
}

    return(
        <div>
            <form className='flex flex-col items-center'>
                <h2 className='font-bold'>Busca tu calle</h2>
                <label>Calle</label>
                { activeName ? 
                <HandleError error='Ese nombre no esta en nuestra base datos'/> : ''
                 }
                <input required onChange={(e)=>{setCalle(e.target.value)}} className="border-2 border-black border-solid w-1/3" type='text'></input>
                <label>Número</label>
                { activeNum ? 
                <HandleError error='Ese numero no esta en nuestra base datos'/> : ''
                 }
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