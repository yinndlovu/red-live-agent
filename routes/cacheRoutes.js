const express = require("express");
const {
  getCacheStats,
  clearCache,
  deleteCacheKey,
} = require("../controllers/cacheController");

const router = express.Router();

router.get("/stats", getCacheStats);
router.delete("/clear", clearCache);
router.delete("/:key", deleteCacheKey);

module.exports = router;
