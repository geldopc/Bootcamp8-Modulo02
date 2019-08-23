import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "hello world geldopc10xxx" });
});

export default routes;
