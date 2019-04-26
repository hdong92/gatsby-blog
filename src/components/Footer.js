import React from 'react'

const Footer = () => {
    const blogLink = <a href="/." rel="nofollow">Hao's learning log</a>;
    const themeLink = <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/pagecho">Cho</a>;
    const year = new Date().getFullYear();

    return (
        <footer>Copyright © {year} {blogLink}. Theme by {themeLink}.</footer>
    );
};

export default Footer;
