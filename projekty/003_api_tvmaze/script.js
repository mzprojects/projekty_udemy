window.onload = function () {
  showApp.init();
};

let showApp = {
  data: null,
  searchInput: null,
  showsDataSection: null,

  init: function () {
    this.showsDataSection = document.querySelector(".data-section");
    this.searchInput = document.getElementById("search-input");
    this.searchInput.addEventListener("input", () => {
      this.loadData(this.searchInput.value);
    });
  },
  loadData: function (q) {
    fetch("https://api.tvmaze.com/search/shows?q=" + q.trim())
      .then((response) => response.json())
      .then((data) => this.dataReady(data));
  },
  dataReady: function (data) {
    console.log(data);
    this.data = data;
    if (this.data.length >= 1) this.generatePage();
  },
  generatePage: function () {
    this.showsDataSection.innerHTML = "";
    let data = this.data;
    for (let i = 0; i < data.length; i++) {
      this.showsDataSection.appendChild(this.addBox(this.generateBoxData(i)));
    }
  },
  generateBoxData: function (i) {
    let d = this.data[i].show;
    let image = d.image ? d.image.medium : "noimage.png";
    return {
      name: d.name,
      image: image,
      overview: d.summary,
      genres: d.genres,
    };
  },
  addBox: function (data) {
    let box = document.createElement("div");
    box.className = "show-box";
    let img = document.createElement("img");
    img.src = data.image;
    let titleBox = document.createElement("div");
    titleBox.className = "show-title";
    titleBox.innerHTML = data.name;
    let genresBox = document.createElement("div");
    genresBox.innerHTML = data.genres;
    genresBox.className = "show-genres";
    let overviewBox = document.createElement("div");
    overviewBox.className = "show-overview";
    overviewBox.innerHTML = data.overview;
    box.appendChild(img);
    box.appendChild(titleBox);
    box.appendChild(genresBox);
    box.appendChild(overviewBox);
    return box;
    // <div class="show-box">
    // <img
    //   src="https://static.tvmaze.com/uploads/images/medium_portrait/41/104550.jpg"
    //   alt=""
    // />
    // <div class="show-title">aaa</div>
    // <div class="show-genres">aaa</div>
    // <div class="show-overview"></div>
  },
};
