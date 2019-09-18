var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');


gulp.task('sass', function(){
    return gulp.src('app/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: [
              '>1%',
              'last 4 versions',
              'ie 10'
            ],
            cascade: false
          }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
    return gulp.src('app/images/*')
      .pipe(gulp.dest('dist/images/'));
});

gulp.task('watch', function(){
    gulp.watch('app/*.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));
    gulp.watch('app/*.html', gulp.series('html'));
});


gulp.task('default', gulp.series('sass', 'js', 'html', 'img', 'watch'));