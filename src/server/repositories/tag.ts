import { TagJsonType, TagDetailType } from "@/server/types/tag";

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
