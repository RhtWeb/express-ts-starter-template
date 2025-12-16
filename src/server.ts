import { Config } from "./config/index.js";

function welcome(name: string) {
  const user = {
    firstname: "Rohit",
  };

  const fname = user.firstname;
  console.log(Config.NODE_ENV);
  console.log("welcome" + name + fname);
}

welcome("Rohit");
