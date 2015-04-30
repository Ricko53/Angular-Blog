var gulp = require('gulp');
var uplify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('scripts', function(){
	return gulp.src('src/*.js')
	.pipe(concat('app.min.js'))
	//.pipe(uplify())
	.pipe(gulp.dest('bulid'));
});

gulp.task('css', function(){
	return gulp.src('src/css/*.css')
	.pipe(concat('app.css'))
	//.pipe(uplify())
	.pipe(gulp.dest('bulid'));
});

gulp.task('cpHtml', function() {
  	return gulp.src('src/*.html')
    .pipe(gulp.dest('bulid'));
});

gulp.task('less', function(){
	return gulp.src('src/less/*.less')
	.pipe(less())
	.pipe(concat('less.css'))
	.pipe(gulp.dest('bulid'))
	.on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        });
});

gulp.task('watch',function(){
	gulp.watch('src/*.js',['scripts']);
	gulp.watch('src/css/*.css',['css']);
	gulp.watch('src/*.html',['cpHtml']);
	gulp.watch('src/less/*.less',['less']);
});

gulp.task('default', ['watch', 'scripts', 'css', 'less', 'cpHtml']);