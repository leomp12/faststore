/** @jsx jsx */
import { Flex, Heading, jsx, Box } from '@vtex/store-ui'
import { FC, lazy } from 'react'

import { SearchPageQueryQuery } from '../../templates/__generated__/SearchPageQuery.graphql'
import MobileSearchFilters from './Filters/Mobile'
import PageList from './PageList'
import Container from '../Container'
import SuspenseDevice from '../SuspenseDevice'
import SEO from '../SEO/siteMetadata'
import Controls from './Controls'

const DesktopSearchFilters = lazy(() => import('./Filters/Desktop'))

interface Props {
  search: SearchPageQueryQuery
}

const SearchTemplate: FC<Props> = ({ search }) => (
  <Container>
    <SEO title={search.vtex.productSearch!.titleTag!} />
    <Flex sx={{ flexDirection: 'column' }} my={4}>
      <Heading sx={{ fontSize: 6 }} as="h2">
        {search.vtex.productSearch!.titleTag}
      </Heading>

      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <aside
          sx={{
            flexGrow: 1,
            flexBasis: 'sidebar',
            width: 230,
          }}
        >
          {/* Desktop Filters */}
          <Box variant="filters.desktop">
            <SuspenseDevice device="desktop" fallback={null}>
              <DesktopSearchFilters
                {...(search.vtex.facets as any)}
                variant="desktop"
              />
            </SuspenseDevice>
          </Box>
        </aside>

        <div
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 300,
            ml: [0, '3rem'],
          }}
        >
          {/* Controls */}
          <Controls data={search} />

          {/* Product List  */}
          <PageList initialData={search} />
        </div>
      </div>
    </Flex>
  </Container>
)

export default SearchTemplate
