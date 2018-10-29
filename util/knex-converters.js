module.exports = {
  camelToSnake: identifier =>
    identifier.replace(/([A-Z])/g, match => `_${match[0].toLowerCase()}`),
  snakeToCamel: row => {
    if (typeof row !== 'object' || row === null) return row
    return Object.keys(row).reduce((accumulator, identifier) => {
      const newChar = identifier.replace(/_\w/g, match => match[1].toUpperCase())
      accumulator[newChar] = row[identifier]
      return accumulator
    }, {})
  }
}