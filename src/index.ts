import moduleAlias from "module-alias";
import path from "path";

const baseDir = process.env.NODE_ENV === "production" ? "dist" : "src";
moduleAlias.addAlias("@", path.resolve(__dirname, "..", baseDir));

console.log(`Welcome to node starter!`);
