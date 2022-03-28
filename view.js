class view {
  _menuIcon = document.querySelector(".menu-icon");
  _workingPic = document.querySelector(".working-pic");
  _navPopup = document.querySelector(".nav-pop-up");
  _searchForm = document.querySelector(".shorten-form");
  _searchField = document.querySelector(".input-url");
  _linksContainer = document.querySelector(".links-container");
  _allCopyBtns = document.querySelector(".btn-copy");

  addHandlerPopUp() {
    this._menuIcon.addEventListener("click", () => {
      this._workingPic.classList.toggle("invisible");
      this._navPopup.classList.toggle("invisible");
    });
  }

  getQueryUrl() {
    const query = this._searchField.value;
    return query;
  }

  _generateMarkup(oldUrl, newUrl) {
    return `
    <div class="links-container">
    <div class="url-tab">
      <p class="url url-og">${oldUrl}</p>
      <hr>
      <p class="url url-new">${newUrl}</p>
      <button class="btn-copy">Copy</button>
    </div>
    `;
  }

  renderNewTab(oldUrl, newUrl) {
    const markUp = this._generateMarkup(oldUrl, newUrl);
    this._linksContainer.insertAdjacentHTML("afterbegin", markUp);
  }

  _copyLink(link) {
    const copyText = link;

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.innerText);
  }

  _changeCopyState(btn) {
    const btns = document.querySelectorAll(".btn-copy");
    for (const btn of btns) {
      btn.innerText = "Copy";
      btn.classList.remove("copied");
    }
    btn.classList.add("copied");
    btn.innerText = "Copied!";
  }

  addHandlerSearch(handler) {
    this._searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerCopyBtn() {
    this._linksContainer.addEventListener("click", (e) => {
      const newUrl = e.target.previousElementSibling;
      this._copyLink(newUrl);
      this._changeCopyState(e.target);
    });
  }
}

export default new view();
