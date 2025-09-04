import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "./home.module.css";
import Attendance from "./attendance/page";
import Link from "next/link";

export default function Home() {
  const cards = [
    {
      title: "Mark Attendance",
      description: "Mark attendance using camera.",
      icon:"/icons/cctv.svg",
      url:"/monitoring",
    },
    {
      title: "Attendance Management",
      description: "Manage attendance with ease.",
      icon: "/icons/attendance.svg",
      url: "/attendance",
    },
    {
      title: "Admin Panel",
      description: "Manage settings and configurations.",
      icon: "/icons/admin.svg",
      url: "/admin",
    },
  ]
  return (
  <>
    <div className={styles.container}>
    {
      cards.map((card,index) => (
          <Link href={card.url} className={styles.card} key={index}>
            <Image
              src={card.icon}
              alt={card.title}
              width={50}
              height={50}
              className={styles.icon}
            />
            <h1 className={styles.Title}>{card.title}</h1>
            <p className={styles.description}>{card.description}</p>
          </Link>
      ))
    }
    </div>
  </>
  )
}
