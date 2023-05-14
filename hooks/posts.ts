import useApi from "./api";
import { ref } from "vue";

export default async function usePosts() {
  const { response: posts, request } = useApi(getApiQueryString("posts?desc&populate=*"));
  const loaded = ref(false);
  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }
  return { posts };
}
