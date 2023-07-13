
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { changePicture } from "../../features/user/user";

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#f6ccff",
}));


const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h1">Hello</Typography>
      <Typography variant="h2">Hello</Typography>
      <Typography variant="subtitle1">Hello</Typography>
      <Typography variant="subtitle2">Hello</Typography>
      <Button variant="contained">Contained primary button</Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(changePicture('https://stylioo.blob.core.windows.net/images/profile.jpeg'))}>
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
    </>
  )
}

export default HomePage
