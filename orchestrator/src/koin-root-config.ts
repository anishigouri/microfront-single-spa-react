import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@koin/buyer",
  app: () => System.import("@koin/buyer"),
  activeWhen: (location) => location.pathname === "/buyer",
});

// registerApplication({
//   name: "@koin/navbar",
//   app: () => System.import("@koin/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
