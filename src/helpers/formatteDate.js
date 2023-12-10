const formatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});

export const formattedDate = (date) => {
  return formatter.format(new Date(date));
};

const formatterMonthDay = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
});

export const formatedPartsDate = (date) => {
  return formatterMonthDay.formatToParts(new Date(date));
};
