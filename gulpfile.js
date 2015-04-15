var gulp = require('gulp');
var uplify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
	gulp.src('src/*.js')
	.pipe(concat('app.min.js'))
	//.pipe(uplify())
	.pipe(gulp.dest('bulid'));
});

gulp.task('css', function(){
	gulp.src('src/css/*.css')
	.pipe(concat('app.css'))
	//.pipe(uplify())
	.pipe(gulp.dest('bulid'));
});

gulp.task('watch',function(){
	gulp.watch('src/*.js',['scripts']);
	gulp.watch('src/css/*.css',['css']);
});

gulp.task('default', ['watch', 'scripts','css']);