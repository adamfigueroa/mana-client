import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from './MenuToggle';
import OverlayMenu from './OverlayMenu';

const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

const OverlayContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 45%;
  height: 100%;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em)
  user-select: none;
  padding: 1em 2.5em;
`;

const menuVariants = {
  open: {
    transform: 'translateX(3%)',
  },
  closed: {
    transform: 'translateX(103%)',
  },
};

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerContainer>
      <MenuToggle toggle={handleMenuToggle} isOpen={isOpen} />
      <OverlayContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <OverlayMenu isOpen={isOpen}/>
      </OverlayContainer>
    </HamburgerContainer>
  );
}

export default HamburgerMenu;
