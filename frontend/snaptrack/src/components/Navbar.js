"use client";
import Link from 'next/link';
import styles from './navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false); 
  return (
    <>
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>SnapTrack</Link>    

      {/* for desktop */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Home</Link>
        </li>
        <li>
          <Link href="/monitoring" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Monitoring</Link>
        </li>
        <li>
          <Link href="/attendance" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Attendance Record</Link>
        </li>
        <li>
          <Link href="/admin" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Admin Panel</Link>
        </li>
      </ul>

      <button className={styles.menuButton} onClick={()=>{setisOpen(!isOpen)}}>☰</button>
    </nav>


    {/* for mobile menu */}
    {isOpen &&(
    <nav className={styles.mobileNav}>

      <ul>
        <li>
          <Link href="/" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Home</Link>
        </li>
        <li>
          <Link href="/monitoring" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Monitoring</Link>
        </li>
        <li>
          <Link href="/attendance" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Attendance Record</Link>
        </li>
        <li>
          <Link href="/admin" className={styles.link} onClick={()=>{setisOpen(!isOpen)}}>Admin Panel</Link>
        </li>
      </ul>
    </nav>
     )}

  </>
    
  );
}