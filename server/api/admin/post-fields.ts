import { postFields } from "./../posts/constants";

export default defineEventHandler(async (event) => {
  return postFields;
});
