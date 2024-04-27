/**
 * Schema for the config file.
 */
export interface Config {
  /**
   * Total score of the task.
   */
  score: number;
  judge: ClassicConfig | InteractiveConfig | SpecialJudgeConfig;
  resourceLimits: ResourceLimits;
}

/**
 * Classic judge configuration.
 */
export type ClassicConfig = ClassicSimpleCasesConfig | ClassicSubtasksConfig;

interface ClassicSimpleCasesConfig {
  judgeType: "classic";
  taskType: "simple";
  /**
   * List of test cases.
   */
  cases: Case[];
}

interface ClassicSubtasksConfig {
  judgeType: "classic";
  taskType: "subtask";
  /**
   * List of subtasks.
   */
  subtasks: Subtask[];
}

/**
 * Interactive judge configuration.
 */
export interface InteractiveConfig {
  judgeType: "interactive";
  /**
   * Path to the interactor code file.
   */
  interactor: string;
}

/**
 * Special judge configuration.
 */
export interface SpecialJudgeConfig {
  judgeType: "special-judge";
  /**
   * Path to the checker code file.
   */
  checker: string;
}

/**
 * Resource limits for the judge.
 */
export interface ResourceLimits {
  /**
   * CPU time limit in ms.
   */
  time: number;
  /**
   * Memory limit in MiB.
   */
  memory: number;
}

export interface Subtask {
  cases: Case[];
  score?: number;
}

export interface Case {
  input: string;
  answer: string;
  score?: number;
}
