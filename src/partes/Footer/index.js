import React from 'react';
import { Box } from '../../components';
import './style.css';

function Footer() {
  return (
    <Box>
        <h1 className='creditos'>
        Site desenvolvido por: {" "}
        <a href="https://github.com/JNCJcoder">
          JNCJcoder
        </a>
        </h1>
    </Box>
  );
}

export default Footer;
