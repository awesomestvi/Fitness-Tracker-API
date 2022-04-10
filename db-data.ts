export const EXERCISES: any = {
  1: {
    id: 1,
    name: "Lunges",
    iconName: "lunges",
    seqNo: 1,
    calories: 4,
    duration: 30,
  },

  2: {
    id: 2,
    name: "Side Lunges",
    iconName: "side-lunges",
    seqNo: 2,
    calories: 4,
    duration: 30,
  },

  3: {
    id: 3,
    name: "Burpees",
    iconName: "burpees",
    seqNo: 3,
    calories: 8,
    duration: 60,
  },

  4: {
    id: 4,
    name: "High Knees",
    iconName: "high-knees",
    seqNo: 4,
    calories: 6,
    duration: 45,
  },

  5: {
    id: 5,
    name: "Squats",
    iconName: "squats",
    seqNo: 5,
    calories: 5,
    duration: 60,
  },

  6: {
    id: 6,
    name: "Pistol Squats",
    iconName: "pistol-squats",
    seqNo: 6,
    calories: 6,
    duration: 30,
  },

  7: {
    id: 7,
    name: "Dips",
    iconName: "dips",
    seqNo: 7,
    calories: 6,
    duration: 60,
  },

  8: {
    id: 8,
    name: "Jumping Jacks",
    iconName: "jumping-jacks",
    seqNo: 8,
    calories: 6,
    duration: 60,
  },

  9: {
    id: 9,
    name: "Mountain Climbers",
    iconName: "mountain-climber",
    seqNo: 9,
    calories: 5,
    duration: 30,
  },

  10: {
    id: 10,
    name: "Situps",
    iconName: "sit-ups",
    seqNo: 10,
    calories: 3,
    duration: 30,
  },

  11: {
    id: 11,
    name: "Pushups",
    iconName: "push-ups",
    seqNo: 11,
    calories: 2,
    duration: 30,
  },

  12: {
    id: 12,
    name: "Treadmill",
    iconName: "treadmill",
    seqNo: 12,
    calories: 4,
    duration: 240,
  },

  13: {
    id: 13,
    name: "Cycling",
    iconName: "cycling",
    seqNo: 13,
    calories: 4,
    duration: 180,
  },
};

export const FINISHED_EXERCISES: any = {};

export function findExerciseById(exerciseId: number) {
  return EXERCISES[exerciseId];
}
