const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/src/pages/404.js"))),
  "component---src-pages-beers-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/src/pages/beers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/src/pages/order.js"))),
  "component---src-pages-pizzas-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/src/pages/pizzas.js"))),
  "component---src-pages-slicemaster-js": hot(preferDefault(require("/Users/mohammedabbas/Slicks-pizza/gatsby/src/pages/slicemaster.js")))
}
