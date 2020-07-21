import currencyFormatter from "currency-formatter";

// Used to replicate hims cart design
// TODO: Refactor checkout to use global grid system
export const createBootstrapColumnWidth = columns => `${(columns / 12) * 100}%`;

export const currency = x => currencyFormatter.format(x / 100, { code: "GBP" });
