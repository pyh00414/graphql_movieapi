const express = require("express");
const graphqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");

const { posts, writers } = require("./sampleDatas.js");

// 받거나, 줄 정보에 대한 설명
const typeDefs = `
type Post{ 
    id: Int!
    title: String!
    description: String!
}

type Writer{
    id: Int!
    name: String!
    posts: [Post]
}
type Query{
    writers: [Writer]
    writer(id: Int!): Writer
    post : [Post]
}
type Mutation{
    addPost(id: Int,title: String, description: String): Boolean
}
`;
const resolvers = {
  Writer: {
    id: obj => obj.id,
    name: obj => obj.name,
    posts: obj => posts.filter(post => obj.posts.includes(post.id))
  },

  Query: {
    writers: () => writers,
    writer: (_, { id }) => writers.find(obj => obj.id === id)
  },

  Mutation: {
    addPost: (_, { id, title, description }) => {
      const post = {
        id,
        title,
        description
      };
      posts.push(post);
    }
  }
};

const schema = makeExecutableSchema({
  //typeDefs와 resolvers를 결합해서 하나의 스키마로 만든다.
  typeDefs,
  resolvers
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000);
