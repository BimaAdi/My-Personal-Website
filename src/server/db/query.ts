import fs from "fs";
import { BlogStringType } from "./types";
import { BlogJsonSchema, BlogJsonType } from "@/server/types/blog";
import { TagJsonType, TagJsonSchema } from "@/server/types/tag";
import { DEFAULT_JSON_PATH, DEFAULT_MD_PATH } from "@/shared/constants";

export const readBlog = (): BlogJsonType => {
  let data = fs.readFileSync(
    `${global.JSON_PATH || DEFAULT_JSON_PATH}blogs.json`
  );
  let json = JSON.parse(data.toString()) as BlogStringType;
  json = json.map((x) => {
    return { ...x, created_at: new Date(x.created_at) };
  });
  return BlogJsonSchema.parse(json);
};

export const readTag = (): TagJsonType => {
  let data = fs.readFileSync(
    `${global.JSON_PATH || DEFAULT_JSON_PATH}tags.json`
  );
  let json = JSON.parse(data.toString());
  return TagJsonSchema.parse(json);
};

export const readBlogMd = (link: string): string => {
  let data = fs.readFileSync(`${global.MD_PATH || DEFAULT_MD_PATH}/${link}.md`);
  return data.toString();
}
