const express = require("express");
const { register, login } = require("../controllers/AuthController");

const {
    getUsersData,
    getUsersDataById,
    updateUsersData,
    deleteUserInfo,
} = require("../controllers/users");

const router = express.Router();

function useRouter(router) {
    router.get("/users", getUsersData);
    router.get("/users/:id", getUsersDataById);
    router.delete("/users/:id", deleteUserInfo);
    router.put("/users/:id", updateUsersData);
    router.post("/register", register);
    router.post("/login", login);
}


module.exports = useRouter;