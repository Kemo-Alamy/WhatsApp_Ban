const simple = {
  getUserName: (from) => ({
    full_name: from.first_name + (from.last_name ? " " + from.last_name : ""),
    username: from.username || ""
  }),
  range: (start, end, step = 1) => {
    let arr = [];
    for (let i = start; i < end; i += step) arr.push(i);
    return arr;
  }
};
module.exports = { simple };