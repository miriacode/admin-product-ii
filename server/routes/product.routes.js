const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/products", ProductController.create_product);
    app.get("/api/products", ProductController.get_all);
    app.get("/api/products/:id", ProductController.get_product);
}