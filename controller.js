import view from "./view.js";
import { shortenUrl } from "./model.js";
const controlUrl = async function () {
  const queryUrl = view.getQueryUrl();
  const url = await shortenUrl(queryUrl);
  view.renderNewTab(queryUrl, url);
};
const init = function () {
  view.addHandlerPopUp();
  view.addHandlerSearch(controlUrl);
  view.addHandlerCopyBtn();
};
init();
