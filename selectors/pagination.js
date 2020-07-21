import R from "ramda";

const paginate = R.curry((curr, show = 6, arr) => {
  let visible = [];

  if (arr.length > show && curr <= show - 2) {
    visible = arr.slice(0, show);
    return [...visible, "...", arr[arr.length - 1]];
  }

  if (arr.length > show && curr > show - 2 && curr < arr.length - 2) {
    visible = arr.slice(curr - 2, curr + 1);
    return [arr[0], "...", ...visible, "...", arr[arr.length - 1]];
  }

  if (arr.length > show && curr > show - 2 && curr >= arr.length - 4) {
    visible = arr.slice(arr.length - show);
    return [arr[0], "...", ...visible];
  }

  return arr;
});

const getPages = (total, perPage) => {
  const pages = [];

  if (total === perPage || total < perPage) {
    return [1];
  }

  let page = 1;
  let remaining_results = total;

  do {
    pages.push(page);
    remaining_results = remaining_results - perPage;
    page++;
  } while (remaining_results > 0);

  return pages;
};

module.exports = {
  getPages,
  paginate
};
