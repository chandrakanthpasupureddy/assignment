import './index.css'
const LeftNav = (props) =>{
    const {mockData,onChangeColName,isActive} = props
    const {name,img} = mockData
    const onchangeCol = () =>{
        onChangeColName(name)
    }
    const col = isActive ? 'pcol' : 'ncol'
    const col1 = isActive ? 'pcol1' : 'ncol'
    return(
        <li className={`liele ${col}`}>
            <button type = "button" onClick={onchangeCol} className={`butn ${col1}`}>
                {name}
            </button>
            {img}
        </li>
    )
}
export default LeftNav