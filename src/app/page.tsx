import Image from 'next/image'
import Profile from '../../public/profile_img.jpeg'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={styles.wrap}><Image src={Profile} alt='profile' className={styles.img} /></div>
      <div className={styles.wrap}><Link href='https://github.com/sid12g'><p>공사중</p></Link></div>
    </div>
  )
}
