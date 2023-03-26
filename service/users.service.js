import { client } from "../index.js"

export async function createUsers(data) {
    return await client
        .db("test")
        .collection("users")
        .insertOne(data);
}
export async function getUsersbyName(username) {
    return await client
        .db("test")
        .collection("users")
        .findOne({ username: username });
}