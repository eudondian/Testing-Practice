const capitalize = (str) => {
    const capStr = str.charAt(0).toUpperCase() + str.slice(1);
    return capStr;
}

module.exports = capitalize