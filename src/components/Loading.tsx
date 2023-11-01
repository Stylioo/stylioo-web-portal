// Import the SCSS file for styling the loading spinner component.
import '../styles/loadingSpinner.scss'

// Define a functional component named Loading.
function Loading() {
    // Return a loading spinner element using CSS classes.
    return (
        <div className="lds-container">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

// Export the Loading component for use in other parts of the application.
export default Loading