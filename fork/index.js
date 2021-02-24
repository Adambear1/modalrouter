const { fork } = require("child_process");

const processes = [
  fork("../server.js", ["3001" || process.env.PORT]),
  fork("../server.js", ["3002" || process.env.PORT]),
  fork("../server.js", ["3003" || process.env.PORT]),
];
