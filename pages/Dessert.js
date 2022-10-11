import styles from '../styles/Home.module.css'
import Image from 'next/image'




export default function Dessert() {
  const pictureUrl = 'https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400'
  return (
    <div className={styles.container}>
    <h1>Hello Dessert</h1>
<Image 
src={pictureUrl}
width={2400}
height={2400}
layout="responsive"
/>


    </div>
  )
}
