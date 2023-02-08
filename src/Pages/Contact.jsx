import React from 'react';
import styled from 'styled-components';
import imgHome from '../assets/castle.jpg';
import { desktop } from '../responsive';


const Container = styled.div`
background-image : url(${imgHome});
background-size: 180% 100%;
height: 100%;
display :flex;
flex-direction : column;
align-items : center;
justify-content : center;
${desktop({height: "100vh", backgroundSize: "cover"})}
`;

const Wrapper = styled.div`
width : 18rem;
height : 100%;
padding : 1.25rem;
margin-bottom: 5rem;
margin-top : 2rem;
background-color: #ffffffab;
border-radius : 2rem;
${desktop({ width: '49rem', marginBottom: '0rem', height: '37rem' })}
`;

const Title = styled.h1`
text-align : center;
`;

const Form = styled.form`
display : flex;
flex-wrap : wrap;
align-items : center;
justify-content : center;
padding  : 1rem;
margin-bottom : 1rem;

`;

const FormContainer = styled.div`
display :flex;
flex-direction : column;
align-items : center;
justify-content : space-between;
width : 360px;
padding : 0.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
width : 15rem;
margin : 0rem 0.7rem 0rem 0rem;
padding : 0.7rem;
border-radius: 2rem;
border : solid 1px dark;
text-align : center;
&::placeholder {
  text-align : center
}
`;

const Message = styled.textarea`
resize : none;
text-align : center;
border-radius : 2rem;
&::placeholder {
  text-align : center
}
${desktop({ width: '40rem' })}
`;

const ButtonContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  ${desktop({ flexDirection: 'row' })}
`;

const Button = styled.button`
width : 15rem;
border  :none;
border-radius : 1.2rem;
padding : 1rem 1.2rem;
margin-bottom : 1rem;
color : white;
background-color: #4c9b4c;
transition : all 0.2s ease-out;
&:hover {

  background-color : green;
  cursor: pointer;
}
&:nth-child(2){
  background-color: #f14343;
}
&:hover:nth-child(2){
  background-color : red;
  cursor: pointer;
}
${desktop({ margin: '1rem ', width: '20rem' })}
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          {' '}
          For more information about Harry Potter, please contact me by
          completing this form
        </Title>
        <Form>
          <FormContainer>
            <Label>
              Lastname* :
              <Input type="text" placeholder="Lastname" name="Lastname" />
            </Label>
          </FormContainer>
          <FormContainer>
            <Label>
              Firstname* :
              <Input type="text" placeholder="Firstname" name="Firstname" />
            </Label>
          </FormContainer>
          <FormContainer>
            <Label>
              Email* :
              <Input type="text" placeholder="Email" name="Email" />
            </Label>
          </FormContainer>
          <FormContainer>
            <Label>
              Phone* :
              <Input type="text" placeholder="Phone" name="Phone" />
            </Label>
          </FormContainer>
          <FormContainer>
            <Label>
              Message* :
              <Message
                cols="40"
                rows="10"
                placeholder="Please enter a message"
              />
            </Label>
          </FormContainer>
          <ButtonContainer>
            <Button>Send</Button>
            <Button>Home</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
