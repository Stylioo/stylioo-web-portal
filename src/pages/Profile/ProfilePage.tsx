// import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import { Avatar, Button, Container, Grid, TextField } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   profileContainer: {
//     padding: theme.spacing(2),
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     marginBottom: theme.spacing(2),
//   },
// }));

// const ProfilePage = () => {
//   const classes = useStyles();
//   const [profileImage, setProfileImage] = useState(null);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [email, setEmail] = useState('');
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   const handleImageChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       // Simulate image upload using URL.createObjectURL
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const handleRemoveImage = () => {
//     setProfileImage(null);
//   };

//   const handleSubmit = () => {
//     // Assuming you have a function to handle form submission and update the profile details
//     const formData = {
//       name,
//       address,
//       contactNo,
//       email,
//       currentPassword,
//       newPassword,
//     };
//     console.log(formData);
//     // You can add your logic here to handle the form submission
//   };

//   return (
//     <Container maxWidth="md" className={classes.profileContainer}>
//       <Grid container spacing={2} justifyContent="center">
//         <Grid item xs={12}>
//           <Avatar src={profileImage} alt="Profile Picture" className={classes.profileImage} />
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//           {profileImage && (
//             <Button variant="outlined" color="error" onClick={handleRemoveImage}>
//               Remove Image
//             </Button>
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Address"
//             fullWidth
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Contact No"
//             fullWidth
//             value={contactNo}
//             onChange={(e) => setContactNo(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Email"
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             type="password"
//             label="Current Password"
//             fullWidth
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             type="password"
//             label="New Password"
//             fullWidth
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProfilePage;



//  profile page front-end

