module.exports = source => {
    return source.replace(/(?:(?:=)|(?:=>)|(?:return))(?:\s*\()?\s*`([\d|\D]*?)`/g, (match, $1) => {
        return match.replace($1, $1.replace(/(\r\n|\n|\r)/g, '')
                                   .replace(/>\s+/g, '>')
                                   .replace(/\s+</g, '<')
                                   .replace(/\s{2,}/g, ' '));
    });
};
