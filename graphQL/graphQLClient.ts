import { GraphQLClient } from "graphql-request";

const endpoint =  `https://graphql-pokeapi.graphcdn.app/`;

const graphQLClient = new GraphQLClient(endpoint);

export default graphQLClient;