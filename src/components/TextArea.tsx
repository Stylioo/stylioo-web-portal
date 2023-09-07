import '../styles/textArea.scss'

type textAreaPropsType = {
    label: string
    name: string
    defaultValue: string
    height: string
    disabled: boolean
    onChange: (e: any) => void
}

function TextArea({ label, name, defaultValue, height, disabled, onChange }: textAreaPropsType) {
    return (
        <>
            <label>{label}</label>
            <textarea onChange={onChange} name={name} value={defaultValue ? defaultValue : ''} style={{ height: height }} disabled={disabled}>
            </textarea>
        </>
    )
}

export default TextArea