"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreQueryString = void 0;
function restoreQueryString(params) {
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
exports.restoreQueryString = restoreQueryString;
