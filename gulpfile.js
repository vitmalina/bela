const gulp      = require('gulp')
const fs        = require('fs')
const { exec }  = require("child_process")
const through   = require('through2')
const header    = require('gulp-header')
const iconfont  = require('gulp-iconfont')
const less      = require('gulp-less')
const uglify    = require('gulp-uglify')
const minify    = require("gulp-babel-minify")
const cleanCSS  = require('gulp-clean-css');
var replace     = require('gulp-replace');
const concat    = require('gulp-concat')

var tasks = {

    clean(cb) {
        cb()
    },

    build(cb) {
        gulp.src([
                'libs/w2ui/w2ui.css',
                'popup/main.css',
                'popup/icons/icon-font.css'
            ])
            .pipe(concat('libs.css'))
            .pipe(cleanCSS())
            .pipe(header('/* generated file, do not change */\n'))
            .pipe(gulp.dest('ext/chrome/views/runner/'))

        gulp.src([
                'libs/jquery/jquery-3.5.0.min.js',
                'libs/chai/chai-custom.min.js',
                'libs/minimatch/minimatch.min.js',
                'libs/w2ui/w2utils.js',
                'src/bela.js',
                'src/runner.js',
                'src/steps.js',
                'src/custom.js'
            ])
            .pipe(concat('libs.js'))
            // .pipe(minify())
            .pipe(replace(`/*! from litejs.com / MIT Licence
        https://github.com/litejs/natural-compare-lite/blob/master/index.js */ /*
     * @version    1.4.0
     * @date       2015-10-26
     * @stability  3 - Stable
     * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
     * @license    MIT License
     */`, ''))
            .pipe(header('/* generated file, do not change */\n'))
            .pipe(gulp.dest('ext/chrome/views/runner/'))
            .on('end', () => {
                cb()
            })
    },

    specs(cb) {
        let baseURL = 'http://localhost/bela-tests'
        let manifest = 'specs/bela.json'
        let file
        if (fs.existsSync(manifest)) {
            file = JSON.parse(fs.readFileSync(manifest))
        } else {
            file = { specs: [] }
        }
        file.specs = []
        return gulp.src([
                'specs/**/*.spec.js',
            ])
            .pipe(through.obj((chunk, enc, cb) => {
                file.specs.push(baseURL + chunk.path.substr(process.cwd().length))
                cb(null, chunk)
            }))
            .pipe(concat('manifest.js'))
            .pipe(through.obj((chunk, enc, cb) => {
                fs.writeFileSync(manifest, JSON.stringify(file, null, 4))
                cb()
            }))
    },

    less(cb) {
        // all *.less in each modeule
        return gulp
            .src(['**/*.less', '**/*.less', '!node_modules/**'])
            .pipe(less({ cleancss: true, compress: true }))
            .on('error', function (err) {
                console.log(err.toString())
                this.emit('end')
            })
            .pipe(header('/* generated file, do not change */\n'))
            .pipe(gulp.dest('.'))
    },

    watch: function (cb) {
        gulp.watch('**/*.less', tasks.less)
        gulp.watch('src/**/*.js', tasks.build)
        gulp.watch('specs/**/*.spec.js', tasks.specs)
    }
}

exports.default = gulp.series(tasks.clean, tasks.less)
exports.dev     = tasks.watch
exports.less    = tasks.less
exports.specs   = tasks.specs
exports.build   = gulp.series(tasks.specs, tasks.clean, tasks.less, tasks.build)
