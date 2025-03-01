import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/splash.module.css";

export default function SplashScreen({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 2000); // Show for 2s, then fade out
    setTimeout(onFinish, 3000); // Redirect after 3s
  }, [onFinish]);

  return (
    <div className={`${styles.splash} ${fade ? styles.fadeOut : ""}`}>
      <Image src="/logo.png" alt="Rita Haven Logo" width={150} height={150} />
      <h1 className={styles.title}>Rita Haven</h1>
      <p className={styles.slogan}>Your One-Stop Store for Quality Foodstuffs</p>
    </div>
  );
}