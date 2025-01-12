
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
export type BrowserSearchPageQueryQueryVariables = Exact<{
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  fullText: Maybe<Scalars['String']>;
  selectedFacets: Maybe<Array<Vtex_SelectedFacetInput> | Vtex_SelectedFacetInput>;
  orderBy?: Maybe<Scalars['String']>;
  hideUnavailableItems?: Maybe<Scalars['Boolean']>;
}>;


export type BrowserSearchPageQueryQuery = { vtex: { productSearch: Maybe<{ recordsFiltered: Maybe<number>, products: Maybe<Array<Maybe<{ productName: Maybe<string>, linkText: Maybe<string>, id: Maybe<string>, items: Maybe<Array<Maybe<{ itemId: Maybe<string>, images: Maybe<Array<Maybe<{ imageUrl: Maybe<string>, imageText: Maybe<string> }>>> }>>> }>>> }>, searchMetadata: Maybe<{ title: Maybe<string>, description: Maybe<string> }>, facets: Maybe<{ breadcrumb: Maybe<Array<Maybe<{ href: Maybe<string>, name: Maybe<string> }>>>, facets: Maybe<Array<Maybe<{ name: Maybe<string>, type: Maybe<Vtex_FilterType>, values: Maybe<Array<Maybe<{ key: Maybe<string>, name: Maybe<string>, value: Maybe<string>, selected: Maybe<boolean>, quantity: number, range: Maybe<{ from: Maybe<number>, to: Maybe<number> }> }>>> }>>> }> } };


// Query Related Code

export const BrowserSearchPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query BrowserSearchPageQuery($from: Int = 0, $to: Int = 11, $fullText: String, $selectedFacets: [VTEX_SelectedFacetInput!], $orderBy: String = \"\", $hideUnavailableItems: Boolean = false) {\n  vtex {\n    productSearch(\n      from: $from\n      to: $to\n      hideUnavailableItems: $hideUnavailableItems\n      simulationBehavior: skip\n      orderBy: $orderBy\n      fullText: $fullText\n      selectedFacets: $selectedFacets\n    ) {\n      products {\n        id: productId\n        productName\n        linkText\n        items {\n          itemId\n          images {\n            imageUrl\n            imageText\n          }\n        }\n      }\n      recordsFiltered\n    }\n    searchMetadata(fullText: $fullText, selectedFacets: $selectedFacets) {\n      title: titleTag\n      description: metaTagDescription\n    }\n    facets(\n      fullText: $fullText\n      selectedFacets: $selectedFacets\n      operator: or\n      behavior: \"Static\"\n      removeHiddenFacets: true\n    ) {\n      breadcrumb {\n        href\n        name\n      }\n      facets {\n        name\n        type\n        values {\n          key\n          name\n          value\n          selected\n          quantity\n          range {\n            from\n            to\n          }\n        }\n      }\n    }\n  }\n}\n",
  sha256Hash: "b53c568d7df1f8cbc49646c23dd3dec3f8e131c29b195218a8985d88cd5a8772",
  operationName: "BrowserSearchPageQuery",
}

