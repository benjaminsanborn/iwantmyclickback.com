import UrlSubmit from "@components/UrlSubmit";
import TopDomains from "@components/TopDomains";
import TopArticles from "@components/TopArticles";
import Layout from "@components/layout";
import LastUpdated from "@components/LastUpdated";

export default function Home() {
  return (
    <Layout home>
      <main>
        <UrlSubmit />
        <TopDomains />
        <TopArticles />
        <LastUpdated />
      </main>
    </Layout>
  );
}
