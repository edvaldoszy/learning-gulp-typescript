var gulp = require("gulp");
var watch = require("gulp-watch");
var gulpTypescript = require("gulp-typescript");

gulp.task("compile", function() {
    gulp.src("src/**/*.ts")
        .pipe(gulpTypescript())
        .pipe(gulp.dest("dist/"));
});

gulp.task("dev", function() {
    gulp.start("compile");

    gulp.watch("src/**/*.ts", function(event) {
        console.dir(event);
        console.log("File " + event.path + " was " + event.type + ", running tasks...");
        gulp.start("compile");
    });
});