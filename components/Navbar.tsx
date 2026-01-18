'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <img src="/cropped-LogoNuevo.png" alt="Logo" className={styles.navLogo} />
                    IES Cura Valera, Huércal-Overa
                </Link>

                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <span>Inicio</span>
                        <div className={styles.dropdown}>
                            <Link href="/plan-centro" className={styles.dropdownItem}>Plan de Centro</Link>
                            <Link href="/plan-actuacion" className={styles.dropdownItem}>Plan Actuacion Digital</Link>
                            <Link href="/otros" className={styles.dropdownItem}>Otros documentos de funcionamiento interno</Link>
                        </div>
                    </li>
                    <li className={styles.navItem}>
                        <span>Noticias</span>
                        <div className={styles.dropdown}>
                            <Link href="/jefatura" className={styles.dropdownItem}>Jefatura de Estudios</Link>
                            <Link href="/plan-igualdad" className={styles.dropdownItem}>Plan de Igualdad y Escuela: espacio de Paz</Link>
                            <Link href="/trofeo" className={styles.dropdownItem}>Trofeo Director</Link>
                            <Link href="/adultos" className={styles.dropdownItem}>Adultos</Link>
                            <Link href="/videos-fotos" className={styles.dropdownItem}>Videos y Fotos</Link>
                        </div>
                    </li>
                    <li className={styles.navItem}>
                        <span>Oferta Educativa</span>
                        <div className={styles.dropdown}>
                            <Link href="/ofertas-educativas" className={styles.dropdownItem}>Ofertas Educativas</Link>
                            <Link href="/departamentos" className={styles.dropdownItem}>Departamentos</Link>
                            <Link href="/btopa" className={styles.dropdownItem}>BTOPA</Link>
                            <Link href="/espa" className={styles.dropdownItem}>ESPA</Link>
                        </div>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
