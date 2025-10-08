const { PostedEvent } = require("../models");

async function isEventPosted(matchId, eventType) {
  try {
    const event = await PostedEvent.findOne({
      where: {
        matchId,
        eventType,
      },
    });
    return !!event;
  } catch (error) {
    console.error("Error checking if event is posted:", error);
    return false;
  }
}

async function savePostedEvent(matchId, eventType, eventData = null) {
  try {
    const [event, created] = await PostedEvent.findOrCreate({
      where: {
        matchId,
        eventType,
      },
      defaults: {
        eventData,
        postedAt: new Date(),
      },
    });

    if (created) {
      console.log(`Event ${eventType} for match ${matchId} saved successfully`);
      return true;
    } else {
      console.log(`Event ${eventType} for match ${matchId} already exists`);
      return false;
    }
  } catch (error) {
    console.error("Error saving posted event:", error);
    return false;
  }
}

async function getPostedEvents(matchId) {
  try {
    const events = await PostedEvent.findAll({
      where: { matchId },
      order: [["postedAt", "ASC"]],
    });
    return events;
  } catch (error) {
    console.error("Error getting posted events:", error);
    return [];
  }
}

module.exports = {
  isEventPosted,
  savePostedEvent,
  getPostedEvents,
};
