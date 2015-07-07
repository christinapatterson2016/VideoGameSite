var gulp = require('gulp');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var mainBowerFiles = require('main-bower-files');

var filterByExtension = function (extension) {
    var re = new RegExp('.' + extension + '$');
    return filter(function (file) {
        return file.path.match(re);
    });
};

gulp.task('third-party', function () {
    var mainFiles = mainBowerFiles();
    if (mainFiles.length > 0) {
        var jsFilter = filterByExtension('js');
        var cssFilter = filterByExtension('css');
        return gulp.src(mainFiles)
            .pipe(jsFilter)
            .pipe(concat('third-party.js'))
            .pipe(gulp.dest('./public/lib'))
            .pipe(jsFilter.restore())
            .pipe(cssFilter)
            .pipe(concat('third-party.css'))
            .pipe(minifyCSS({
                keepSpecialComments: 0
            }))
            .pipe(gulp.dest('./public/lib'));
    }
});

// If these fonts are checked in, then there is no need to run this task.
gulp.task('fonts', function () {
    return gulp.src('bower_components/bootstrap-css-only/fonts/*.{ttf,woff,woff2,eot,svg}')
        .pipe(gulp.dest('./public/fonts'));
});

// Role all of our CSS files into a single webapp.css file.
gulp.task('css', function () {
    // Load our CSS and Less files. Ignore files begining with an
    // underscore since these are partial files that are imported.
    return gulp.src([
            './public/css/*.css',
            './public/less/*.less',
            '!./public/less/_*.less'
        ])
        // Convert Less files to CSS. Look for imports in the
        // less directory.
        .pipe(less({
            paths: ['./public/less']
        }))
        // Concatenate all files into a single CSS file.
        .pipe(concat('webapp.css'))
        // Minify the CSS file.
        .pipe(minifyCSS())
        // Write the file to our destination library.
        .pipe(gulp.dest('./public/lib'));
});

// Take everything in the app folder and create the webapp.js file.
// Modules are added first since everything else depends on them.
gulp.task('app', function () {
    return gulp.src(['public/app/**/*.module.js', 'public/app/**/*.js'])
        .pipe(concat('webapp.js'))
//        .pipe(ngAnnotate())
 //       .pipe(uglify())
        .pipe(gulp.dest('./public/lib'));
});

gulp.task('watch', function () {
    gulp.watch('public/app/**/*.js', ['app']);
    gulp.watch('public/less/*.less', ['css']);
});

gulp.task('default', ['third-party', 'css', 'app']);
