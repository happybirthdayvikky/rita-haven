import Head from "next/head";

export default function Home() {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Head>
        <title>Rita Haven - Freshness You Can Trust</title>
        <meta name="description" content="Buy high-quality foodstuffs from Rita Haven. Freshness You Can Trust!" />
        <meta name="keywords" content="Rita Haven, foodstuffs, fresh food, groceries, quality food" />
        <meta name="author" content="Rita Haven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation Bar */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Homepage Content */}
      <header>
        <h1>Rita Haven</h1>
        <p>Freshness You Can Trust</p>
      </header>
    </div>
  );
}