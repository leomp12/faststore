import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import type { FC } from 'react'
import type { PageProps } from 'gatsby'

import { useMetadata } from './useMetadata'
import { useSiteLinksSearchBoxJsonLd } from './useSiteLinksSearchBoxJsonLd'

type Props = PageProps<unknown>

const SEO: FC<Props> = (props) => {
  const metadata = useMetadata(props)
  const siteLinksSearchBox = useSiteLinksSearchBoxJsonLd(props)

  return (
    <>
      <GatsbySeo {...metadata} defer />
      <JsonLd json={siteLinksSearchBox} defer />
    </>
  )
}

export default SEO
