import fs from "fs";
import {
  BlogJsonSchema,
  BlogJsonType,
  BlogStringType,
  BlogDetailJsonType,
  TagJsonSchema,
  TagJsonType,
  TagDetailType,
} from "./types";

export const readBlog = (): BlogJsonType => {
  let data = fs.readFileSync(`${global.JSON_PATH}blogs.json`);
  let json = JSON.parse(data.toString()) as BlogStringType;
  json = json.map((x) => {
    return { ...x, created_at: new Date(x.created_at) };
  });
  return BlogJsonSchema.parse(json);
};

export const readTag = (): TagJsonType => {
  let data = fs.readFileSync(`${global.JSON_PATH}tags.json`);
  let json = JSON.parse(data.toString());
  return TagJsonSchema.parse(json);
};

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

export const getDetailTag = ({
  tags,
  id,
}: {
  tags: TagJsonType;
  id: string;
}): TagDetailType | null => {
  let selected_tag = tags.filter((x) => x.id === id);
  if (selected_tag.length > 0) {
    return selected_tag[0];
  }
  return null;
};
