import "./colorGen.css"

const Alert = (props) =>{
    return <>
        <div className={'alertparent'} onClick={()=>props.setAlert(false)}>
            <p className={'alertMsg'}>Color was copy to clipboard !</p>
        </div>
    </>
}
export default Alert