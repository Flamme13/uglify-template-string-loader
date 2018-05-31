module.exports = string =>
  string
    .replace(/(\r\n|\n|\r)/g, '')
    .replace(/^\s+/g, '')
    .replace(/>\s+/g, '>')
    .replace(/\s+</g, '<')
    .replace(/\s{2,}/g, ' ');
