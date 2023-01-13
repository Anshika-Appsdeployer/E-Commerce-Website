import React, { useState } from 'react'
import Navbar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../FirebaseConfigs/FirebaseConfigs'
import { collection, addDoc } from 'firebase/firestore'
import Form from 'react-bootstrap/Form';


const Signup = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // To navigate to SignIn page after SignUp
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); // It will not let ur pg refresh itself
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialcartvalue = 0;
        console.log(user);

        addDoc(collection(db, 'users'), {
          username: userName, email: email, password: password, confirmpassword: confirmPassword, 
          initialcartvalue: initialcartvalue, uid: user.uid
        }).then(() => {
          setSuccessMsg('Your account has been created successfully, now you will be redirected to Sign Up page!')
          // Setting values as blank after ading a new user
          setUserName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')

          setTimeout(() => {
            setSuccessMsg('')
            navigate('/signin')
          }, 5000)
        })
          .catch((error) => {
            console.log(error)
            setErrorMsg(error.message)
          })
      }).catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMsg('Please fill the required fields correctly!')
        }

        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          setErrorMsg('Oops, User already Exists!.')

        }
      })

    return (
      <>
        <Navbar />
          <Form onSubmit={handleSubmit}>
            <p>Create a New Account</p>
            {successMsg &&
              <>
                <div className="success-message">
                  {successMsg}
                </div>
              </>}
            {errorMsg &&
              <>
                <div className="error-message">
                  {errorMsg}
                </div>
              </>}
            <label className="form-group"></label>
            <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Your Name" />

            <label className="form-group"></label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />

            <label className="form-group">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />

            <label className="form-group">Confirm Password</label>
            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />

            <button type="submit">Sign Up</button>
            <div>
              <span>Already have an Account?</span>
              <Link to='/signin'>Sign In</Link>
            </div>
          </Form>
      </>
    )
  }
}

export default Signup