import Layout from "@/components/layout";
import HEAD from "next/head";
import ProjectItem from "@/components/projects/project-item";
import {DATABASE_ID, TOKEN} from "@/config";
import {Fragment} from "react";

export default function Posts({projects}: any) {
    return (
        <Fragment>
            <Layout>
                <HEAD>
                    <title>NeighborKim.com</title>
                    <meta name="description" content="portfolio"></meta>
                    <link rel="icon" href="/favicon.ico"/>
                </HEAD>


                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Posts /
                                Notion API

                                {/*/ Projects : {projects.results.length}*/}

                                {/*애니메이션 버튼*/}
                                <span className="relative h-5 w-5 mx-3">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-400"></span>
                        </span>
                            </h1>
                            {/*<div className="h-1 w-20 bg-blue-500 rounded"></div>*/}
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                            이 섹션은 Projects와 동일한 섹션이지만 subtitle 이 블로그인 아이템만 가져옵니다. 따라서 Projects 컴포넌트에는 subtitle이
                            프로젝트인 아이템만, Posts 컴포넌트에는 subtitle 이 블로그인 아이템만 가져옵니다.

                        </p>

                    </div>


                    <div className="flex flex-wrap -m-4">
                        {/*project-item*/}
                        {/*서브타이틀이 블로그인 아이템만 가져온다*/}
                        {projects.results.filter((aProject: any) => aProject.properties.Subtitle.rich_text[0]?.plain_text === "블로그").map((aProject: any) => (
                            <ProjectItem key={aProject.id} data={aProject}/>
                        ))}
                    </div>


                </div>

            </Layout>
        </Fragment>
    );
}

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
                    // 날짜별 정렬
                    "property": "WorkPeriod",
                    // 내림차순
                    "direction": "descending"
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
        },
        revalidate: 10, // 페이지가 재생성될 시간 간격(초)
    };

}