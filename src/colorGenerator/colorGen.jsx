import './colorGen.css'
import {useState} from "react";
import Alert from "./alertMsg.jsx";

const ColorGen = () => {
    const [formData,setFormData] = useState()
    const [boardColor,setboardColor] = useState('#645cff')
    const [alert,setAlert] = useState(false)


    const handlerChange = (e) =>{
        setFormData(e.target.value)
    }

    const getCopy = () => {
        navigator.clipboard.writeText(boardColor)
            .then(()=>setAlert(true))
            .catch(()=>{
                console.error('clip');
            })
    }
    const formSubmit = (e) =>{
        e.preventDefault()
        setboardColor(formData)
    }
    return <>
            {alert ? <Alert setAlert = {setAlert} /> :  ""}
        <section>
            <form onSubmit={(e)=>formSubmit(e)}>
                <input name={'color'} type={'color'} value={formData} onChange={(event)=>handlerChange(event)} />
                <input name={'text'} type={'text'} value={formData} onChange={(event)=>handlerChange(event)} placeholder={'#f15025'} />
                <button type={'submit'} style={formData ?{backgroundColor:`${formData}`} : {backgroundColor:'#645cff'}}>Submit</button>
            </form>
            <div style={boardColor ?{backgroundColor:`${boardColor}`} : {backgroundColor:'#645cff'}} onClick={(e)=> getCopy(e)}></div>
        </section>

    </>
}
export default ColorGen