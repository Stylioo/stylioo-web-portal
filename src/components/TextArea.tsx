// Import the SCSS file for styling the TextArea component.
import '../styles/textArea.scss'

// Define a type for the textAreaPropsType.

type textAreaPropsType = {
    // The label for the textarea.
    label: string     
    // The name of the textarea.
    name: string
    // The default value for the textarea.
    defaultValue: string
    // The height of the textarea.
    height: string
    // Whether the textarea is disabled.
    disabled: boolean
    onChange: (e: any) => void // A function to handle onChange events.
}

// Define the TextArea component.

function TextArea({ label, name, defaultValue, height, disabled, onChange }: textAreaPropsType) {
    return (
        <>
         {/* Render a label for the textarea. */}
            <label>{label}</label>
            {/* Render a textarea element with specified properties. */}
            <textarea onChange={onChange} name={name} value={defaultValue ? defaultValue : ''} style={{ height: height }} disabled={disabled}>
            </textarea>
        </>
    )
}

// Export the TextArea component for use in other parts of the application.

export default TextArea