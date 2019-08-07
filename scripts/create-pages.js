const parser = require('fast-xml-parser')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')

const rss = 'https://anchor.fm/s/79d0d08/podcast/rss'

const buildDir = path.resolve(process.cwd(), 'build')
const episodesDir = path.join(buildDir, 'episode')

fs.mkdirSync(episodesDir)

const indexFile = path.join(buildDir, 'index.html')
fs.copyFileSync(indexFile, path.join(buildDir, '404.html'))
const html = fs.readFileSync(indexFile).toString()

const urls = ['https://blankstring.com']

const distribution = [{
  name: 'anchor',
  title: 'Anchor',
  url: 'https://anchor.fm/blank-string'
}, {
  name: 'breaker',
  title: 'Breaker',
  url: 'https://www.breaker.audio/blank-string'
}, {
  name: 'cast-box',
  title: 'Cast Box',
  url: 'https://castbox.fm/channel/id1422683'
}, {
  name: 'google-podcast',
  title: 'Google Podcast',
  url: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy83OWQwZDA4L3BvZGNhc3QvcnNz'
}, {
  name: 'i-tunes',
  title: 'iTunes',
  url: 'https://itunes.apple.com/us/podcast/blank-string/id1267592100?mt=2&uo=4'
}, {
  name: 'overcast',
  title: 'Overcast',
  url: 'https://overcast.fm/itunes1267592100/blank-string'
}, {
  name: 'pocket-cast',
  title: 'Pocket Cast',
  url: 'https://pca.st/X6sO'
}, {
  name: 'podbean',
  title: 'Podbean',
  url: 'https://www.podbean.com/podcast-detail/kaf45-62411/Blank-String-Podcast'
}, {
  name: 'radio-public',
  title: 'Radio Public',
  url: 'https://radiopublic.com/blank-string-WRw9x3'
}, {
  name: 'spotify',
  title: 'Spotify',
  url: 'https://open.spotify.com/show/11RzPwC3hC985sncuGy2Z1'
}, {
  name: 'stitcher',
  title: 'Stitcher',
  url: 'https://www.stitcher.com/podcast/blank-string'
}, {
  name: 'tune-in',
  title: 'Tune In',
  url: 'https://tunein.com/podcasts/Comedy-Podcasts/Blank-String-p1017367'
}]

const generateMetaPage = ({ title, description = 'This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.', link }) => html
  .replace('<meta name="title" content="Blank String">', `<meta name="title" content="${title}">`)
  .replace('<meta property="og:title" content="Blank String">', `<meta property="og:title" content="${title}">`)
  .replace('<meta name="description" content="This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.">', `<meta name="description" content="${description}">`)
  .replace('<meta property="og:description" content="This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.">', `<meta property="og:description" content="${description}">`)
  .replace('<meta property="og:url" content="https://blankstring.com">', `<meta property="og:url" content="${link}">`)

const createEisode = (index, { title, description, link }) => {
  description = description.replace(/\n$/g, '').replace('<p>', '').replace('</p>', '')
  const output = generateMetaPage({ title, description, link })
  const episodeDir = path.join(episodesDir, '' + index)
  if (index !== '') fs.mkdirSync(episodeDir)
  fs.writeFileSync(path.join(episodeDir, 'index.html'), output)
  urls.push(`https://blankstring.com/episode/${index}`)
}

const createEpisodePages = (episodes) => {
  createEisode('', episodes[0])
  let index = episodes.length - 1
  for (const episode of episodes) {
    createEisode(index, episode)
    index -= 1
  }
}

const createPaginationPages = (episodes) => {
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
}

const createDistributionPages = () => {
  const distributionDir = path.join(buildDir, 'distribution')
  fs.mkdirSync(distributionDir)
  for (const { name, title, href } of distribution) {
    const output = generateMetaPage({ title, description: `Listen to Blank String on ${title}`, link: href })
    const dir = path.join(distributionDir, name)
    fs.mkdirSync(dir)
    fs.writeFileSync(path.join(dir, 'index.html'), output)
    urls.push(`https://blankstring.com/distribution/${name}`)
  }
}

const main = async () => {
  const res = await fetch(rss, {
    mode: 'cors'
  })
  const text = await res.text()
  const data = parser.parse(text)
  const episodes = data.rss.channel.item

  createDistributionPages()
  createEpisodePages(episodes)
  createPaginationPages(episodes)

  fs.writeFileSync(path.join(buildDir, 'sitemap.txt'), urls.join('\n'))
}
main()
