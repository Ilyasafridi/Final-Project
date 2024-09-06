
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

let SignUpBtn = () => {
    return (
        <div>
            <Link to="/SignUp"> 
                 <Button variant="contained" className='btn1' style={{ width: '10rem', borderRadius: '2rem' }}>
                  Sign Up
                 </Button> 
           </Link>
        </div>
    )
}

export default SignUpBtn ;  