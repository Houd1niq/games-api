export function restoreQueryString(params: {
  platform?: string;
  tag?: string;
  "sort-by"?: string;
}) {
  let queryString = "";
  if (params.platform) {
    queryString += `?platform=${params.platform}`;
  }
  if (params.tag) {
    queryString += `&tag=${params.tag}`;
  }
  if (params["sort-by"]) {
    queryString += `&sort-by=${params["sort-by"]}`;
  }
  return queryString;
}
