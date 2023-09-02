export default function ProjectItem({data}:any){
    return(
        <div className="p-6 bg-slate-400 rounded-md">
            <h1>{data.properties.Name.title[0].plain_text}</h1>
        </div>
    )
}