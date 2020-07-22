import React from 'react';
import Title from "../components/Atoms/Title";
import TopWave from "../assets/waves/contactWave_1.svg"
import BottomWave from "../assets/waves/contactWave_2.svg"
import Wave from "../components/Atoms/Wave";
import styled from "styled-components";
import { useForm } from "react-hook-form"

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
  margin-top: 50px;
  width:  60vw;
  height: 50vh;
  background-color: grey;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
const StyledInput = styled.input`
  height: 40px;
  border: 0;
  border-bottom: 2px solid black;
  background: none;
`
const StyledTextarea = styled.textarea`
  height: 300px;
`
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
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <StyledInput
                        type="input"
                        name="email"
                        placeholder="youremail@mail.com"
                        ref={register({ 
                            required: true,
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                message: 'invalid email adress'
                            }
                        })} />
                    {errors.email && 'Email is required.'}
                    <StyledTextarea
                        name="textarea"
                        ref={register({
                            required: true,
                        })} />
                    {errors.textarea && 'Please enter number for age.'}
                    <input type="submit" />
                </StyledForm>
            </ContextWrapper>
        </Wrapper>
    );
};

export default Contact;