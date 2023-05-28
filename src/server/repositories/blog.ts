import { BlogJsonType, BlogDetailJsonType } from "@/server/types/blog";

export const paginateBlog = ({
  blogs,
  page = 1,
  page_size = 10,
}: {
  blogs: BlogJsonType;
  page?: number | undefined;
  page_size?: number | undefined;
}): {
  data: BlogJsonType;
  num_data: number;
  num_page: number;
} => {
  let num_blog = blogs.length;
  let start = (page - 1) * page_size;
  if (start > num_blog) {
    return {
      data: [],
      num_data: 0,
      num_page: 0,
    };
  }
  let end = start + page_size;
  if (end > num_blog) {
    end = num_blog;
  }
  return {
    data: blogs.slice(start, end),
    num_data: num_blog,
    num_page: Math.ceil(num_blog / page_size),
  };
};

export const getDetailBlog = ({
  blogs,
  id,
}: {
  blogs: BlogJsonType;
  id: string;
}): BlogDetailJsonType | null => {
  let selected_blog = blogs.filter((x) => x.id === id);
  if (selected_blog.length == 0) {
    return null;
  }
  return selected_blog[0];
};
