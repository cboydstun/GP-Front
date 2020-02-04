import React from 'react';

//Email verification form, rendered when password reset is requested
export default ({ onSubmitEmailVerificationForm, setEmail, error}) => (
  <div>
    <h1>Reset Password</h1>
    <form onSubmit={onSubmitEmailVerificationForm} >
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    {error ? <h4 style={{ color: "red" }}>{error.msg}</h4> : null}
  </div>
)
