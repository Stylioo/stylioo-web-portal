import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Avatar, CardContent, Stack, SvgIcon } from '@mui/material';
import { Users as UsersIcon } from 'react-feather';
import ArrowUpIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/material/styles';
import { ContentPasteGoRounded} from '@mui/icons-material';


export default function PastAppoinment() {
  return (
    <React.Fragment>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Past Appoinments
            </Typography>
            <Typography variant="h4">
              15
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: '#f07a6d',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <ContentPasteGoRounded />
            </SvgIcon>
          </Avatar>
        </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color='success'
                fontSize="small"
              >
                <ArrowUpIcon /> 
              </SvgIcon>
              <Typography
                color='success.main'             
                  variant="body2"
              >
                
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last month 
            </Typography>
          </Stack>
        
      </CardContent>
    </React.Fragment>
  );
}