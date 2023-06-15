"use client"
import hljs from 'highlight.js';
import styles from './blog.module.css';
import "highlight.js/styles/github-dark.css";
const highlightedCode = hljs.highlightAuto(`for (let i=1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0)  {
        console.log("fizz");
    } else if (i % 5 == 0)  {
        console.log("buzz");
    } else {
        console.log(i);
    }
}`).value

interface BlogDetailProps {
    body: string
}

const BlogDetail = ({ body }: BlogDetailProps) => {
    
    return (
        <div className="text-white bg-gray p-2 rounded-md">
            <div className={styles.blogDetail} dangerouslySetInnerHTML={{ __html: body }}></div>
            <pre>
                <code dangerouslySetInnerHTML={{__html: highlightedCode}}></code>
            </pre>
        </div>
    )
}

export default BlogDetail;