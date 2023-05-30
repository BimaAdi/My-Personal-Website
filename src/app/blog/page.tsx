import Main from "@/client/layouts/Main"
import BlogComponent from "@/client/components/blog/Blog";

export default async function Blog() {
    return (
        <Main>
            <div style={{ height: "70px" }}></div> {/* navbar buffer */}
                <BlogComponent />
            <div style={{ height: "70px" }}></div> {/* footer buffer */}
        </Main>
    )
}