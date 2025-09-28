const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/postedEvents.json");

function readPostedEvents() {
  if (!fs.existsSync(dataPath)) {
    return [];
  }
  
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}

function savePostedEvent(eventId) {
  const events = readPostedEvents();
  events.push(eventId);
  fs.writeFileSync(dataPath, JSON.stringify(events, null, 2));
}

module.exports = { readPostedEvents, savePostedEvent };
