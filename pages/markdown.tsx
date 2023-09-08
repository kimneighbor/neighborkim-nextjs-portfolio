import HEAD from "next/head";
import Layout from "@/components/layout";
import ReactMarkdown from "react-markdown";




const markdowntext = `
### lottie 재생

- \`npm install --save react-lottie-player\`

# 9 버전 이후 <Link> 태그 안에 <a> 태그 사용 불가

https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor

9버전 이전에 작성된 코드에서 사용하려면 \`legacyBehavior\` 를 사용하는 방법이 있다. 

\`\`\`jsx
// 예시
<Link href="/" legacyBehavior>
\`\`\`

# min-h-screen 헤더에 밀리는 현상

본문에 min-h-screen 을 적용 시키면 세로로 정렬이 되지만 화면상의 가운데가 아닌 header 를 제외한 영역의 가운데로 정렬이 된다. min-h-[calc(100vh-헤더height크기)] 로 임시 해결
`


export default function Markdown() {
    return (
        <Layout>
            <HEAD>
                <title>kimdonghwan.com</title>
                <meta name="description" content="portfolio"></meta>
                <link rel="icon" href="/favicon.ico"/>
            </HEAD>



            <section className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center text-gray-600">


                <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                    <ReactMarkdown className="markdown items-start">
                        {markdowntext}
                    </ReactMarkdown>


                </div>
            </section>
        </Layout>
    );
};

