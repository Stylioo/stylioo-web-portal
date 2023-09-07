import { DataObject } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

function NoData() {
    return (
        <Box sx={{ border: '1px solid #ccc', borderRadius: '5px', width: '100%', minHeight: '150px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <DataObject />
            <Typography variant="h6">No Data Found.</Typography>
        </Box>
    )
}

export default NoData