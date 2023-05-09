import { makeAutoObservable } from "mobx";

class Store {
  // userInfo: UserInfo = {
  //   // id: "447f838c-2c90-4853-8ec3-30bd7a6998ac",
  //   // name: "junmooo",
  // };

  // setUserInfo(info: UserInfo) {
  //   this.userInfo = info;
  // }

  edit: boolean = true;

  setEditTrue() {
    this.edit = true;
  }

  setEditFalse() {
    this.edit = false;
  }

  // token: string = "";

  // setToken(token: string) {
  //   this.token = token;
  // }

  theme = "smart-blue";

  nextTheme() {
    const themes = [
      "default",
      "github",
      "vuepress",
      "mk-cute",
      "smart-blue",
      "cyanosis",
    ];
    for (let i = 0; i < themes.length; i++) {
      if (themes[i] === this.theme) {
        if (i < themes.length - 1) {
          this.theme = themes[i + 1];
          return;
        } else {
          this.theme = themes[0];
          return;
        }
      }
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const StoreInstance = new Store();
export default StoreInstance;
