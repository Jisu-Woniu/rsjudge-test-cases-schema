import * as TOML from "smol-toml";

import type { Config } from "./rsjudge-schema";
import { mkdir } from "fs/promises";

await mkdir("out", { recursive: true });

const simpleConfig: Config = {
  score: 100,
  judge: {
    judgeType: "classic",
    taskType: "simple",
    cases: [
      { input: "1.in", answer: "1.ans" },
      { input: "2.in", answer: "2.ans", score: 60 },
    ],
  },
  resourceLimits: {
    time: 1000,
    memory: 256,
  },
};

await Bun.write(
  Bun.file("out/simple.json"),
  JSON.stringify(simpleConfig, null, 2)
);
await Bun.write(Bun.file("out/simple.toml"), TOML.stringify(simpleConfig));

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

await Bun.write(
  Bun.file("out/subtask.json"),
  JSON.stringify(subtaskConfig, null, 2)
);
await Bun.write(Bun.file("out/subtask.toml"), TOML.stringify(subtaskConfig));

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

await Bun.write(
  Bun.file("out/interactive.json"),
  JSON.stringify(interactiveConfig, null, 2)
);
await Bun.write(
  Bun.file("out/interactive.toml"),
  TOML.stringify(interactiveConfig)
);

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

await Bun.write(
  Bun.file("out/special-judge.json"),
  JSON.stringify(specialJudgeConfig, null, 2)
);
await Bun.write(
  Bun.file("out/special-judge.toml"),
  TOML.stringify(specialJudgeConfig)
);
