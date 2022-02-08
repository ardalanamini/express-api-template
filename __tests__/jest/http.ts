import server from "#src/server";
import supertest, { SuperTest, Test } from "supertest";

export function http(): SuperTest<Test> {
  return supertest(server);
}
