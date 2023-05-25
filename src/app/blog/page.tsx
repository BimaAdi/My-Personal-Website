import Link from "next/link";
import Main from "@/layouts/Main"
import BlogItem from "@/components/BlogItem";

export default function Blog() {
    return (
        <Main>
            <div style={{ height: "70px" }}></div> {/* navbar buffer */}
            <main className="w-full md:max-w-3xl md:mx-auto text-white">
                <div className="m-4">
                    <input placeholder="search"/>
                </div>
                <BlogItem 
                    title="How to structure your Rust Project" 
                    link="/" 
                    tags={["#Rust", "#Cargo"]}
                    created_at={new Date("2023-03-27")}
                />
                <BlogItem 
                    title="Scaling Websocket in Go" 
                    link="/" 
                    tags={["#Websocket", "#Go", "#Redis"]}
                    created_at={new Date("2023-03-15")}
                />
                <BlogItem 
                    title="Programing in Canvas using reactjs" 
                    link="/" 
                    tags={["#Javascript", "#React"]} 
                    created_at={new Date("2023-02-02")}
                />
            </main>
        </Main>
    )
}