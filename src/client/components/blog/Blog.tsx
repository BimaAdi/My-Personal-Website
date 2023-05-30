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
    const [blogsState, setBlogState] = useState<{
        id: string,
        title: string,
        link: string,
        tags: string[],
        created_at: Date
    }[]>([])

    // Query
    const { status: qpbStatus, data: qpbData, isRefetching: qpbIsRefetching, refetch: qpbRefetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: () => GetPaginateBlog({ page: 1, page_size: 10 }),
    })
    useEffect(() => {
        if (qpbStatus === "success") {
            if (qpbData.status === 200) {
                setBlogState(qpbData.json.results.map((x) => {
                    return {
                        id: x.id,
                        title: x.title,
                        link: x.link,
                        tags: x.tags.map(y => y?.name || ""),
                        created_at: dayjs(x.created_at, "YYYY-MM-DD").toDate()
                    }
                }))
            }
        }
    }, [qpbStatus, qpbIsRefetching, qpbData])

    // Action
    const searchClick = () => {
        qpbRefetch()
    }

    return (
        <main className="w-full md:max-w-3xl md:mx-auto text-white">
            <BlogSearchInput searchFn={searchClick} />
            {blogsState.map((x) => {
                return <BlogItem
                    key={x.id}
                    title={x.title}
                    link={x.link}
                    tags={x.tags}
                    created_at={x.created_at}
                />
            })}
        </main>
    )
}

export default Blog;