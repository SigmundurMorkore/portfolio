const fs = require('fs')
const path = require('path')

const BLOG_POSTS_PATH = path.join(__dirname, '_blog-posts/')
const DEV_TO_BLOG_POSTS_PATH = path.join(__dirname, '_dev-to-blog-posts/')

const imagesRe = /\!\[.*\]\(.*\)/g
const imageRe = /\!\[(.*)\]\(([^ \)]*)(?: '(.*)')?\)/

let parsedFilenames = []

function readFiles() {
  fileNames = fs.readdirSync(BLOG_POSTS_PATH)
  fileNames.forEach(filename => {
    article = fs.readFileSync(BLOG_POSTS_PATH + filename, 'utf-8')
    parsedArticle = article
    let searchImageResult,
      localImagesToReplace = []

    while ((searchImageResult = imagesRe.exec(article))) {
      const [image] = searchImageResult
      const [_, alt = '', uri, title = null] = imageRe.exec(image) || [
        null,
        null,
        null,
        null,
      ]
      if (uri) {
        const basePath = ''
        const assetPath = uri.substr(1)

        localImagesToReplace.push({
          localImage: image,
          remoteImage: `![${alt}](\/${basePath}/${assetPath}${
            title ? ` '${title}'` : ``
          })`,
        })
      }
      parsedArticle = localImagesToReplace.reduce(
        (articleTemp, imageToReplace) =>
          articleTemp.replace(
            imageToReplace.localImage,
            imageToReplace.remoteImage,
          ),
        article,
      )
    }
    parsedFilename = 'static/' + filename
    parsedFilenames.push(parsedFilename)
    fs.writeFileSync(parsedFilename, parsedArticle)
  })
}

function deleteFiles(parsedFilenames) {
  parsedFilenames.forEach(filename => {
    fs.unlinkSync(filename)
  })
}

console.log('Start reading blog posts...')
readFiles()
console.log('Finished reading blog posts!')

console.log('Start running dev-to-git script...')
require('dev-to-git')
console.log('Finished running dev-to-git script')

console.log('Start deleting parsed blog-posts...')
deleteFiles(parsedFilenames)
console.log('Finished deleting parsed blog-posts!')
