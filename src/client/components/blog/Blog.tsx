"use client";
import { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import BlogSearchInput from "./BlogSearchInput";
import { GetPaginateBlog } from "@/client/api/blog";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat)

const Blog = () => {
    const [paginateBlogParams, setPaginateBlogParams] = useState<{ 
        page: number, 
        page_size: number 
    }>({ page: 1, page_size: 10 });

    // Query
    const paginateBlogQuery = useQuery({
        queryKey: ['blogs', paginateBlogParams],
        queryFn: () => GetPaginateBlog(paginateBlogParams),
    })

    // Action
    const searchClick = () => {
        paginateBlogQuery.refetch()
    }

    return (
        <main className="w-full md:max-w-3xl md:mx-auto text-white">
            <BlogSearchInput searchFn={searchClick} />
            {paginateBlogQuery.status === "loading" ? <div className="m-4">Loading...</div> : <></>}
            {paginateBlogQuery.data?.status === 200 ? paginateBlogQuery.data.json?.results.map((x) => {
                return <BlogItem
                    key={x.id}
                    title={x.title}
                    link={`/blog/${x.link}`}
                    tags={x.tags.map(y => y?.name || "")}
                    created_at={dayjs(x.created_at, "YYYY-MM-DD").toDate()}
                />
            }) : <></>}
            {paginateBlogQuery.data?.status === 500 ? <div>Something Wrong with seerver</div> : <></>}
        </main>
    )
}

export default Blog;