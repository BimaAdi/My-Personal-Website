import Main from "@/client/layouts/Main"
import BlogSearchInput from "@/client/components/BlogSearchInput";
import BlogItem from "@/client/components/BlogItem";

export default function Blog() {
    return (
        <Main>
            <div style={{ height: "70px" }}></div> {/* navbar buffer */}
            <main className="w-full md:max-w-3xl md:mx-auto text-white">
                <BlogSearchInput />
                <BlogItem 
                    title="How to structure your Rust Project" 
                    link="/" 
                    tags={["Rust", "Cargo"]}
                    created_at={new Date("2023-03-27")}
                />
                <BlogItem 
                    title="Scaling Websocket in Go" 
                    link="/" 
                    tags={["Websocket", "Go", "Redis"]}
                    created_at={new Date("2023-03-15")}
                />
                <BlogItem 
                    title="Programing in Canvas using reactjs" 
                    link="/" 
                    tags={["Javascript", "React"]} 
                    created_at={new Date("2023-02-02")}
                />
            </main>
        </Main>
    )
}