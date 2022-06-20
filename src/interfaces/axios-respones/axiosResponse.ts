export default interface AxiosResponse<Data, Links = unknown, Meta = unknown> {
  results: Data;
  data: Data;
  links: Links;
  meta: Meta;
}
