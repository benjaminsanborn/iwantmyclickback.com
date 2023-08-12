import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import UrlSubmit from "@components/UrlSubmit";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>iwantmyclickback.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="iwantmyclickback! .com!" />
        <hr />
        <p className="description">
          Do you want your click back? Enter it below!
        </p>
        <UrlSubmit />
      </main>
      <Footer />
    </div>
  );
}
