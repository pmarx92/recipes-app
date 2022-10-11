import styles from '../styles/Home.module.css'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />

    </div>
  )
}
