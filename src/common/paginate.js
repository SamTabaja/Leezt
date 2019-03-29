import _ from "lodash";

export function paginate(items, currentPage, itemPerPage) {
  let start = (currentPage - 1) * itemPerPage;
  return _(items)
    .slice(start)
    .take(itemPerPage)
    .value();
}
