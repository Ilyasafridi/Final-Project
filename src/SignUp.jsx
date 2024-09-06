//     import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//     import { useState } from "react";


//     let SignUp = () => {


//         let [email , setEmail] = useState('') 
//         let [password , setPassword] = useState('')

//         let SignUpHandler = (e) => {

//             e.preventDefault()


//             const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log('pass' , user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log('fail' , errorCode)
//     // ..
//   });




//             e.target.reset()


//         }


//         return (
//             <div>
//                 <h1> Sign Up </h1>
//                 <form action="" onSubmit={SignUpHandler}>
//                 <input type="email" placeholder="Email" required onChange={(e) => setEmail (e.target.value)} /> <br /> <br />
//                 <input type="password" placeholder="Password" required onChange={(e) => setPassword (e.target.value)} /> <br /> <br />
//                 <button type="submit"> Submit </button>
//                 </form>
//             </div>
//         )
//     }

//     export default SignUp;



// import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// import { TextField } from "@mui/material";


// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';






// let SignUp = () => {



//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };






//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let navigate = useNavigate();

//   let SignUpHandler = (e) => {
//     e.preventDefault();

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log('pass', user);
//         // Navigate to the SignIn page
//         navigate("/ClassDetails");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log('fail', errorCode, errorMessage);
//       });

//     e.target.reset();
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={SignUpHandler}>
//         {/* <input
//           type="email"
//           placeholder="Email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         /> <br /> <br /> */}





// <FormControl variant="outlined">
//       <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//       <OutlinedInput
//         id="outlined-adornment-password"
//         type={showPassword ? 'text' : 'password'}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton
//               aria-label="toggle password visibility"
//               onClick={handleClickShowPassword}
//               onMouseDown={handleMouseDownPassword}
//               edge="end"
//             >
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </InputAdornment>
//         }
//         label="Password"
//       />
//     </FormControl>












//         <TextField id="filled-basic" label="Email" variant="filled" type = "email" required onChange={(e) => setEmail(e.target.value)}/>    <br /> <br />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         /> <br /> <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;





// import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// import { TextField , Button } from "@mui/material";
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';












// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);
  
//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event) => event.preventDefault();



//   const SignUpHandler = (e) => {
//     e.preventDefault();

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up successfully
//         const user = userCredential.user;
//         console.log('pass', user);
//         // Navigate to another page
//         navigate("/ClassDetails");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log('fail', errorCode, errorMessage);
//       });

//     e.target.reset();
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={SignUpHandler} style={{float : 'right' , marginRight : '5rem'}}>
        
//       <img src="src/Image Folder/avatar.svg" alt="" height={100}/>
//        <br /> <br />
//         <TextField 
//           id="filled-basic" 
//           label="Email" 
//           variant="filled" 
//           type="email" 
//           required 
//           onChange={(e) => setEmail(e.target.value)} 
//           margin="normal"
//         />  

//         <br /><br />  


//         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//       <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//       <Input
//         id="standard-adornment-password"
//         type={showPassword ? 'text' : 'password'}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton
//               aria-label="toggle password visibility"
//               onClick={handleClickShowPassword}
//               onMouseDown={handleMouseDownPassword}
//             >
//               {showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </InputAdornment>
//         }
//       />
//     </FormControl>

//         <br /> <br />

//         <Button type="submit" variant="contained" color="primary" className="btn">  Submit </Button>
      
//       </form>
//     </div>
//   );
// };

// export default SignUp;




























// import { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, IconButton, Input, InputLabel, InputAdornment, FormControl, FilledInput } from "@mui/material";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';







// const SignUp = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event) => event.preventDefault();

//   const SignUpHandler = (e) => {
//     e.preventDefault();

//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed up successfully
//         const user = userCredential.user;
//         console.log('pass', user);
//         // Navigate to another page
//         navigate("/ClassDetails");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log('fail', errorCode, errorMessage);
//       });

//     e.target.reset();
//   };

//   return (
//     <div>

//       <form onSubmit={SignUpHandler} style={{display : 'flex' , marginTop : '5rem' , marginRight : '10rem'}}>
// <div>
// <img src="src/Image Folder/booking attend.svg" alt="" height={300} style={{marginLeft : '10rem'}}/>
// </div>

// <div style={{marginLeft : '11rem'}}>
//         <img src="src/Image Folder/avatar.svg" alt="" width={120} style={{marginLeft : '6rem'}}/>
        



//         <TextField 
//           id="filled-basic" 
//           label="Email" 
//           variant="filled" 
//           type="email" 
//           required 
//           onChange={(e) => setEmail(e.target.value)} 
//           margin="normal"
//           style={{width  : '20rem'}}
//         />  

//         <br /><br />  

//         <FormControl 
//           variant="filled" 
//           sx={{ margin: 'normal'}} 
//           style={{width  : '20rem'}}
//         >
//           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>

//         <br /> <br />

//         <Button type="submit" variant="contained" color="primary" className="btn">Submit</Button>

//         </div>


//       </form>
//     </div>
    
  
  
//   );
// };

// export default SignUp;





























import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TextField, Button, IconButton, InputLabel, InputAdornment, FormControl, FilledInput, Grid, Paper } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const SignUpHandler = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
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
    <div style={{ padding: '2rem' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <img src="src/Image Folder/booking attend.svg" alt="" height={300} style={{ width: '100%', maxWidth: '300px', display: 'block', margin: 'auto' }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <form onSubmit={SignUpHandler} style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
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
            {/* <Button type="submit" variant="contained" color="primary" className="btn">Submit</Button> */}
            <button type="submit" variant="contained" color="primary" className="btn"> Sign Up </button>
        
          </form>
        </Grid>
      </Grid>

    </div>
  );
};

export default SignUp;
