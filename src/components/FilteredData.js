import { useState } from "react"
import dataStreet from '../data/data.json'
export default function FilterData (){
    const districts = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
    const[data, setData]=useState(dataStreet)
    const [districData, setdistData]= useState('')
    const handleChange = (e) => {
        e.preventDefault()
        let distSelec = e.target.value
        let dataDis= data.filter((calles)=> calles.distrito === distSelec)
        setdistData(dataDis)
        console.log(districData)
        }
    return(
        <div className="m-auto w-1/3">
            <label for="cars">Choose a district:</label>
            <select onChange={handleChange} className="border-solid border-black border-2" id="cars" name="carlist" form="carform">
            {
                districts.map((dis) => (
                <option value={dis}>{dis}</option>))
            }
            </select>
            { districData ?
                districData.map((calles, index) =>(
                    <p key={index} className="w-full m-">Calle: {calles.calle}, Sección: {calles.seccion}, Números: {calles.numero}</p>
                )
                ) : ''
            }
        </div>
    )
}