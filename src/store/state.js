import push from "./skills/push";
import pull from "./skills/pull";
import legs from "./skills/legs";
import core from "./skills/core";

export default {
  user: {
    skills: [
      {
        category: "push",
        totalPoints: 0,
        fatigue: 0,
        maxFatigue: 100,
      },
      {
        category: "pull",
        totalPoints: 0,
        fatigue: 0,
        maxFatigue: 100,
      },
      {
        category: "legs",
        totalPoints: 0,
        fatigue: 0,
        maxFatigue: 100,
      },
      {
        category: "core",
        totalPoints: 0,
        fatigue: 0,
        maxFatigue: 100,
      },
    ],
  },
  push,
  pull,
  legs,
  core,
};
