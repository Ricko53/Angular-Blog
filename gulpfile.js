var gulp = require('gulp');
var uplify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	gulp.src('src/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uplify())
	.pipe(gulp.dest('bulid'));
});

gulp.task('watch',function(){
	gulp.watch('src/*.js',['scripts']);
})