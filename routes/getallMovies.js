import { client } from "../index.js";

export async function getallMovies(request) {
    return await client
        .db("test")
        .collection("movies")
        .find(request.query).toArray();
}
