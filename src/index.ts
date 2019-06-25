interface IRole {
  role_id: number;
  role_name: string;
}

const SALT_ROUNDS: number = 10;
const HEADS: number       = 10;
const HAIRS: number       = 24;
const MAX_HEALTH: number  = 100;
const MIN_HEALTH: number  = 0;
const MAX_HUNGER: number  = 100;
const MIN_HUNGER: number  = 0;
const MAX_THIRST: number  = 100;
const MIN_THIRST: number  = 0;
const HAIR_COLORS: number = 7;
const ROLES: IRole[] = [
  {
    role_id: 1,
    role_name: "banned",
  },
  {
    role_id: 2,
    role_name: "kicked",
  },
  {
    role_id: 3,
    role_name: "user",
  },
  {
    role_id: 4,
    role_name: "moderator",
  },
  {
    role_id: 5,
    role_name: "admin",
  },
];

export default {
  SALT_ROUNDS,
  HEADS,
  HAIRS,
  HAIR_COLORS,
  ROLES,
  MAX_HEALTH,
  MIN_HEALTH,
  MAX_HUNGER,
  MIN_HUNGER,
  MAX_THIRST,
  MIN_THIRST,
}
