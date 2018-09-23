const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
import axios from "axios";



router
  .route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .delete(articlesController.remove);

	return axios.get("/api/articles", { params: { 
    // api_key: "c26eece03b8b44819878e2226be6b47a", 
    q: query.topic, 
    startDate: query.startDate, 
    endDate: query.endDate,
    }});

module.exports = router;
