interface IRole {
  role_id: number;
  role_name: string;
}

interface IStatusRange {
  MIN: number;
  MAX: number;
}

const SALT_ROUNDS: number = 10;
const HEADS: number       = 10;
const HAIRS: number       = 24;
const HEALTH: IStatusRange  = {
  MIN: 0,
  MAX: 100,
};
const HUNGER: IStatusRange  = {
  MIN: 0,
  MAX: 100,
};
const THIRST: IStatusRange  = {
  MIN: 0,
  MAX: 100,
};
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
  HEALTH,
  HUNGER,
  THIRST,
}
