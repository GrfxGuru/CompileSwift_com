const path = require("path")
const jimp = require("jimp")
module.exports = ({ markdownNode }) => {
  const { frontmatter, fields } = markdownNode
  const output = path.join("./public", fields.slug, "seo.jpg")

  return Promise.all([
    jimp.read(path.join(__dirname, "base.jpg")),
    jimp.loadFont(jimp.FONT_SANS_128_BLACK),
  ]).then(([image, font]) => {
    image
      .resize(WIDTH, HEIGHT)
      .print(font, 10, 10, frontmatter.title)
      .write(output)
  })
}

module.exports = ({ markdownNode }) => {
  const { frontmatter, fields } = markdownNode
  const output = path.join("./public", fields.slug, "seo.jpg")

  console.log(frontmatter, fields)

  return
}
