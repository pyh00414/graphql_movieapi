const posts = [
  {
    id: 1,
    title: "titl1",
    description: "desc1"
  },
  {
    id: 2,
    title: "titl2",
    description: "desc2"
  },
  {
    id: 3,
    title: "titl3",
    description: "desc3"
  },
  {
    id: 4,
    title: "titl4",
    description: "desc4"
  }
];

const writers = [
  {
    id: 1,
    name: "pyh",
    posts: [1, 4]
  },
  {
    id: 2,
    name: "syj",
    posts: [2, 3]
  }
];

module.exports = { writers, posts };
