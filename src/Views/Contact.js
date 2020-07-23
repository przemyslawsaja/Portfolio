import React from 'react';
import Title from "../components/Atoms/Title";
import TopWave from "../assets/waves/contactWave_1.svg"
import BottomWave from "../assets/waves/contactWave_2.svg"
import Wave from "../components/Atoms/Wave";
import styled from "styled-components";
import { keyframes } from 'styled-components';
import { useForm } from "react-hook-form"
import SecondaryButton from "../components/Atoms/Button/SecondaryButton";

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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`
const StyledWave = styled(Wave)`
  position: absolute;
  z-index: 1;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width:  60vw;
  height: 50vh;
  background-color: #0e0d1a;
  opacity: 0.9;
  border-radius: 20px;
  padding: 30px;
`
const StyledInput = styled.input`
  font-size: 1.5em;
  width: 90%;
  color: white;
  margin: 10px 50px 40px 50px;
  padding: 10px;
  background: none;
  border: 0;
  border-bottom: 2px solid royalblue;
  
  &:focus {
  outline-width: 0;
  }
`
const StyledTextArea = styled.textarea`
  font-size: 1.5em;
  color: white;
  background: none;
  width: 90%;
  height: 400px;
  padding: 20px;
  border: 2px solid royalblue;
  margin-bottom: 30px;
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
const Contact = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Wrapper id="contact">
            <StyledWave src={TopWave} position="top" />
            <StyledWave src={BottomWave} />
            <ContextWrapper>
                <Title>
                    Let's Talk
                </Title>
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