import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useCartContext } from '../Context/CartContext';
import "./Checkout.css";


const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src

    script.onload = () => {
      resolve(true)
    }

    script.onerror = () => {
      resolve(false)
    }

    document.body.appendChild(script);
  })
}


const displayRazorpay = async (total_price) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
  

  if (!res) {
    alert("You are Offline.. Failed to load razorpay")
    return
  }
  const priceInPaise = Math.round(total_price * 100);

  const options = {
    
    key: "rzp_test_xZAUz3C1UHvZVA", 
    amount: priceInPaise, 
    currency: "INR", 
    name: "BeautyBliss",
    description: "Test Transaction",
    handler: function (response){
        // Handle the payment response here
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        alert("Payment Successful")
    },

    prefill: {
        name: "User's name",
        email: "user@example.com"
    }
  };

  const payment = new window.Razorpay(options);
  payment.open();
  }


const Checkout = () => {


    const { total_price } = useCartContext();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      streetAddress: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      deliveryInstructions: '',
      preferredDeliveryDate: '',
      alternatePhone: '',
      isGift: false,
      giftMessage: '',
      specialRequests: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: checked
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Shipping Details:", formData);
        // Handle form submission logic here
      };

      const validateFields = () => {
        const requiredFields = [
          'firstName',
          'lastName',
          'email',
          'phoneNumber',
          'streetAddress'
        ];
    
        for (const field of requiredFields) {
          if (!formData[field]) {
            return false;
          }
        }
        return true;
      };
    
      const handlePayment = () => {
        if (validateFields()) {
          displayRazorpay(total_price);
        } else {
          alert("Please fill all the required fields!");
        }
      };

  return (
    <div className='container-first'>
        <h3 className='heading1'>Checkout</h3>
        <div inputs>
            <Form onSubmit={handleSubmit}>
                <Row className='input'>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange}
                        required 
                        
                        />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange}
                        required 
                        />
                    </Col>
                </Row>

                <Container fluid>
                  <Row className="mb-3 input">
                      <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control 
                              type="email" 
                              placeholder="Enter email"
                              id="email" 
                              name="email" 
                              value={formData.email} 
                              onChange={handleChange}
                              required 
                          />
                      </Form.Group>
                  </Row>
                </Container>


                <Row className="mb-3 input">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="phone number"
                        id="phoneNumber" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange}
                        required  
                        
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Alternate Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Alternate Phone"
                        id="alternatePhone" 
                        name="alternatePhone" 
                        value={formData.alternatePhone} 
                        onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3 input">
                    <Col>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label><br />
                            <Form.Control 
                                placeholder="1234 Main St"
                                id="streetAddress" 
                                name="streetAddress" 
                                value={formData.streetAddress} 
                                onChange={handleChange}
                                required  
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label><br />
                            <Form.Control 
                                placeholder="Apartment, studio, or floor"
                                id="addressLine2" 
                                name="addressLine2" 
                                value={formData.addressLine2} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                    </Col>
                </Row>

                


                <Row className="mb-3 input">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                    <Form.Group className="mb-3 input" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Is this a gift"
                        id="isGift" 
                        name="isGift" 
                        checked={formData.isGift} 
                        onChange={handleCheckboxChange} />
                    </Form.Group>

                    {formData.isGift && (
                        <Form.Group className="mb-3 input">
                            <Form.Label>Gift Message</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your gift message"
                                id="giftMessage" 
                                name="giftMessage" 
                                value={formData.giftMessage} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                    )}

                  
            </Form>
            <div className='buy-btn'>
            <button className="normalBtn submit-btn" onClick={handlePayment}>
                      Buy
            </button>
            </div>
        </div>

    </div>
   
  )
}

export default Checkout
