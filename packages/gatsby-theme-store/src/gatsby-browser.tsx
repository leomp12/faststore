// eslint-disable-next-line spaced-comment
/// <reference types="react-dom/experimental" />

import 'requestidlecallback-polyfill'

import React from 'react'
import { UIProvider } from '@vtex/store-sdk'
import { createRoot } from 'react-dom'
import type { WrapRootElementBrowserArgs } from 'gatsby'
import type { ReactChild } from 'react'

import ErrorBoundary from './components/Error/ErrorBoundary'
import { Provider as OrderFormProvider } from './sdk/orderForm/Provider'
import { Provider as VTEXRCProvider } from './sdk/pixel/vtexrc/Provider'
import {
  onRouteUpdate as progressOnRouteUpdate,
  Progress,
} from './sdk/progress'
import { Provider as RegionProvider } from './sdk/region/Provider'
import { Provider as ToastProvider } from './sdk/toast/Provider'

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === 'undefined') {
    await import('intersection-observer')
  }
}

export const replaceHydrateFunction = () => (
  element: ReactChild,
  container: Element,
  callback: any
) => {
  let hydrate = true

  // This part will be removed by webpack on production builds since this only
  // serves for React not complaining about mismatches on devMode.
  // We can not just default to `render` mode on devMode because the user may be using
  // DEV_SSR=true flag
  if (process.env.NODE_ENV !== 'production') {
    const focusEl = document.getElementById(`gatsby-focus-wrapper`)

    hydrate = !!focusEl && focusEl.children.length > 0
  }

  createRoot(container, { hydrate }).render(element)
}

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <ErrorBoundary>
    <VTEXRCProvider>
      <ToastProvider>
        <RegionProvider>
          <OrderFormProvider>
            <UIProvider>{element}</UIProvider>
          </OrderFormProvider>
        </RegionProvider>
      </ToastProvider>
    </VTEXRCProvider>
  </ErrorBoundary>
)

export const onInitialClientRender = () => {
  globalThis.__REACT_HYDRATED__ = true
}

export const wrapPageElement = ({
  element,
  props: { location },
}: WrapRootElementBrowserArgs | any) => (
  <Progress location={location}>{element}</Progress>
)

export const onRouteUpdate = () => {
  progressOnRouteUpdate()
}
