const gulp = require("gulp");
// const ts = require("gulp-typescript");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const sourcemaps = require("gulp-sourcemaps");
const tsify = require("tsify");
const minify = require("gulp-babel-minify");

// const tsProject = ts.createProject("tsconfig.json");

gulp.task(
    "default",
    () => {
        return browserify({
                basedir: ".",
                debug: true,
                entries: ["src/index.ts"],
                cache: {},
                packageCache: {},
            })
            .plugin(tsify)
            .transform("babelify", {
                presets: ["es2015"],
                extensions: [".ts"],
            })
            .bundle()
            .pipe(source("bundle.js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(minify({
                mangle: {
                    keepClassName: true
                }
            }))
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest("dist"));
    }
);
