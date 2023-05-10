import { posts } from "./constants";

export default defineEventHandler(async (event) => {
  return posts
});
