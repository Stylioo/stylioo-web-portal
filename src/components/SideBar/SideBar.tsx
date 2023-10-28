import React, { useEffect, useState } from 'react';
import '@/scss/sidebar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, SwipeableDrawer, AppBar, Toolbar, Typography, Menu, Container, Avatar, Tooltip, MenuItem, IconButton, useMediaQuery, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Business, LocalMall, Assessment, Event, MonetizationOn, People, Person, Settings } from '@mui/icons-material';

import { useAppDispatch } from '@/redux/store';
import { removeUser } from '@/redux/features/authSlice';
import useAuth from '@/hooks/useAuth';
import ROLE from '@/constants/roles';


const ddw = 220;
const mdw = '75%';
const settings = [
    { title: 'Settings', slug: 'settings', icon: <Settings /> },
]


interface sidebarPropType {
    children: React.ReactNode
}

type MenuItem = {
    title: string,
    slug: string,
    icon: React.ReactNode
}


export default function SideBar({ children }: sidebarPropType) {

    const currentUser = useAuth()

    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        if (currentUser.role === ROLE.MANAGER) setMenuItems([
            { title: 'Insights', slug: '/', icon: <Assessment /> },
            { title: 'Services', slug: '/services', icon: <Business /> },
            { title: 'Products', slug: '/products', icon: <LocalMall /> }
        ])
        else if (currentUser.role === ROLE.RECEPTIONIST) setMenuItems(
            [
                { title: 'Insights', slug: '/', icon: <Assessment /> },
                { title: 'Appointments', slug: '/appointments', icon: <Event /> },
                // { title: 'Quick Sale', slug: '/quicksale', icon: <MonetizationOn /> },
                { title: 'Customers', slug: '/customers', icon: <People /> },
                { title: 'Beauticians', slug: '/beauticians', icon: <Person /> },
                { title: 'Services', slug: '/services', icon: <Assessment /> }
            ])
        else if (currentUser.role === ROLE.OWNER) setMenuItems([
            { title: 'Insights', slug: '/', icon: <Assessment /> },
            // { title: 'Sales', slug: '/sales', icon: <MonetizationOn /> },
            { title: 'Services', slug: '/services', icon: <Business /> },
            { title: 'Products', slug: '/products', icon: <LocalMall /> },
            { title: 'Staff', slug: '/staff', icon: <People /> }
        ])
        else setMenuItems([])
    }, [])



    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(removeUser());
        navigate('/signin');
        handleCloseUserMenu()
    }


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerWidth, setDrawerWidth] = useState<number | string>(isMobile ? mdw : ddw);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        if (isMobile) {
            setDrawerWidth(mdw)
        }
        else {
            setDrawerWidth(ddw)
        }
    }, [isMobile])



    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{

                    }}>
                        {
                            isMobile ? <IconButton
                                sx={{
                                    marginRight: '1.5rem'
                                }}
                                onClick={() => setOpenDrawer(!openDrawer)}
                            ><MenuIcon sx={{
                                display: 'block',
                                color: 'white',
                                fontSize: '1.5rem',
                            }} /></IconButton>
                                :
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        gap: '0.75rem',

                                    }}
                                >
                                    {/* <img
                                        style={{
                                            height: '2rem',
                                            width: '2rem',
                                        }}
                                        src={logo}
                                        alt='Result Sheet'
                                    /> */}

                                    <Typography
                                        noWrap
                                        sx={{
                                            color: 'white',
                                            fontWeight: '300',
                                            fontSize: '1.2rem',
                                            ml: 2
                                        }}
                                    >
                                        Stylioo
                                    </Typography>

                                </Box>
                        }


                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0, border: '3px solid #fff' }}>
                                    <Avatar
                                        sx={{
                                            width: '2.2rem',
                                            height: '2.2rem',
                                        }}

                                        alt="Remy Sharp" src={'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <SwipeableDrawer
                variant={!isMobile ? "permanent" : "temporary"}
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        backgroundColor: theme.palette.secondary.main,
                        boxSizing: 'border-box',
                        color: '#fff',
                        paddingTop: '1rem',
                        boxShadow: '2px 0px 5px rgba(0,0,0,0.2)',
                    },
                    [`& .MuiBackdrop-root`]: {
                        backdropFilter: 'blur(2px)',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    }
                }}

            >
                <Toolbar />
                <Box sx={{ overflow: 'hidden', marginInline: '1rem', flexGrow: 1, display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                        {
                            menuItems.map((item: MenuItem) => (
                                <Link
                                    key={item.slug}
                                    to={item.slug}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >

                                    <ListItem sx={{
                                        mb: '0.5rem',
                                        py: '0.3rem',
                                        px: 'o.5rem',
                                        color: theme.palette.secondary.contrastText,
                                        borderBottom: '1px solid transparent',
                                        borderRadius: '0.5rem',
                                        [`&:hover`]: {
                                            backgroundColor: theme.palette.primary.light,
                                            color: theme.palette.primary.contrastText,

                                        }
                                    }}>
                                        <ListItemIcon
                                            sx={{
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                                color: theme.palette.secondary.contrastText,
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                            }}
                                            primary={item.title} />
                                    </ListItem>

                                </Link>
                            ))
                        }
                    </Box>
                    <Box
                        sx={{ mb: "2rem" }}
                    >
                        {
                            settings.map((item: MenuItem) => (
                                <Link
                                    key={item.slug}
                                    to={item.slug}
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                >

                                    <ListItem sx={{
                                        mb: '0.5rem',
                                        py: '0.3rem',
                                        px: '0.5rem',
                                        color: theme.palette.secondary.contrastText,
                                        borderBottom: '1px solid transparent',
                                        borderRadius: '0.5rem',
                                        [`&:hover`]: {
                                            backgroundColor: theme.palette.primary.light,
                                            color: theme.palette.primary.contrastText,

                                        }
                                    }}>
                                        <ListItemIcon
                                            sx={{
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                                color: theme.palette.secondary.contrastText,
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                            }}
                                            primary={item.title} />
                                    </ListItem>

                                </Link>
                            ))
                        }
                    </Box>
                </Box>

                {
                    isMobile && <>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                px: 2,
                                py: 2,
                                backgroundColor: '#00000008',
                                borderTop: '1px solid rgba(0,0,0,0.2)',
                            }}
                        >
                            {/* <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        color: 'rgba(255,255,255,0.9)'
                                    }}
                                >
                                    &copy;
                                </Typography> */}
                            {/* <img
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                }}
                                src={logo}
                                alt='Result Sheet'
                            /> */}

                            <Typography
                                noWrap
                                sx={{
                                    color: 'white',
                                    fontWeight: '300',
                                    fontSize: '1rem',
                                }}
                            >
                                Stylioo
                            </Typography>


                        </Box>
                    </>
                }

            </SwipeableDrawer>
            <div className='children'>
                <Toolbar sx={{
                    marginBottom: '1rem',
                }} />
                {children}
            </div>
            {/* <Footer /> */}
        </Box>
    );
}
