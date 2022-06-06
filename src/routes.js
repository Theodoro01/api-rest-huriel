const express = require("express");
const app = express();
const router = express.Router();

const VideoController = require("./controllers/VideoController");
const VideoMiddleware = require("./middlewares/VideoMiddleware");

router.get("/", (req, res) => res.json({ ok: true }));
router.get("/videos", VideoController.index);
router.post("/videos", VideoController.store);
router.put("/videos/:id", VideoMiddleware.validateId, VideoController.update);
router.delete("/videos/:id", VideoMiddleware.validateId, VideoController.delete);
router.patch("/videos/:id", VideoMiddleware.validateId, VideoController.updateLike);
//importando variavel
module.exports = router;