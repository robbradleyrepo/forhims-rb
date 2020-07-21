import removeMd from "remove-markdown";

import utils from "./misc";

const { hasValue } = utils;

export const shortenString = ({ string, limit, separator = " " }) =>
  hasValue(string)
    ? string.length <= limit
      ? string
      : `${string.substr(0, string.lastIndexOf(separator, limit))} …`
    : "";

export const stripMarkdown = string =>
  hasValue(string) ? removeMd(string) : "";

/**
 * Slugifies a string and replaces special characters
 *
 * @author Max Barry <mbarry@forhims.com>
 *
 * @see {@link https://gist.github.com/mathewbyrne/1280286#gistcomment-2674194}
 *
 * @param {string} text Text that you want to slugify
 * @param {string} separator Optional seperator
 */
export const slugify = (text, separator = "-") => {
  text = text
    .toString()
    .toLowerCase()
    .trim();

  const sets = [
    { to: "a", from: "[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]" },
    { to: "c", from: "[ÇĆĈČ]" },
    { to: "d", from: "[ÐĎĐÞ]" },
    { to: "e", from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]" },
    { to: "g", from: "[ĜĞĢǴ]" },
    { to: "h", from: "[ĤḦ]" },
    { to: "i", from: "[ÌÍÎÏĨĪĮİỈỊ]" },
    { to: "j", from: "[Ĵ]" },
    { to: "ij", from: "[Ĳ]" },
    { to: "k", from: "[Ķ]" },
    { to: "l", from: "[ĹĻĽŁ]" },
    { to: "m", from: "[Ḿ]" },
    { to: "n", from: "[ÑŃŅŇ]" },
    { to: "o", from: "[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]" },
    { to: "oe", from: "[Œ]" },
    { to: "p", from: "[ṕ]" },
    { to: "r", from: "[ŔŖŘ]" },
    { to: "s", from: "[ßŚŜŞŠ]" },
    { to: "t", from: "[ŢŤ]" },
    { to: "u", from: "[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]" },
    { to: "w", from: "[ẂŴẀẄ]" },
    { to: "x", from: "[ẍ]" },
    { to: "y", from: "[ÝŶŸỲỴỶỸ]" },
    { to: "z", from: "[ŹŻŽ]" },
    { to: "-", from: "[·/_,:;']" }
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from, "gi"), set.to);
  });

  text = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, separator) // Replace spaces with -
    .replace(/&/g, `${separator}and${separator}`) // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\--+/g, separator) // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

  return text;
};
