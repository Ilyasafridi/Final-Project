
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

let SignInBtn = () => {
    return (
        <div>
            <Link to="/SignIn"> 
                 <Button variant="contained" style={{ width: '10rem', borderRadius: '2rem' }}>
                  Sign In
                 </Button> 
           </Link>
        </div>
    )
}

export default SignInBtn ;