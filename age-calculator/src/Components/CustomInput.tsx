
interface CustomInputProps {
    label: string
}
export default function CustomInput({label}: CustomInputProps) {
 return (
    <div className="inputLabelContainer">
        <p className="label">{label}</p>
        <input className="customInput" type="number" />
    </div>
 );
}