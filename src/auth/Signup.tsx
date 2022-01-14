import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

type Props = {
    handleClose: () => void;
}

const Signup: React.FC<Props> = ({ handleClose }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async () => {
        if (password !== confirmPassword) {
            alert('Password do not match')
            return;
        }

        try {
            const results = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            alert('acount has been created successfully' + results.user.email)
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
            <TextField
                variant="outlined"
                type="password"
                label="Enter confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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

export default Signup
