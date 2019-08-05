/*
* Taken from https://github.com/nygardk/react-share
* Generates the url links
* import {facebook} from 'sharer'
* const url = facebook(url)
*/

const objectToGetParams = (object) => '?' + Object.keys(object)
  .filter(key => typeof object[key] !== 'undefined' && object[key] !== '')
  .map(key => `${key}=${encodeURIComponent(object[key])}`)
  .join('&')

export const email = (url, opts = { subject: '', body: '', separator: '' }) => {
  const { subject, body, separator } = opts
  return 'mailto:' + objectToGetParams({ subject, body: body ? body + separator + url : url })
}

export const facebook = (url, opts = { quote: '' }) => {
  const { quote } = opts
  return 'https://www.facebook.com/sharer/sharer.php' + objectToGetParams({
    u: url,
    quote
  })
}

export const instapaper = (url, opts = { title: '', description: '' }) => {
  const { title, description } = opts
  return 'http://www.instapaper.com/hello2' + objectToGetParams({
    url,
    title,
    description
  })
}

export const line = (url, opts = { title: '' }) => {
  const { title } = opts
  return 'https://social-plugins.line.me/lineit/share' + objectToGetParams({
    url,
    text: title
  })
}

export const linkedin = (url) => 'https://linkedin.com/shareArticle' + objectToGetParams({ url })

export const livejournal = (url, opts = { title: '', description: '' }) => {
  const { title, description } = opts
  return 'https://www.livejournal.com/update.bml' + objectToGetParams({
    subject: title,
    event: description
  })
}

export const mailru = (url, opts = { title: '', description: '', image: '' }) => {
  const { title, description, image } = opts
  return 'https://connect.mail.ru/share' + objectToGetParams({
    url,
    title,
    description,
    imageurl: image
  })
}

export const ok = (url, opts = { title: '', description: '', image: '' }) => {
  const { title, description, image } = opts
  return 'https://connect.ok.ru/offer' + objectToGetParams({
    url,
    title,
    description,
    imageUrl: image
  })
}

export const pinterest = (url, opts = { media: '', description: '' }) => {
  const { media, description } = opts
  return 'https://pinterest.com/pin/create/button/' + objectToGetParams({
    url,
    media,
    description
  })
}

export const pocket = (url, opts = { title: '' }) => {
  const { title } = opts
  return 'https://getpocket.com/save' + objectToGetParams({
    url,
    title
  })
}

export const reddit = (url, opts = { title: '' }) => {
  const { title } = opts
  return 'https://www.reddit.com/submit' + objectToGetParams({
    url,
    title
  })
}

export const telegram = (url, opts = { title: '' }) => {
  const { title } = opts
  return 'https://telegram.me/share/' + objectToGetParams({
    url,
    text: title
  })
}

export const tumblr = (url, opts = { title: '', caption: '', tags: '', posttype: '' }) => {
  const { title, caption, tags, posttype } = opts
  return 'https://www.tumblr.com/widgets/share/tool' + objectToGetParams({
    canonicalUrl: url,
    title,
    caption,
    tags,
    posttype
  })
}

export const twitter = (url, opts = { title: '', via: '', hashtags: [] }) => {
  let { title, via, hashtags } = opts
  hashtags = hashtags || []
  return 'https://twitter.com/share' + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.join(',')
  })
}

export const vk = (url, opts = { title: '', description: '', image: '' }) => {
  const { title, description, image } = opts
  return 'https://vk.com/share.php' + objectToGetParams({
    url,
    title,
    description,
    image
  })
}

export const viber = (url, opts = { title: '', separator: '' }) => {
  const { title, separator } = opts
  return 'viber://forward' + objectToGetParams({
    text: title ? title + separator + url : url
  })
}

export const weibo = (url, opts = { title: '', image: '' }) => {
  const { title, image } = opts
  return 'http://service.weibo.com/share/share.php' + objectToGetParams({
    url,
    title,
    pic: image
  })
}

const isMobileOrTablet = () => (/(android|iphone|ipad|mobile)/i.test(navigator.userAgent))

export const whatsapp = (url, opts = { title: '', separator: '' }) => {
  const { title, separator } = opts
  return 'https://' + (isMobileOrTablet() ? 'api' : 'web') + '.whatsapp.com/send' + objectToGetParams({
    text: title ? title + separator + url : url
  })
}

export const workplace = (url, opts = { quote: '', hashtag: '' }) => {
  const { quote, hashtag } = opts
  return 'https://work.facebook.com/sharer.php' + objectToGetParams({
    u: url,
    quote,
    hashtag
  })
}
