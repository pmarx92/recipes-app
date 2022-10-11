import styles from '../styles/Home.module.css'
import Image from 'next/image'
import PizzaVeggie from '../public/pizza.jpg'


export default function Veggie() {
  return (
    <div className={styles.container}>
    <h1>Hello Veggie</h1>

 <Image
        src={PizzaVeggie}
        alt="Picture of the author"
         width={2400}
         height={1596} 
         layout="responsive"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  )
}
