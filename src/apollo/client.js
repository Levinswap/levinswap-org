import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/Levinswap/Levinswap-v2',
  fetch
})

export const blockClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/levinswap/xdai-blocks',
  fetch
})
