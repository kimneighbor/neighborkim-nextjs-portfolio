import Link from "next/link";
import Layout from "./components/layout";

export default function Projects() {
    return (
        <Layout>
            <title>NeighborKim.com</title>
            <meta name="description" content="Learn Next.js"></meta>
            <link rel="icon" href="/favicon.ico" />
             <h1>프로젝트 파일</h1>

        </Layout>
    );
}



// 빌드 타임에 호출 (딱 1번)
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json'
        },
        body: JSON.stringify({page_size: 100})
    };

    fetch('https://api.notion.com/v1/databases/database_id/query', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return {
        props: {
            // allPostsData
        }
    };

}
