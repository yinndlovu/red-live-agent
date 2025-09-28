const cron = require("node-cron");
const { getHeadToHead } = require("../services/footballService");
const { postToFacebook } = require("../utils/fbPoster");
const { readPostedEvents, savePostedEvent } = require("../utils/postTracker");

cron.schedule("* * * * *", async () => {
  console.log("Running post job...");
  const matches = await getHeadToHead("33-34");

  for (const match of matches) {
    const eventId = `${match.fixture.id}-score`;

    const postedEvents = readPostedEvents();
    if (postedEvents.includes(eventId)) {
      console.log(`Event ${eventId} already posted, skipping...`);
      continue;
    }

    const message = `⚽ ${match.teams.home.name} ${match.goals.home} - ${match.goals.away} ${match.teams.away.name}`;

    const result = await postToFacebook(message);

    if (result && result.id) {
      savePostedEvent(eventId);
      console.log(`Posted event ${eventId} successfully!`);
    }
  }
});
