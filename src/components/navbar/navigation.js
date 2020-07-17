import React,  {useRef}  from 'react';
import styled from "styled-components";
import { Link } from 'react-scroll'


const Menubar = styled.div`
  text-align: center;
  height: 100vh;
  transform-origin: top left;
  z-index: 10;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position:fixed;
  background-color: #100e1c;
`
const Icon = styled.i`
    font-size: 2.5em;
    color: #373160;
    margin: 50px 0;
    cursor: pointer;
    
    &:hover {
      color: rgb(218,155,138);
    }
`


const Navigation = () => {

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        //TODO: Highlight on activated href
            <Menubar>
                <ul>
                    <li>
                            <Link>
                                <Icon className="fas fa-home" />
                            </Link>
                    </li>
                    <li>
                            <Icon className="fas fa-user" onClick={() => scroll(20)} />
                    </li>
                    <li> <Icon className="fas fa-code">     </Icon> </li>
                    <li> <Icon className="fas fa-envelope"> </Icon> </li>
                </ul>
            </Menubar>
    );
};

export default Navigation;