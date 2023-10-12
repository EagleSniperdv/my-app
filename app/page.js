import Image from 'next/image'
import styles from './page.module.css'
import Dashboard from './dashboard/page';

export default function Home() {
  return (
    <div>
      <Image src={Image} alt="Image" />
      </div>
  );
}
