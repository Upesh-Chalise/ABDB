import express, { Router } from "express";
import methods from "../controllers";

const users = (router: Router) => {
  router.post("/create", methods.create);
  router.get("/", methods.getAll);
};

export default users;
