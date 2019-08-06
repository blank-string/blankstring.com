const parser = require('fast-xml-parser')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

const rss = 'https://anchor.fm/s/79d0d08/podcast/rss'

const buildDir = path.resolve(process.cwd(), 'build')
const episodesDir = path.join(buildDir, 'episode')

fs.mkdirSync(episodesDir)

const indexFile = path.join(buildDir, 'index.html')
const html = fs.readFileSync(indexFile).toString()

const urls = ['https://blankstring.com']

const main = async () => {
  const res = await fetch(rss, {
    mode: 'cors'
  })
  const text = await res.text()
  const data = parser.parse(text)
  const episodes = data.rss.channel.item

  let index = episodes.length - 1
  for (let { title, description, link } of episodes) {
    description = description.replace(/\n$/g, '').replace('<p>', '').replace('</p>', '')
    const output = html
      .replace('<meta name="title" content="Blank String">', `<meta name="title" content="${title}">`)
      .replace('<meta property="og:title" content="Blank String">', `<meta property="og:title" content="${title}">`)
      .replace('<meta name="description" content="This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.">', `<meta name="description" content="${description}">`)
      .replace('<meta property="og:description" content="This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.">', `<meta property="og:description" content="${description}">`)
      .replace('<meta property="og:url" content="https://blankstring.com">', `<meta property="og:url" content="${link}">`)

    const episodeDir = path.join(episodesDir, '' + index)
    fs.mkdirSync(episodeDir)
    fs.writeFileSync(path.join(episodeDir, 'index.html'), output)
    urls.push(`https://blankstring.com/episode/${index}`)
    index -= 1
  }

  urls.push('https://blankstring.com/page')
  const pageDir = path.join(buildDir, 'page')
  fs.mkdirSync(pageDir)
  fs.copyFileSync(indexFile, path.join(pageDir, 'index.html'))

  const pages = Math.ceil(episodes.length / 10)
  for (let i = 1; i < pages; i++) {
    const currentPageDir = path.join(pageDir, '' + i)
    fs.mkdirSync(currentPageDir)
    fs.copyFileSync(indexFile, path.join(currentPageDir, 'index.html'))
    urls.push(`https://blankstring.com/page/${i}`)
  }

  fs.writeFileSync(path.join(buildDir, 'sitemap.txt'), urls.join('\n'))
}
main()
