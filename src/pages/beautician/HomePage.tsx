import '../../styles/beautician/index.scss'
import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Tab, Tabs } from '@mui/material';
import { Button, ButtonGroup } from '@mui/material';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));



const BeauticianPage = () => {
        const [expanded, setExpanded] = React.useState(false);

        const [tabValue, setTabValue] = React.useState(0);

        const handleTabChange = (event, newValue) => {
          setTabValue(newValue);
        };

        const handleExpandClick = () => {
        setExpanded(!expanded);     
        };

  return (
    <Grid container>
      {/* Left Part with 30% width */}
      <Grid item xs={12} sm={8} style={{ backgroundColor: '#C9CBA3', minHeight:'100vh' }}>
        <h1 className='header1'>All Appoinments</h1>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
            <Tab label="Upcoming" {...a11yProps(0)} />
            <Tab label="Completed" {...a11yProps(1)} />
            
          </Tabs>
        </Box>
        {/* Add content for each tab */}
        <TabPanel value={tabValue} index={0}>
        <div className="upcomingTab">
        <Card sx={{ maxWidth: 400 , marginLeft:'5px;', marginTop:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader="September 14, 2016  -  5.00 a.m to 6.15 a.m"
        subheaderTypographyProps={{ color: '#1E1E1E' , fontSize:'15px' , fontWeight:'bold'}} 
      />
       <div className='userDetails' >
      {/* Other content */}

      <img src='https://stylioo.blob.core.windows.net/images/chirasi.jpeg' className='userImg'/>
      <p className='service'>Kithmi Amaya</p>

      {/* Other content */}
    </div>
      <CardContent>
      <div className="cardDetails">
      <Typography variant="body2" color="text.primary">
        <p className='serviceList'>Beautician</p>
        <div className="userDetails">
          
          <li>Chirasi Walpola</li>
          <img src='https://stylioo.blob.core.windows.net/images/res_1619412052473-02.jpeg' className='beauticianImg'/>

        </div>
            
          <p className='serviceList'>Services</p>
            <li>Long hair cut - estimate time 30 min</li>
            <li>Hair coloring - estimate time 45 min</li>

          <p className='serviceList'>Prefered brands</p>
          <ul>
            <li>L'Oréal Professionnel: - L'Oréal Majirel cream</li>
          </ul>

        </Typography>
        {/* <div className="serviceimg">
          <img src='https://stylioo.blob.core.windows.net/images/R.jpg' className='serviceImg'/>
        </div> */}
      </div>
      </CardContent>
      <CardActions disableSpacing>
      <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
        <Button sx={{backgroundColor:"green"}}>Complete</Button>
        <Button sx={{backgroundColor:"#FFE1A8", color:'black'}}>Add ons</Button>
      </ButtonGroup>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent> */}
      {/* </Collapse> */}
    </Card>

    <Card sx={{ maxWidth: 400 , marginLeft:'15px;', marginTop:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader="September 14, 2016  -  5.00 a.m to 6.15 a.m"
        subheaderTypographyProps={{ color: '#1E1E1E' , fontSize:'15px' , fontWeight:'bold'}} 
      />
       <div className='userDetails' >
      {/* Other content */}

      <img src='https://stylioo.blob.core.windows.net/images/chirasi.jpeg' className='userImg'/>
      <p className='service'>Kithmi Amaya</p>

      {/* Other content */}
    </div>
      <CardContent>
      <div className="cardDetails">
      <Typography variant="body2" color="text.primary">
        <p className='serviceList'>Beautician</p>
        <div className="userDetails">
          
          <li>Chirasi Walpola</li>
          <img src='https://stylioo.blob.core.windows.net/images/res_1619412052473-02.jpeg' className='beauticianImg'/>

        </div>
            
          <p className='serviceList'>Services</p>
            <li>Long hair cut - estimate time 30 min</li>
            <li>Hair coloring - estimate time 45 min</li>

          <p className='serviceList'>Prefered brands</p>
          <ul>
            <li>L'Oréal Professionnel: - L'Oréal Majirel cream</li>
          </ul>

        </Typography>
        {/* <div className="serviceimg">
          <img src='https://stylioo.blob.core.windows.net/images/R.jpg' className='serviceImg'/>
        </div> */}
      </div>
      </CardContent>
      <CardActions disableSpacing>
      <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
        <Button sx={{backgroundColor:"green"}}>Complete</Button>
        <Button sx={{backgroundColor:"#FFE1A8", color:'black'}}>Add ons</Button>
      </ButtonGroup>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent> */}
      {/* </Collapse> */}
    </Card>
        </div>
      

        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <div className="completedTab">
          <Card sx={{ maxWidth: 400 , marginLeft:'5px;', marginTop:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader="September 14, 2016  -  5.00 a.m to 5.30 a.m"
        subheaderTypographyProps={{ color: '#1E1E1E' , fontSize:'15px' , fontWeight:'bold'}} 
      />

<div className='userDetails' >
      {/* Other content */}

      <img src='https://stylioo.blob.core.windows.net/images/chirasi.jpeg' className='userImg'/>
      <p className='service'>Oshadi Samarasingha</p>

      {/* Other content */}
    </div>
  
      {/* <CardMedia
        component="img"
        height="250"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
      <Typography variant="body2" color="text.primary">
      <p className='serviceList'>Beautician</p>
      <div className="userDetails">
          
          <li>Chirasi Walpola</li>
          <img src='https://stylioo.blob.core.windows.net/images/res_1619412052473-02.jpeg' className='beauticianImg'/>

        </div>
            
          <p className='serviceList'>Services</p>
            <li>Long hair cut - estimate time 30 min</li>
            <li>Hair coloring - estimate time 45 min</li>

          <p className='serviceList'>Prefered brands</p>
          <ul>
            <li>L'Oréal Professionnel: - L'Oréal Majirel cream</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
        <Button sx={{backgroundColor:"#472D30"}}>Feedbacks</Button>
        <Button sx={{backgroundColor:"#FFE1A8", color:'black'}}>Ratings</Button>
      </ButtonGroup>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
          {/* <ExpandMoreIcon /> */}
        {/* </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>     
    <Card sx={{ maxWidth: 400 , marginLeft:'15px;', marginTop:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader="September 14, 2016  -  5.00 a.m to 5.30 a.m"
        subheaderTypographyProps={{ color: '#1E1E1E' , fontSize:'15px' , fontWeight:'bold'}} 
      />

<div className='userDetails' >
      {/* Other content */}

      <img src='https://stylioo.blob.core.windows.net/images/chirasi.jpeg' className='userImg'/>
      <p className='service'>Oshadi Samarasingha</p>

      {/* Other content */}
    </div>
  
      {/* <CardMedia
        component="img"
        height="250"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
      <Typography variant="body2" color="text.primary">
      <p className='serviceList'>Beautician</p>
      <div className="userDetails">
          
          <li>Chirasi Walpola</li>
          <img src='https://stylioo.blob.core.windows.net/images/res_1619412052473-02.jpeg' className='beauticianImg'/>

        </div>
            
          <p className='serviceList'>Services</p>
            <li>Long hair cut - estimate time 30 min</li>
            <li>Hair coloring - estimate time 45 min</li>

          <p className='serviceList'>Prefered brands</p>
          <ul>
            <li>L'Oréal Professionnel: - L'Oréal Majirel cream</li>
          </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
        <Button sx={{backgroundColor:"#472D30"}}>Feedbacks</Button>
        <Button sx={{backgroundColor:"#FFE1A8", color:'black'}}>Ratings</Button>
      </ButtonGroup>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > */}
          {/* <ExpandMoreIcon /> */}
        {/* </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>     
          </div>
        </TabPanel>
    

     
        {/* Your content for the left part */}
      </Grid>

      {/* Right Part takes 40% width on small screens, and 4 columns on larger screens */}
      <Grid item xs={12} sm={4} style={{ backgroundColor: '#e37e6f',minHeight:'100vh'}}>
        {/* Your content for the right part */}
        <h1 className='header2'>Ongoing Appoinments</h1>
        <Card sx={{ maxWidth: 345,marginLeft:'30px;', marginTop:'80px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
    
        subheader="September 14, 2016  -  5.00 a.m to 5.30 a.m"
        subheaderTypographyProps={{ color: '#1E1E1E' , fontSize:'15px' , fontWeight:'bold'}} 
      />
          <div className='userDetails' >
      {/* Other content */}

      <img src='https://stylioo.blob.core.windows.net/images/chirasi.jpeg' className='userImg'/>
      <p className='service'>Nethmini Amarasignha</p>

      {/* Other content */}
    </div>
     
      {/* <CardMedia
        component="img"
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
      <Typography variant="body2" color="text.primary">
      <p className='serviceList'>Beautician</p>
      <div className="userDetails">
          
          <li>Chirasi Walpola</li>
          <img src='https://stylioo.blob.core.windows.net/images/res_1619412052473-02.jpeg' className='beauticianImg'/>

        </div>
          <p className='serviceList'>Services</p>
            <li>Long hair cut - estimate time 30 min</li>
            <li>Hair coloring - estimate time 45 min</li>

          <p className='serviceList'>Prefered brands</p>
          <ul>
            <li>L'Oréal Professionnel: - L'Oréal Majirel cream</li>
          </ul>

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            >
        <Button sx={{backgroundColor:"green"}}>Checkout</Button>
        <Button sx={{backgroundColor:'#FFE1A8', color:"black"}}>Add ons</Button>
      </ButtonGroup>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
      </Grid>
    </Grid>
  );
};

export default BeauticianPage;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}