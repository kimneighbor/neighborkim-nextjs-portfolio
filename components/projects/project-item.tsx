import {GitHubLink, VelogLink} from '../icon-button';
import Image from "next/legacy/image";

export default function ProjectItem({data}: any) {

    // 프로젝트 아이템들 추가 (notion 속성 추가 후 json 보고 패스 잡아주면 된다)
    const title = data.properties.Name.title[0].plain_text
    const subtitle = data.properties.Subtitle.rich_text[0]?.plain_text
    const github = data.properties.Github.url
    const velog = data.properties.Velog.url
    const description = data.properties.Description.rich_text[0]?.plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select


    return (
        // <div className="flex flex-col p-3 m-3 bg-slate-700 rounded-xl">

        <div className="xl:w-1/4 md:w-1/2 p-3">
            <div
                className="bg-white dark:bg-slate-800 rounded-lg transition-colors duration-1000 ease-in-out h-full">
                {/*<img className="rounded-t-md object-cover object-center" src={imgSrc} alt="content"/>*/}
                <Image className="rounded-t-md object-cover object-center"
                       src={imgSrc}
                       alt="content"
                       width={768}
                       height={432}
                />

                <div className="p-5">
                    <h3 className="tracking-widest dark:text-blue-400 text-blue-600 text-xs font-medium title-font">{subtitle}</h3>
                    <h2 className="text-xl text-gray-900 font-medium title-font">{title}</h2>
                    {/*<p className="leading-relaxed text-base">{description}</p>*/}
                    <p className="leading-relaxed text-base mb-5">
                        {description.length > 41 ? `${description.substring(0, 40)}...` : description}
                    </p>

                    {/*Tags*/}
                    <div className="flex items-start mb-3 ">
                        {tags.map((aTag: any) => (
                            <h2 className="text-xs px-2 py-0.5 mr-2 rounded-md bg-blue-200 dark:bg-blue-600 "
                                key={aTag.id}>{aTag.name}</h2>
                        ))}
                    </div>

                    {/*조건부 렌더링. github가 있으면 아이콘을 보여주고 없으면 아이콘을 보여주지 않는다.*/}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <GitHubLink/>
                        </a>
                    )}
                    {velog && (
                        <a href={velog} target="_blank" rel="noopener noreferrer">
                            <VelogLink/>
                        </a>
                    )}

                </div>
            </div>
        </div>

    );
}


