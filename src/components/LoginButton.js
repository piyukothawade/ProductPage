import React, { useState } from 'react';
import "./NavbarStyles.css";


function LoginButton({ text = "Login" }) {
  const [error, setError] = useState(null);


  

  return (
    <div>
      {error && <p className="errorMessage">{error}</p>}
      <button className="loginBtn"> Login</button>
    </div>
  );
}

export default LoginButton;


