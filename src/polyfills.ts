/**
 * Register all polyfills for browsers
 */
import "core-js/es6";
import "core-js/es7/reflect";

Error["stackTraceLimit"] = Infinity;
require("zone.js/dist/zone");

if (app.environment !== "production") {
  // not production
  Error["stackTraceLimit"] = Infinity;
  require("zone.js/dist/long-stack-trace-zone");
}
