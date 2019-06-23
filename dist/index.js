"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SALT_ROUNDS = 10;
var HEADS = 10;
var HAIRS = 24;
var HAIR_COLORS = 7;
var ROLES = [
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
exports.default = {
    SALT_ROUNDS: SALT_ROUNDS,
    HEADS: HEADS,
    HAIRS: HAIRS,
    HAIR_COLORS: HAIR_COLORS,
    ROLES: ROLES,
};
