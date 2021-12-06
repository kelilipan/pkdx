import { SharedOptions } from "msw/lib/types/sharedOptions";

if (typeof window === "undefined") {
  const { server } = require("./server");
  server.listen();
} else {
  const { worker } = require("./browser");
  worker.start({ onUnhandledRequest: "bypass" } as SharedOptions);
}
export {};
