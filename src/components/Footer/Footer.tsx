import React from 'react';
import './FooterStyles.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-link__git">
        <a
          href="https://github.com/grishanova-oa"
          target="_blank"
          className="link-text"
          rel="noreferrer"
        >
          GIt Author Olga
        </a>
        <a href="https://github.com/khomdv" target="_blank" className="link-text" rel="noreferrer">
          GIt Author Dzmitry
        </a>
      </div>
      <p>2023</p>
      <a className="footer__logo" href="https://rs.school/js/">
        RSS
      </a>
    </footer>
  );
};
