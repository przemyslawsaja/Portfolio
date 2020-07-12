import React from 'react';
import Title from "../components/Title/Title";
import TopWave from "../assets/waves/contactWave_1.svg"
import BottomWave from "../assets/waves/contactWave_2.svg"
import Wave from "../components/Wave/Wave";

const Contact = () => {
    return (
        <div>
            <Wave src={TopWave} position="top" />
            <Wave src={BottomWave} />
            <Title>
                Contact Me
            </Title>
        </div>
    );
};

export default Contact;