



import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, IconButton, InputAdornment, Paper } from '@mui/material';


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '100vh', 
                background: 'linear-gradient(to right, #ff416c, #ff4b2b)' 
            }}
        >
            <Container maxWidth="xs">
                <Paper elevation={10} sx={{ p: 4, backgroundColor: '#333', color: '#fff' }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        LOGIN
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                        Please enter your login and password!
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{ style: { color: '#fff' } }}
                            InputProps={{
                                style: { color: '#fff', borderColor: '#00bcd4' },
                                notchedOutline: { borderColor: '#00bcd4' },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            margin="normal"
                            InputLabelProps={{ style: { color: '#fff' } }}
                            InputProps={{
                                style: { color: '#fff', borderColor: '#00bcd4' },
                                notchedOutline: { borderColor: '#00bcd4' },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                            style={{ color: '#fff' }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box sx={{ mt: 1, textAlign: 'right' }}>
                            <Link href="#" variant="body2" style={{ color: '#00bcd4' }}>
                                Forgot password?
                            </Link>
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#00bcd4' }}
                        >
                            Login
                        </Button>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                            <IconButton color="primary" aria-label="facebook" style={{ color: '#00bcd4' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="twitter" style={{ color: '#00bcd4' }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="google" style={{ color: '#00bcd4' }}>
                                <GoogleIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
