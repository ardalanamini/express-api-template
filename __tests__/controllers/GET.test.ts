import { name, version } from "#package.json";
import { http } from "#test";

it("should respond with API name & version", async () => {
  await http()
    .get("/")
    .expect(200)
    .expect({ name, version });
});
