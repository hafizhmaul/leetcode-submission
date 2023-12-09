/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let currentValue = map.get(s[i]);
      let incrementedValue = currentValue + 1;
      map.set(s[i], incrementedValue);
    } else {
      map.set(s[i], 1);
    }
  }

  let sortedEntries = [...map.entries()].sort((a, b) => a[1] - b[1]);

  return sortedEntries[0][1] < 2 ? s.indexOf(`${sortedEntries[0][0]}`) : -1;
};