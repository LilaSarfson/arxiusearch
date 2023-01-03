import {useState} from 'react'
import dataStreet from '../data/data.json'
import HandleError from './HandleError'
export default function Search (){
    const[calle, setCalle]= useState('')
    const[num, setNum]= useState('')
    const[data, setData]=useState(dataStreet)
    const[activeName, setActiveNam]=useState(false)
    const[activeNum, setActiveNum]=useState(false)
    const[findedData, setFindedData]=useState('')

const handleClick = (e) =>{
    e.preventDefault();
    let newdata = data.filter((calles)=> calles.calle === (calle.toLowerCase()).trim());
    if(newdata.length !== 0){
        if(newdata[0].numero === 'toda') { //Controlo las calles con toods los número en el mismo sitio
            setFindedData(newdata[0])
        }
        else if (newdata.length > 1){ //Controlo las calles pares e impares
            Object.entries(newdata).forEach(([key, value]) => {
                let findedNum = (value.numero).includes(parseInt(num)) 
                findedNum ? setFindedData(newdata[key]) : console.log('ese numero chungi')
              });
            }
        else{
            let findedNum = (newdata[0].numero).includes(parseInt(num)) 
            console.log(findedNum)
            findedNum ? setFindedData(newdata[0]) : setActiveNum(true)
        }    
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