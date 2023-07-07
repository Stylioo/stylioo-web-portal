
import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#f6ccff",
}));


const HomePage = () => {
  return (
    <Container>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="subtitle1">Hello</Typography>
      <Typography variant="subtitle2">Hello</Typography>
      <Button variant="contained">Contained primary button</Button>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
      <Button variant="contained" color="success">
        Success Button
      </Button>
      <Button variant="outlined" color="primary" disableRipple>
        Contained outlined button
      </Button>
      <StyledButton variant="outlined" color="secondary">
        Styled button
      </StyledButton>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="primary" size="medium">
        <AddIcon />
      </Fab>
      <Fab color="primary" size="small">
        <AddIcon />
      </Fab>
    </Container>
  )
}

export default HomePage
