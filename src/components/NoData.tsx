// Import the DataObject icon from the "@mui/icons-material" library.
import { DataObject } from "@mui/icons-material"

// Import the Box and Typography components from the "@mui/material" library.
import { Box, Typography } from "@mui/material"

// Define a functional component named NoData.
function NoData() {
     // Return a container component displaying a "No Data Found" message and an icon.
    return (
        <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <DataObject />
            <Typography variant="h6">No Data Found.</Typography>
        </Box>
    )
}

// Export the NoData component for use in other parts of the application.
export default NoData