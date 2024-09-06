import './form.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignUpBtn from "./SignUpBtn";

import Task from "./Task"

import SignIn from "./SignIn";
import SignInBtn from "./SignInBtn";


// import ClassDetails from "./ClassDetails";
// import StudentDetail from "./StudentDetails";


function App() {


  return (
    <>


            
           <Router>
       <Routes>

          <Route path="/" element={
            <div style={{display : 'flex' , float : 'right'}}> 

           <div style={{margin : '5px'}}>
         {<SignUpBtn />}
         </div>   

         <div style={{margin : '5px'}}>
         {<SignInBtn />} 
         </div>
              
            </div>
          } 
        />

        
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} /> 
        <Route path="/Task" element={<Task />} />


        {/* <Route path="/ClassDetails" element={<ClassDetails/>} /> */}
        {/* <Route path="/student-detail" element={<StudentDetail />} /> */}

      </Routes>
    </Router>

      
      {/* <Task /> */}


    </>
  )
}

export default App
