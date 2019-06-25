const SALT_ROUNDS = 10;
const HEADS = 10;
const HAIRS = 24;
const HEALTH = {
    MIN: 0,
    MAX: 100,
};
const HUNGER = {
    MIN: 0,
    MAX: 100,
};
const THIRST = {
    MIN: 0,
    MAX: 100,
};
const HAIR_COLORS = 7;
const ROLES = [
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
};
