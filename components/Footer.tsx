import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>IES Cura Valera</h3>
                    <p>Formación de calidad para tu futuro.</p>
                </div>
                <div className={styles.section}>
                    <h3>Enlaces de Interes</h3>
                    <ul>
                        <li><Link href="/web-50-aniversario">Web 50 Aniversario</Link></li>
                        <li><Link href="/web-antigua">Web Antigua</Link></li>
                        <li><Link href="/consejeria">Consejería de Educación</Link></li>
                        <li><Link href="/seneca">Séneca</Link></li>
                        <li><Link href="/Pasen">Pasen</Link></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h3>Encuéntranos en..</h3>
                    <h4>DIRECCIÓN POSTAL:</h4>
                    <p>Avda. Guillermo Reyna, 35 04600 HUÉRCAL-OVERA Almería</p>
                    <h4>DIRECCIÓN ELECTRÓNICA:</h4>
                    <p>https://iescuravalera.es</p>
                    <p>04002714.edu@juntadeandalucia.es</p>
                    <div className={styles.socials}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} IES Cura Valera. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
