import React, { useRef, useState } from "react";
import { useAuth } from '../contexts/AuthContext';


export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError("Failed to Create an account")
        }
        setLoading(false)
    }

  return (
    <>
      <div className="card">
        <h2>Sign Up</h2>
        Current User is: {currentUser && currentUser.email}
        {error}
        <form onSubmit={handleSubmit}>
          <div className="">
            <label html_for="email">Email</label>
            <input type="text" required id="email" ref={emailRef} />
          </div>

          <div className="">
            <label html_for="password">Password</label>
            <input type="password" required id="password" ref={passwordRef} />
          </div>

          <div className="">
            <label html_for="password-confirm">Password Confirmation</label>
            <input
              type="password"
              required
              id="password-confirm"
              ref={passwordConfirmRef}
            />
          </div>
          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div>Already have an account? Log In</div>
    </>
  );
}
