import axios from '@/axios';
import Loading from '@/components/Loading';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function AllBeauticianPage() {

  const [beautician, setBeautician] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getAllBeauticians = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('/employee/role/beautician')
      if (response.data.success) {
        console.log(response.data.data);
        setBeautician(response.data.data)
      }
    } catch (error) {
      console.log(error)
      setBeautician([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllBeauticians()
  }, [])

  return (
    <>
      {
        isLoading ? <Loading /> :
          <Box sx={{
            mt: 1
          }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2
              }}
            >Beauticians</Typography>
            <Grid container spacing={8} >

              {beautician.map((beauti) => (
                <Grid item key={beauti.id} xs={12} sm={4} md={3}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        height: '200px',
                      }}
                      image={beauti.image ? `https://stylioo.blob.core.windows.net/images/${beauti.image}` : 'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {beauti.first_name} {beauti.last_name}
                      </Typography>
                      {/* <Typography>
                        Talented hair cutting beautician with 5 years of experience in hair cutting and hair styling.
                      </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained" color='success'>View More Details</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
      }
    </>
  );
}

export default AllBeauticianPage