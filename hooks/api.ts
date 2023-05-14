import { ref } from "vue";
const config = ref(useRuntimeConfig())
config.value
export default function useApi(
  url: RequestInfo,
  options?: RequestInit | undefined
) {
  const response = ref();
  const request = async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    response.value = data;
  };
  return { response, request };
}
