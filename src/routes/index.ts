import { Router } from "express";

import * as pageControllers from "../controllers/pageControllers"
import * as searchControllers from "../controllers/searchControllers"

const router = Router()
.get("/", pageControllers.home)
.get("/dogs", pageControllers.dogs)
.get("/cats", pageControllers.cats)
.get("/fishes", pageControllers.fishes)

.get("/search", searchControllers.searchBar)

export default router;

