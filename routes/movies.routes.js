import express from "express"
const router = express.Router()
import { client } from "../index.js";
import { getallMovies } from "./getallMovies.js";
import { auth } from "../middleware/auth.js";


router.get("/", async function (request, response) {
    if (request.query.rating) {
        request.query.rating = +request.query.rating
    }


    const movies = await getallMovies(request)
    response.send(movies);

    // const movies = await client
    //     .db("test")
    //     .collection("movies")
    //     .find(request.query).toArray()
    // response.send(movies);

});

router.get("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)

    const movie = await client
        .db("test")
        .collection("movies")
        .findOne({ id: id })

    // const movie = movies.find((mv) => mv.id === id)

    movie ? response.send(movie) : response.status(404).send({ message: "Not found" })
});

// express.json convert body to js object
router.post("/", async function (request, response) {
    const data = request.body
    const result = await client
        .db("test")
        .collection("movies")
        .insertMany(data)
    response.send(result)
});

router.put("/:id", async function (request, response) {
    const { id } = request.params
    const data = request.body
    console.log(id)

    const result = await client
        .db("test")
        .collection("movies")
        .updateOne({ id: id }, { $set: data })

    // const movie = movies.find((mv) => mv.id === id)

    result ? response.send(result) : response.status(404).send({ message: "Not found" })
});

router.delete("/:id", async function (request, response) {
    const { id } = request.params
    const movie = await client
        .db("test")
        .collection("movies")
        .deleteOne({ id: id })

    movie.deletedCount > 0
        ? response.send({ message: "deleted successfully" }) : response.status(404).send({ message: "Not found" })


});

// router.put("/movies", function (request, response) {
//     response.send("START");
// });

export default router





