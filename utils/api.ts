import { ref } from "vue";
const config = ref(useRuntimeConfig())

export function getData(data: any) {
  return data["_rawValue"].data;
}

export function getApiQueryString(apiEndpoint: string) {
  return `${config.value.API_HOST}/${apiEndpoint}/api/`;
}

// export function makeApiRequest(url: string) {
//   const { data, error } = useFetch(getApiQueryString(url));
//   if (error) {
//     throw new Error();
//   }
//   return getData(data);
// }
