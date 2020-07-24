import sass from "rollup-plugin-sass";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [{
    input: "src/index.js",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
            strict: false
        },
        {
            file: pkg.main_min,
            format: "cjs",
            exports: "named",
            sourcemap: true,
            strict: false,
            plugins: [terser()]
        }
    ],
    external: ["react", "react-dom"],
    plugins: [
        alias({
            entries: [
                { find: "hooks", replacement: "./hooks" },
                { find: "components", replacement: "./components" },
                { find: "renderProps", replacement: "./renderProps" },
                // { find: "react", replacement: __dirname + "/node_modules/react" }
            ]
        }),
        resolve(),
        sass({ insert: true }),
        babel({
            exclude: "node_modules/**",
        }),
        commonjs()
    ]
}, {
    input: "src/index.js",
    output: [
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
            plugins: [terser()]
        },
    ],
    external: ["react", "react-dom"],
    plugins: [
        alias({
            entries: [
                { find: "hooks", replacement: "./hooks" },
                { find: "components", replacement: "./components" },
                { find: "renderProps", replacement: "./renderProps" },
                // { find: "react", replacement: __dirname + "/node_modules/react" }
            ]
        }),
        resolve(),
        sass({ insert: true }),
        babel({
            exclude: "node_modules/**",
        }),
    ]
}];
