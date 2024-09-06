
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TextField, Button, IconButton, InputLabel, InputAdornment, FormControl, FilledInput, Grid, Paper } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



let SignIn = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();



  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();






  let SignInHandler = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('pass', user);
        navigate("/Task")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('fail', errorCode, errorMessage);
      });

    e.target.reset();
  };

  return (
    <div>

    <div style={{ padding: '2rem' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img src="src/Image Folder/booking attend.svg" alt="" height={300} style={{ width: '100%', maxWidth: '300px', display: 'block', margin: 'auto' }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <form onSubmit={SignInHandler} style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
            <img src="src/Image Folder/avatar.svg" alt="" width={120} style={{ display: 'block', margin: 'auto' }} />
            
            <TextField 
              id="filled-basic" 
              label="Email" 
              variant="filled" 
              type="email" 
              required 
              onChange={(e) => setEmail(e.target.value)} 
              margin="normal"
              fullWidth
            />  

            <FormControl 
              variant="filled" 
              margin="normal"
              fullWidth
            >
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
<br /><br />
            {/* <Button type="submit" variant="contained" color="primary" className="btn"> Sign In </Button> */}
            <button type="submit" variant="contained" color="primary" className="btn"> Sign In </button>

            


          </form>
        </Grid>
      </Grid>

    </div>
    </div>
  );
};


export default SignIn;
