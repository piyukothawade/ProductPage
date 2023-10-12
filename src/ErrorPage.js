import React from 'react'
import styled from 'styled-components'
import CustomButton from './components/CustomButton';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h2>UH OH! Yor're lost.</h2>
          <p>The page you are looking for does not exist. <br></br>How you got here is a mystry.
            But you can click the button below to go bck to the home page.
          </p>
          <NavLink to="/">
          <button className="normalBtn">
            Go Back to Home
                        
          </button>
          </NavLink>
        </div>
      </div>

    </Wrapper>
  )
};

const Wrapper = styled.section`
.container {
  padding: 9rem 0;
  text-align: center;
}

h2 {
  font-size: 7rem;
}
h3 {
  font-size: 4.2rem;
}

p {
  margin : 2rem 0;
  padding-bottom: 20px; 
}
button {
  position: absolute;
  padding: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
}

`

export default ErrorPage
