const { cache } = require("../cache/cacheService");

exports.getCacheStats = async (req, res) => {
  try {
    const stats = await cache.getStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.clearCache = async (req, res) => {
  try {
    await cache.cleanup();
    res.json({ message: "Cache cleared successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCacheKey = async (req, res) => {
  try {
    const success = await cache.delete(req.params.key);
    if (success) {
      res.json({ message: `Cache entry ${req.params.key} deleted` });
    } else {
      res.status(404).json({ error: "Cache entry not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
