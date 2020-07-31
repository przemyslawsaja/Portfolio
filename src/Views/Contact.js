import React from 'react';
import Title from "../components/Atoms/Title";
import TopWave from "../assets/waves/contactWave_1.svg"
import BottomWave from "../assets/waves/contactWave_2.svg"
import Wave from "../components/Atoms/Wave";
import styled from "styled-components";
import { keyframes } from 'styled-components';
import { useForm } from "react-hook-form"
import SecondaryButton from "../components/Atoms/Buttons/SecondaryButton";
import { device } from "../devices/breakpoints";

const ErrorAnimation = () => keyframes`
 0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  10%, 20% {
  -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
  -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
`
const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;


`
const ContextWrapper = styled.section`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 15%;
  
    

`
const StyledForm = styled.form`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0e0d1a;
  border-radius: 20px;
  opacity: 0.9;
  margin: 15px 0 10px 0;
  width: 100vw;
  height: 70vh;
  padding: 10px;
  @media ${device.mobileS} {
     width: 80vw;
  }
  @media ${device.mobileL} {
     width: 70vw;
     height: auto;
  }
  @media ${device.laptop} {
     padding: 20px 0 10px 10px;
     margin: 50px 0 0 50px;
  }  
  
`
const StyledInput = styled.input`
  width: 90%;
  color: white;
  margin: 10px 50px 40px 50px;
  padding: 20px;
  background: none;
  border: 0;
  border-bottom: 2px solid royalblue;

  @media ${device.tablet} {
     font-size: 1.5em;
  }
  &:focus {
  outline-width: 0;
  }
`
const StyledTextArea = styled.textarea`
  resize: none;
  color: white;
  background: none;
  width: 90%;
  height: 400px;
  padding: 20px;
  border: 2px solid royalblue;
  margin-bottom: 30px;
  
  @media ${device.tablet} {
     font-size: 1.7em;
  }
  
  &:focus {
  outline-width: 0;
  }
`
const ErrorMessage = styled.p`
  color: red;
  margin: 5px;  
  animation: ${ErrorAnimation} 1s both;
`

//TODO: BLOCK POSSIBILITY TO SEND MORE THEN ONE MAIL AFTER ENTERING VALID VALUES IN FORM
const Contact = ({aos}) => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Wrapper id="contact">
            <Wave src={TopWave} position="top" />
            <Wave src={BottomWave} />
            <ContextWrapper data-aos={aos}>
                <Title> Let's Talk </Title>
                <StyledForm  onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    {errors.email && errors.email.type === "required"  && <ErrorMessage>Email is required </ErrorMessage>}
                    {errors.email && errors.email.type === "pattern"  && <ErrorMessage> Wrong email </ErrorMessage>}
                    <StyledInput
                        label="E-mail"
                        name="email"
                        placeholder="youremail@mail.com"
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                message: 'invalid email adress'
                            }
                        })}

                    />
                    {errors.textarea && <ErrorMessage>Pleas enter your message</ErrorMessage>}
                    <StyledTextArea
                        placeholder="Your message..."
                        variant="outlined"
                        name="textarea"
                        ref={register({
                            required: true,
                        })} />



                    <SecondaryButton type="submit" >
                        Send
                    </SecondaryButton>
                </StyledForm>
            </ContextWrapper>
        </Wrapper>
    );
};

export default Contact;