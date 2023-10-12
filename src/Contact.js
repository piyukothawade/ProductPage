import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    button{
      padding: 10px;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            a:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Contact Page</h2>

    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187097152!2d73.78056546100349!3d18.524761375311474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693649305760!5m2!1sen!2sin" 
    width="100%" height="400" style={{border: 0}}
     allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

     <div className ="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xoqoweoj" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off">

          </input>

          <input type="email" name="Email" placeholder="Email" autoComplete="off" required >

          </input>

          <textarea name="message" cols="30" rows="10"  required autoComplete="off" placeholder="Enter your Message">

          </textarea>

          <button className="normalBtn">
                Submit
            </button>

        </form>

      </div>

     </div>

  </Wrapper>
  )
};

export default Contact;
