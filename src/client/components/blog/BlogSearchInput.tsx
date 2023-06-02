"use client";
import { useState } from "react";

interface PropsBlogSearchInput {
    searchFn: (search: string) => void
}

const BlogSearchInput = ({ searchFn }: PropsBlogSearchInput) => {
    const [input, setInput] = useState<string>("");

    // Action
    const search = () => {
        searchFn(input.trim());
    }

    return (
        <div className="m-4 flex h-full">
            <input 
                id="blogInput"
                className="appearance-none block h-full w-10/12 text-gray border border-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                type="input" placeholder="Search"
                value={input} onChange={(e) => setInput(e.target.value)}
            />
            <button 
                id="blogSearch"
                onClick={search} 
                className="bg-gray text-white font-bold ml-2 w-2/12 rounded" 
                style={{ height: "45px" }}
            >
                Search
            </button>
        </div>
    )
}

export default BlogSearchInput;