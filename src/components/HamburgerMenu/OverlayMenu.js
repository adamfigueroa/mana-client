import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const OverlayMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const OverlayList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OverlayLink = styled(motion.li)`
  height: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: #473198;
    }
  }
`;

const variants = {
  show: {
    transform: 'translateX(1%)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(103%)',
    opacity: 0,
  },
};

function OverlayMenu({ isOpen }) {
  return (
    <OverlayMenuContainer>
      <OverlayList>
        <OverlayLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a href="/">Register</a>
        </OverlayLink>
        <OverlayLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.35, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <a href="/login">Login</a>
        </OverlayLink>
        <OverlayLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <a href="/dashboard">Dashboard</a>
        </OverlayLink>
        <OverlayLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.45, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <a href="/addtopractice">Add to your practice</a>
        </OverlayLink>
      </OverlayList>
    </OverlayMenuContainer>
  );
}

export default OverlayMenu;
