import { useState } from "react";
import SplashScreen from "./splash";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return loading ? <SplashScreen onFinish={() => setLoading(false)} /> : (
    <div>
      <h1>Welcome to Rita Haven</h1>
      <p>Shop the best quality foodstuffs!</p>
    </div>
  );
}