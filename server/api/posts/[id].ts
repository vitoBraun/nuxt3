import { IPost } from "~/models/Post";
import { posts } from "./constants";

export default defineEventHandler(
  async (event: any): Promise<IPost | undefined> => {
    const { id } = event.context.params;
    return posts[+id];
  }
);
