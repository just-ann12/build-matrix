import { nanoid } from "nanoid";

export const newValue = () => ({
  id: nanoid(),
  value: Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1)),
});
