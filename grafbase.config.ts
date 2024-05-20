import { graph, connector, config } from "@grafbase/sdk";

const g = graph.Standalone();

// const petstore = connector.OpenAPI("PetStore", {
//   schema: "https://petstore3.swagger.io/api/v3/openapi.json",
//   url: "https://petstore3.swagger.io/api/v3",
// });
// g.datasource(petstore);

const pg = connector.Postgres("pg", {
  url: "postgresql://neondb_owner:rP3zwFebJsH2@ep-floral-mode-a5i5fub7.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

g.datasource(pg);

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
