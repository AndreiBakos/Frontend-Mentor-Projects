interface CustomInputProps {
    label: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    inputMaxLength: number,
    labelError: string
}
export default function CustomInput({label, value, setValue, inputMaxLength, labelError}: CustomInputProps) {
    const defaultValue = '--';

    const handleInputChange = (newInputValue: string) => {
        if(newInputValue.length === 0){
            setValue(defaultValue);
            return;
        }
        if(newInputValue[0] === '0'){
            return;
        }

        if(newInputValue.length > inputMaxLength){
            return;
        }

        setValue(newInputValue);
    }
    return (
        <div className="inputLabelContainer">
            <p className="label">{label}</p>
            <input
                style={{
                    border: `1px solid ${labelError.length > 0 ? 'red' : '#dbdbdb'}`,
                    borderRadius: 10}}    
                className="customInput"
                value={value !== defaultValue ? value : ''}    
                type="number"
                onChange={ (e) => handleInputChange(e.target.value) }/>
            {labelError.length > 0 && <p className="errorMessage">{labelError}</p>}
        </div>
    );
}