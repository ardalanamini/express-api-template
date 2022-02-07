import { API_NAME, API_VERSION } from "#src/config/index";
import { Handler } from "express";

export const CONTROLLER: Handler = (req, res) => {
  res.json({ name: API_NAME, version: API_VERSION });
};
