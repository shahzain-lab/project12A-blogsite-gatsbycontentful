import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'gatsby';
import Auth from '../auth/Auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Avatar, Button } from '@mui/material';
import { UserContext } from '../context/userContext';

const Appbar = () => {
    const [user, setUser] = React.useState(null);
    const { setUserState } = React.useContext(UserContext)

    React.useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                setUserState(true)
            } else {
                setUser(null)
                setUserState(false)
            }
        })

    }, [])
    const handleLogout = () => {
        signOut(auth)
        alert('Successfully Logout')
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { sm: 'block' } }}
                >
                    MUI
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/blogs/"><Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>Blogs</Typography> </Link>

                    {user ?
                        <Button sx={{ marginX: '2rem' }} onClick={handleLogout} variant="contained">Logout</Button>
                        : <Auth />}

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        color="inherit"
                    >
                        {user ? <Avatar src={user.photoURL} /> : null}
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Appbar
