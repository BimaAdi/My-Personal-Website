import Main from "@/client/layouts/Main"
import BlogComponent from "@/client/components/blog/Blog";

export default async function Blog() {
    return (
        <Main>
            <main className="w-full md:max-w-3xl md:mx-auto">
                <BlogComponent />
            </main>
        </Main>
    )
}