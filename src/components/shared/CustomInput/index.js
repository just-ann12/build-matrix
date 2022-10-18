import './index.scss'
const CustomInput = ({type='text', value, onChange }) => {
    
    return <input type={type} value={value} onChange={onChange}/>
}
export default CustomInput