import React, {useState} from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Register() {
  
  const navigate = useNavigate()

  const handleclick = () => {
    navigate('/')
  }

  const [user, setUser] = useState({
    firstname: "",
    secondname: "",
    email: "",
    password: "",
    // reEnterPassword: ""
  })
  
  const handleChange = e => {
    // console.log(e.event)
    const {name, value} = e.target
    // console.log(name, value)
    setUser({
      ...user,
      [name]: value
    })
    // window.location.href = "http://localhost:3000";
  }

  const register = () => {
    const {firstname, secondname, email, password} = user
    if(firstname && secondname && email && password) {
      // alert("successfully registered")
      axios.post("http://localhost:9002/register", user)
      .then(res=> console.log(res))  
    }else {
      alert("invalid")
    }
    // window.location.href = "http://localhost:3000";
  }

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          The best app <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>for your health</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          In today's fast-paced world, it's easy to get caught up
          in the hustle and bustle of life and neglect our health
          and well-being. Maintaining a healthy lifestyle is crucial,
          and a fitness tracker can be a helpful tool to keep track
          of your progress and motivate you to achieve your fitness goals.
        </p>

      </MDBCol>

      <MDBCol md='6' className='position-relative'>

        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>

            <MDBRow>
              <MDBCol col='6'>
                {/* <label>First Name</label> */}
                <MDBInput wrapperClass='mb-4' name="firstname" value={user.firstname} placeholder='Your First name' id='form1' type='text' onChange={handleChange}/>
              </MDBCol>

              <MDBCol col='6'>
              {/* <label>Last Name</label> */}
                <MDBInput wrapperClass='mb-4' name="secondname" value={user.secondname} placeholder='Your last name' id='form2' type='text' onChange={handleChange}/>
              </MDBCol>
            </MDBRow>
            {/* <label>Your Email</label> */}
            <MDBInput wrapperClass='mb-4' name="email" value={user.email} placeholder='Your Mail' id='form3' type='email' onChange={handleChange}/>
            {/* <label>Your password</label> */}
            <MDBInput wrapperClass='mb-4' name="password" value={user.password} placeholder='Your Password' id='form4' type='password' onChange={handleChange}/>

            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            </div>

            <MDBBtn className='w-100 mb-4' size='md' onClick={handleclick}>Register</MDBBtn>

            <div className="text-center">

              <p>or register with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>

            </div>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>

      // <div className="register">
      //   {/* {console.log("User", user)} */}
      //   <h1>Register</h1>
      //   <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
      //   <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
      //   <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
      //   <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={handleChange}></input>
      //   <div className="button" onClick={register}>Register</div>
      //   <div>or</div>
      //   <div className="button" onClick={handleclick}>Login</div>
      // </div>
    );
  }
  
  export default Register;
  