import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

type Props = {
    handleClose: () => void;
}

const Login: React.FC<Props> = ({ handleClose }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        if (!email || !password) {
            alert('Please fill the requirements')
            return;
        }
        try {
            const results = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            alert('welcome back ' + results.user.email)
            handleClose()
        } catch (err) {
            alert(err.message)
            return;
        }
    }

    return (
        <Box
            p={3}
            sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
            <TextField
                variant="outlined"
                type="email"
                label="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
            />
            <TextField
                variant="outlined"
                type="password"
                label="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
            />

            <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
            >Submit</Button>
        </Box>
    )
}

export default Login

