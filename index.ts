import { mkdirSync, writeFileSync } from "fs";

import type { Config } from "./rsjudge-schema";
import { stringify } from "smol-toml";

mkdirSync("out", { recursive: true });

const simpleConfig: Config = {
  score: 100,
  judge: {
    judgeType: "classic",
    taskType: "simple",
    cases: [
      { input: "1.in", answer: "1.ans" },
      { input: "2.in", answer: "2.ans" },
    ],
  },
  resourceLimits: {
    time: 1000,
    memory: 256,
  },
};

writeFileSync("out/simple.json", JSON.stringify(simpleConfig, null, 2));
writeFileSync("out/simple.toml", stringify(simpleConfig));

const subtaskConfig: Config = {
  score: 100,
  judge: {
    judgeType: "classic",
    taskType: "subtask",
    subtasks: [
      {
        cases: [
          { input: "1.in", answer: "1.ans" },
          { input: "2.in", answer: "2.ans" },
        ],
        score: 40,
      },
      {
        cases: [
          { input: "3.in", answer: "3.ans" },
          { input: "4.in", answer: "4.ans" },
        ],
        score: 60,
      },
    ],
  },
  resourceLimits: {
    time: 1000,
    memory: 256,
  },
};

writeFileSync("out/subtask.json", JSON.stringify(subtaskConfig, null, 2));
writeFileSync("out/subtask.toml", stringify(subtaskConfig));

const interactiveConfig: Config = {
  score: 100,
  judge: {
    judgeType: "interactive",
    interactor: "interactor.cpp",
  },
  resourceLimits: {
    time: 1000,
    memory: 256,
  },
};

writeFileSync(
  "out/interactive.json",
  JSON.stringify(interactiveConfig, null, 2)
);
writeFileSync("out/interactive.toml", stringify(interactiveConfig));

const specialJudgeConfig: Config = {
  score: 100,
  judge: {
    judgeType: "special-judge",
    checker: "checker.cpp",
  },
  resourceLimits: {
    time: 1000,
    memory: 256,
  },
};

writeFileSync(
  "out/special-judge.json",
  JSON.stringify(specialJudgeConfig, null, 2)
);
writeFileSync("out/special-judge.toml", stringify(specialJudgeConfig));
