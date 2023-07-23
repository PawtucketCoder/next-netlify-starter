import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'; // Import useEffect from React

export default function Home() {
  useEffect(() => {
    // Move the JavaScript code inside useEffect hook
    function animateEllipsis() {
      const ellipsisElement = document.getElementById('animatedEllipsis');
      let count = 0;
      const interval = setInterval(() => {
        count++;
        if (count > 3) count = 0;

        ellipsisElement.textContent = 'Loading' + '.'.repeat(count);
      }, 500); // Change the interval to control the speed of the animation

      return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    }

    animateEllipsis();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div className="container">
      <Head>
        <title>SceneJunction.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 id="animatedEllipsis">Loading</h1>
      </main>

      <Footer />
    </div>
  )
}
