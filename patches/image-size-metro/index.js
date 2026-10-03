const fs = require("fs");
const {
    imageSize: imageSizeNext,
    disableTypes,
    types,
} = require("image-size-next");

function imageSize(input, ...args) {
    if (typeof input === "string") {
        return imageSizeNext(fs.readFileSync(input), ...args);
    }
    return imageSizeNext(input, ...args);
}

module.exports = imageSize;
module.exports.default = imageSize;
module.exports.imageSize = imageSize;
module.exports.disableTypes = disableTypes;
module.exports.types = types;
