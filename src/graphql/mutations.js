/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMigrate = /* GraphQL */ `
  mutation CreateMigrate(
    $input: CreateMigrateInput!
    $condition: ModelMigrateConditionInput
  ) {
    createMigrate(input: $input, condition: $condition) {
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
export const updateMigrate = /* GraphQL */ `
  mutation UpdateMigrate(
    $input: UpdateMigrateInput!
    $condition: ModelMigrateConditionInput
  ) {
    updateMigrate(input: $input, condition: $condition) {
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
export const deleteMigrate = /* GraphQL */ `
  mutation DeleteMigrate(
    $input: DeleteMigrateInput!
    $condition: ModelMigrateConditionInput
  ) {
    deleteMigrate(input: $input, condition: $condition) {
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
