import UrlSubmit from "@components/UrlSubmit";
import TopDomains from "@components/TopDomains";
import TopArticles from "@components/TopArticles";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout home>
      <main>
        <p>Did you just read a low-effort article on the internet and regret increasing CTR stats? Get your click back! Submit the URL below and be forgiven</p>
        <p>Stats below were last updated: <i>2023-08-12 4:44pm EDT</i></p>
        <UrlSubmit />
        <TopDomains />
        <TopArticles />
      </main>
    </Layout>
  );
}
