// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <a href="/about">Om oss</a>
          <a href="/contact">Ta kontakt</a>
        </div>
        <div className={styles.copyRight}>
          © {new Date().getFullYear()} Laget med ❤️️ av KometKameratene.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
