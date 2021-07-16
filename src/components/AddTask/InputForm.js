const InputForm = ({ lableName, placeholer, type, value, onChangeEvent, classNames }) => {
    return (
        <div className={'form-control ' + classNames}>
            <label>{ lableName}</label>
                <input type={type ? type : "text" } placeholer={placeholer}
                value={value}
                onChange ={(e) => onChangeEvent(e.target.value)}/>
        </div>
    )
}

export default InputForm