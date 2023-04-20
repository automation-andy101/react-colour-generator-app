import React from 'react';


const SingleColour = ({ index, color }) => {
  const { hex, weight } = color;

  return (
    <article className={index > 10 ? 'color-light' : 'color'} style={{ background: `#${hex}` }}>
      <p className='percent-value'>
        {weight}%
      </p>
      <p className='color-value'>
        #{hex}
      </p>
    </article>
  )
}

export default SingleColour;