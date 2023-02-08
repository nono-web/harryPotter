import React from 'react';
import styled from 'styled-components';
import imgHome from '../assets/castle.jpg';
import { desktop } from '../responsive';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-image: url(${imgHome});
  background-size: 180% 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${desktop({ height: '100vh', backgroundSize: 'cover' })}
`;

const Wrapper = styled.div`
  width: 18rem;
  height: 100%;
  padding: 1.25rem;
  margin-bottom: 5rem;
  margin-top: 2rem;
  background-color: #ffffffab;
  border-radius: 2rem;
  ${desktop({ width: '49rem', marginBottom: '0rem', height: '37rem' })}
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  padding: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 15rem;
  margin: 0rem 0.7rem 0rem 0rem;
  padding: 0.7rem;
  border-radius: 2rem;
  border: solid 1px dark;
  text-align: center;
  &::placeholder {
    text-align: center;
  }
`;

const Message = styled.textarea`
  resize: none;
  text-align: center;
  border-radius: 2rem;
  &::placeholder {
    text-align: center;
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
  width: 15rem;
  border: none;
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  color: white;
  background-color: #4c9b4c;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
  &:nth-child(2) {
    background-color: #f14343;
  }
  &:hover:nth-child(2) {
    background-color: red;
    cursor: pointer;
  }
  ${desktop({ margin: '1rem ', width: '20rem' })}
`;

const ErrorYup = styled.p `
color : tomato;
text-align : center;
font-size : 0.9rem;
&::before {
    display: inline;
    content: '⚠';
  }
  ${desktop({ fontSize: '1.1rem' })}
`

const Contact = () => {



const navigate = useNavigate()

const onHome = ()=> {
  navigate('/')
}

  const schema = yup
    .object({
      lastname: yup.string().max(50).required('Please enter your lastname'),
      firstname: yup.string().max(50).required(' Please enter your firstname'),
      phone: yup
        .number()
        .max(12)
        .typeError('Please enter a valid telephone number')
        .required('Please enter your phone number'),
      email: yup
        .string()
        .email('Please enter a valid email')
        .max(255)
        .required('Please enter a mail'),
      message: yup.string().max(255).required('Please enter a message'),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ()=> {
    alert("Thank you for completing the form, a reply will be given to you as soon as possible")
  
  }
  return (
    <Container>
      <Wrapper>
        <Title>
          {' '}
          For more information about Harry Potter, please contact me by
          completing this form
        </Title>
        <Form   onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            {errors.lastname &&(<ErrorYup>{errors.lastname.message}</ErrorYup>)}
            <Label>
              Lastname* :
              <Input type="text" placeholder="Lastname" name="lastname" {...register('lastname')} />
            </Label>
          </FormContainer>
          <FormContainer>
          {errors.firstname &&(<ErrorYup>{errors.firstname.message}</ErrorYup>)}
            <Label>
              Firstname* :
              <Input type="text" placeholder="Firstname" name="firstname" {...register('firstname')}  />
            </Label>
          </FormContainer>
          <FormContainer>
          {errors.email &&(<ErrorYup>{errors.email.message}</ErrorYup>)}
            <Label>
              Email* :
              <Input type="text" placeholder="Email" name="email"  {...register('email')} />
            </Label>
          </FormContainer>
          <FormContainer>
          {errors.phone &&(<ErrorYup>{errors.phone.message}</ErrorYup>)}
            <Label>
              Phone* :
              <Input type="text" placeholder="Phone" name="phone" {...register('phone')}  />
            </Label>
          </FormContainer>
          <FormContainer>
          {errors.message &&(<ErrorYup>{errors.message.message}</ErrorYup>)}
            <Label>
              Message* :
              <Message
                cols="40"
                rows="10"
                placeholder="Please enter a message"
                {...register('message')} 
              />
            </Label>
          </FormContainer>
          <ButtonContainer>
            <Button>Send</Button>
            <Button onClick={onHome}>Home</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
