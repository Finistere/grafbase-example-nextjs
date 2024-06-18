import { graph, connector, config } from "@grafbase/sdk";

const g = graph.Standalone();

const petstore = connector.OpenAPI("PetStore", {
  schema: "https://petstore3.swagger.io/api/v3/openapi.json",
  url: "https://petstore3.swagger.io/api/v3",
});
g.datasource(petstore);

export default config({
  graph: g,
  // cache: {
  //   rules: [
  //     {
  //       types: ["Query"],
  //       maxAge: 60,
  //     },
  //   ],
  // },
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
