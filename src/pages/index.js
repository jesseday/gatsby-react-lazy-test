import * as React from "react"
import ContentfulModule from "../components/ContentfulModule"
import OtherComponent from "../components/OtherComponent"

const IndexPage = () => {
  return (
    <main>
      <OtherComponent />
      <ContentfulModule module={{
        type: 'ContentfulQuoteModule',
        title: 'This is a title',
        quote: {
          attribution: 'This is an attribution',
          content: {
            raw: 'Habitant nec ac amet penatibus felis senectus vulputate eleifend varius venenatis ullamcorper elit sed, faucibus morbi nulla iaculis turpis posuere vehicula class sapien litora curae.',
          },
        }
      }} />
    </main>
  )
}

export default IndexPage
