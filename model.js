import { AJAX } from "./helpers.JS";

export const shortenUrl = async function (url) {
  const data = await AJAX(`https://api.shrtco.de/v2/shorten?url=${url}`);
  return data.result.full_short_link;
};
