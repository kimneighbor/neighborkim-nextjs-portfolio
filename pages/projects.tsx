import Layout from "./components/layout";
import {TOKEN, DATABASE_ID} from "@/config";
import HEAD from "next/head";
import ProjectItem from "./components/projects/project-item";


export default function Projects({projects}: any) {
    // console.log(projectsNames)
    return (
        <Layout>
            <HEAD>
                <title>NeighborKim.com</title>
                <meta name="description" content="Learn Next.js"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </HEAD>

            <h1>프로젝트 진행 수 : {projects.results.length}</h1>

            {projects.results.map((aProject: any) => (
                <ProjectItem key={aProject.id} data={aProject}/>
            ))}


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
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`

        },
        body: JSON.stringify({
            // 정렬 적용
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()


    const projectNames = projects.results.map((aProject: any) => (
        aProject.properties.Name.title[0].plain_text
    ))


    return {
        props: {
            projects
            // allPostsData
        }
    };

}
