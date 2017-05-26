module.exports = (hash, init) => {
  if (hash) {
    return Object.keys(hash).reduce((sum, key) => {
      var length = 0
      if (hash[key]) {
        length = hash[key].length
      }

      return length + sum
    }, init || 0)
  }

  return 0
}
