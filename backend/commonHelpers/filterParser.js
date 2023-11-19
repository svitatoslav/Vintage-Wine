const excludedParams = ["perPage", "startPage", "minPrice", "maxPrice", "sort"];

module.exports = function filterParser(filtersQueryString) {

  const mongooseQuery = filtersQueryString.category ? { category: query.category } : {};

  if (filtersQueryString.color) {
    mongooseQuery["characteristics.color"] = filtersQueryString.color;
  }

  if (filtersQueryString.country) {
    mongooseQuery["characteristics.country"] = filtersQueryString.country;
  }

  return Object.keys(filtersQueryString).reduce(
    (mongooseQuery, filterParam) => {
      if (filterParam === "color" || filterParam === "country") {
        return mongooseQuery;
      }

      if (filtersQueryString[filterParam].includes(",")) {
        mongooseQuery[filterParam] = {
          $in: filtersQueryString[filterParam]
            .split(",")
            .map(item => decodeURI(item))
        };
      } else if (!excludedParams.includes(filterParam)) {
        mongooseQuery[filterParam] = decodeURI(filtersQueryString[filterParam]);
      }

      return mongooseQuery;
    },
    mongooseQuery
  );
};
