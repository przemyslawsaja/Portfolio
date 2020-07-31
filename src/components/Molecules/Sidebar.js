import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 998;
`

const Sidebar = () => {
    return (
        <div>
            GIT
            LINK
            CV
        </div>
    );
};

export default Sidebar;