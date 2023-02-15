import * as React from "react"
import ContentfulModule from "../components/ContentfulModule"

const text = "Curae pretium sapien fermentum mauris mi netus nulla aptent mollis viverra montes tempor, primis tincidunt vulputate lobortis cursus ante sit molestie pellentesque posuere. Morbi placerat cubilia magna imperdiet ultrices mattis pellentesque fringilla fames suspendisse vitae, aliquet feugiat hac ipsum fermentum molestie class orci turpis. Tortor curabitur turpis torquent justo pellentesque penatibus sollicitudin tellus conubia cursus, etiam dis accumsan nisi dictumst interdum sapien efficitur maecenas, nunc taciti laoreet semper aliquam proin pharetra rutrum senectus. Nisl"
const AboutPage = () => {
  return (
    <main>
      <ContentfulModule module={{
        type: 'ContentfulTextModule',
        text,
        id: 'thisisanid'
      }} />
    </main>
  )
}

export default AboutPage
