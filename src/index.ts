import path from "path";

import moduleAlias from "module-alias";

const baseDir = process.env.NODE_ENV === "production" ? "dist" : "src";
moduleAlias.addAlias("@", path.resolve(__dirname, "..", baseDir));

console.log(`Welcome to node starter!`);
