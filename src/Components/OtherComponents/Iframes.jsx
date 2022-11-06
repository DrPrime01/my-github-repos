import React from 'react'

function Iframes({homepageLink}) {
  return (
    <div>
      <a href={homepageLink}>
        <iframe src={homepageLink} height={400} width={600}></iframe>
      </a>
    </div>
  )
}

export default Iframes
