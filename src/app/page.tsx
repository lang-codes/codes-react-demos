import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'

// import App from './demos/1-01-first-file';
// import App from './demos/2-01-first-component';
// import App from './demos/2-02-second-component';
// import App from './demos/2-03-third-component-html-event';
// import App from './demos/2-04-fourth-component-counter';
// import App from './demos/2-05-fifth-component-className';
// import App from './demos/2-06-sixth-component-styles';
// import App from './demos/2-07-seven-component-styles-two';
// import App from './demos/2-08-eight-component-styles-three';
import App from './demos/2-09-nine-component-styles-four';


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main className={styles.main}>
      <App/>
    </main>
  )
}
