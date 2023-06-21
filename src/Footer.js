import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Reena Thomas</p>
        <div className="footer-links">
          <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
