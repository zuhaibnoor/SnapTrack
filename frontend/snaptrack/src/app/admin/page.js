import styles from "./admin.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Admin() {
    const cards = [
        
        {
            title:"Add People",
            description:"Add data of people to mark attendance",
            icon: "/icons/add.svg",
            url:"/Add-people",        
        },

        {
            title: "Manual Attendance",
            description: "Manually mark attendance",
            icon:"/icons/manual.svg",
            url:"/manual",
        },

        {
            title: "Camera Settings",
            description: "Camera Configurations",
            icon:"/icons/settings.svg",
            url:"settings",
        }

    
    ]
    return(
        <>
            <div className={styles.container}>
              { cards.map((card,index)=>(
                <Link href={card.url} key={index} className={styles.card}>
                    <Image className={styles.icon}
                        alt="icon"            
                        src={card.icon}
                        width={20}
                        height={20}                    
                    />
                    <h1 className={styles.title}> {card.title}</h1>
                    <p className={styles.description}>{card.description}</p>                
                </Link>    
                ))
            }
            </div>
        </>
    )
}