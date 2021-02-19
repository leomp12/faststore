
/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */

// Base Types
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type Maybe<T> = T | null | undefined
type Scalars = {
  Boolean: boolean
  String: string
  Float: number
  Int: number
  ID: string
}

// Operation related types
export type AutocompleteSuggestionsQueryQueryVariables = Exact<{
  fullText: Scalars['String'];
}>;


export type AutocompleteSuggestionsQueryQuery = { vtex: { autocompleteSearchSuggestions: Maybe<{ searches: Maybe<Array<Maybe<{ term: string, key: string }>>> }> } };


// Query Related Code

export const AutocompleteSuggestionsQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query AutocompleteSuggestionsQuery($fullText: String!) {\n  vtex {\n    autocompleteSearchSuggestions(fullText: $fullText) {\n      searches {\n        term\n        key: term\n      }\n    }\n  }\n}\n",
  sha256Hash: "85174d418018b5219606c7121dba3623fea4807351ebf07da5fad79455173646",
  operationName: "AutocompleteSuggestionsQuery",
}

