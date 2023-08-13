import UrlSubmit from "@components/UrlSubmit";
import TopDomains from "@components/TopDomains";
import TopArticles from "@components/TopArticles";
import Layout from "@components/layout";

export default function Home() {
  return (
    <Layout home>
      <main>
        <UrlSubmit />
      </main>
    </Layout>
  );
}
