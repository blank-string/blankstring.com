/*
* Taken from https://github.com/nygardk/react-share
* Generates the url links
* import {facebook, open} from 'sharer'
* const url = facebook(url, opts)
* open(url, opts)
*/

const objectToGetParams = (object) => '?' + Object.keys(object)
  .filter(key => !!object[key])
  .map(key => `${key}=${encodeURIComponent(object[key])}`)
  .join('&')

export const email = (url, { subject, body, separator }) => 'mailto:' + objectToGetParams({ subject, body: body ? body + separator + url : url })

export const facebook = (url, { quote, hashtag }) => 'https://www.facebook.com/sharer/sharer.php' + objectToGetParams({
  u: url,
  quote,
  hashtag
})

export const instapaper = (url, { title, description }) => 'http://www.instapaper.com/hello2' + objectToGetParams({
  url,
  title,
  description
})

export const line = (url, { title }) => 'https://social-plugins.line.me/lineit/share' + objectToGetParams({
  url,
  text: title
})

export const linkedin = (url) => 'https://linkedin.com/shareArticle' + objectToGetParams({ url })

export const livejournal = (url, { title, description }) => 'https://www.livejournal.com/update.bml' + objectToGetParams({
  subject: title,
  event: description
})

export const mailru = (url, { title, description, image }) => 'https://connect.mail.ru/share' + objectToGetParams({
  url,
  title,
  description,
  imageurl: image
})

export const ok = (url, { title, description, image }) => 'https://connect.ok.ru/offer' + objectToGetParams({
  url,
  title,
  description,
  imageUrl: image
})

export const pinterest = (url, { media, description }) => 'https://pinterest.com/pin/create/button/' + objectToGetParams({
  url,
  media,
  description
})

export const pocket = (url, { title }) => 'https://getpocket.com/save' + objectToGetParams({
  url,
  title
})

export const reddit = (url, { title }) => 'https://www.reddit.com/submit' + objectToGetParams({
  url,
  title
})

export const telegram = (url, { title }) => 'https://telegram.me/share/' + objectToGetParams({
  url,
  text: title
})

export const tumblr = (url, { title, caption, tags, posttype }) => 'https://www.tumblr.com/widgets/share/tool' + objectToGetParams({
  canonicalUrl: url,
  title,
  caption,
  tags,
  posttype
})

export const twitter = (url, { title, via, hashtags = [] }) => 'https://twitter.com/share' + objectToGetParams({
  url,
  text: title,
  via,
  hashtags: hashtags.join(',')
})

export const vk = (url, { title, description, image }) => 'https://vk.com/share.php' + objectToGetParams({
  url,
  title,
  description,
  image
})

export const viber = (url, { title, separator }) => 'viber://forward' + objectToGetParams({
  text: title ? title + separator + url : url
})

export const weibo = (url, { title, image }) => 'http://service.weibo.com/share/share.php' + objectToGetParams({
  url,
  title,
  pic: image
})

const isMobileOrTablet = () => (/(android|iphone|ipad|mobile)/i.test(navigator.userAgent))

export const whatsapp = (url, { title, separator }) => 'https://' + (isMobileOrTablet() ? 'api' : 'web') + '.whatsapp.com/send' + objectToGetParams({
  text: title ? title + separator + url : url
})

export const workplace = (url, { quote, hashtag }) => 'https://work.facebook.com/sharer.php' + objectToGetParams({
  u: url,
  quote,
  hashtag
})
