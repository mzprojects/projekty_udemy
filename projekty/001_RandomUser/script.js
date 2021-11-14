window.onload = function () {
  userApp.loadData();
};

let userApp = {
  data: null,
  userNum: 0,
  userTitle: null,
  userName: null,
  userEmail: null,
  userLogin: null,
  userPic: null,

  loadData: function () {
    fetch("https://randomuser.me/api/?results=100")
      .then((results) => results.json())
      .then((data) => this.dataReady(data));
  },
  dataReady: function (data) {
    console.log(data);
    userApp.data = data.results;
    this.userTitle = document.getElementsByTagName("h2")[0];
    this.userName = document.getElementsByClassName("full-name")[0];
    this.userEmail = document.getElementsByClassName("email")[0];
    this.userLogin = document.getElementsByClassName("username")[0];
    this.userPic = document.getElementsByTagName("img")[0];
    this.setData();

    document.addEventListener("keydown", function (e) {
      switch (e.code) {
        case "ArrowLeft": {
          userApp.prevUser();
          break;
        }
        case "ArrowRight": {
          userApp.nextUser();
          break;
        }
        default: {
          break;
        }
      }
    });
  },
  nextUser: function () {
    this.userNum++;
    if (this.userNum >= this.data.length) this.userNum = 0;
    this.setData();
  },
  prevUser: function () {
    this.userNum--;
    if (this.userNum <= 1) this.userNum = 99;
    this.setData();
  },
  setData: function () {
    let x = this.data[this.userNum];
    let y = this.userNum + 1;
    this.userTitle.innerHTML = "RandomUser #" + y;
    this.userName.innerHTML = x.name.first + " " + x.name.last;
    this.userEmail.innerHTML = x.email;
    this.userLogin.innerHTML = "@" + x.login.username;
    this.userPic.src = x.picture.large;
  },
};
