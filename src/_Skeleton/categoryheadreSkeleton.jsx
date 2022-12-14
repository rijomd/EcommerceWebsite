import React from 'react'
import ContentLoader from 'react-content-loader'

export const CategoryHeaderSkeleton = ({
  width = 1250,
  // heading = { width: 140, height: 24 },
  row = 1,
  column = 8,
  padding = 6,
  borderRadius = 4,
  ...props
}) => {
  const list = []

  let height

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column

      const x = padding + j * (itemWidth + padding)

      const height1 = itemWidth

      const height2 = 20

      const height3 = 20

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4

      const y1 = padding  + padding * 2 + space * (i - 1)

      const y2 = y1 + padding + height1

      const y3 = y2 + padding / 2 + height2

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
        </>
      )

      if (i === row) {
        height = y3 + height3
      }
    }
  }
let newwidth="100%";
let newheight="100%";

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={newwidth}
      height={newheight}
      {...props}
    >
      {list}
    </ContentLoader>
  )
}


