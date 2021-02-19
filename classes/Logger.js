class Logger {
  constructor() {
    this.logs = [];
  }
  log(message = null, type = "success") {
    const timestamp = new Date().toISOString();
    if (type === "success") {
      return console.log(
        "\x1b[34m",
        `${message ? message : "Operation Successful"} - ${timestamp}`
      );
    } else {
      return console.log("\x1b[31m", `Error: ${message} - ${timestamp}`);
    }
  }
}

module.exports = Logger;
