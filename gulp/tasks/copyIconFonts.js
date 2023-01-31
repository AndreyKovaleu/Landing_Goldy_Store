const copyIconFonts = () => {
  return app.gulp.src(app.path.src.iconFonts)
    .pipe(app.gulp.dest(app.path.build.iconFonts))
}

export { copyIconFonts };