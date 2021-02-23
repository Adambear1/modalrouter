const router = require("express").Router();
const Logger = require("../classes/Logger");
const localStorage = require("../classes/LocalStorage");
const { log } = new Logger();

router.get("/api", async (req, res) => {
  try {
    log("Fetching All Data");
    console.log(localStorage.getAll());
    return res.json(await localStorage.getAll());
  } catch (err) {
    // log(message, "Error");
    console.log(err);
    return res.json(log(message, "Error"));
  }
});
router.post("/api/update", ({ body }, res) => {
  try {
    data = body.body;
    log(
      "Updating collection.... Resetting as " +
        JSON.stringify(data) +
        " at local storage"
    );
    var response = localStorage.updateStorage(data);
    return res.json(response);
  } catch ({ message }) {}
});
router.post("/api/clear", ({ body }, res) => {
  try {
    log("Clearing All Data");
    return res.json(localStorage.clearAll());
  } catch ({ message }) {
    log(message, "Error");
    return res.json(log(message, "Error"));
  }
});
router.post("/api", async ({ body }, res) => {
  try {
    data = body.body;
    log("Adding " + JSON.stringify(data) + " to local storage");
    var response = localStorage.setStorage(data);
    return res.json(response);
  } catch ({ message }) {
    log(message, "Error");
    return res.json(log(message, "Error"));
  }
});

module.exports = router;
