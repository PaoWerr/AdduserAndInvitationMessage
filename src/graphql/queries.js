/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMigrate = /* GraphQL */ `
  query GetMigrate($id: ID!) {
    getMigrate(id: $id) {
      id
      task
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMigrates = /* GraphQL */ `
  query ListMigrates(
    $filter: ModelMigrateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMigrates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        task
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMigrates = /* GraphQL */ `
  query SyncMigrates(
    $filter: ModelMigrateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMigrates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        task
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
