import React from 'react'

const SearchItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <div className='SearchItemTemplateCont'>
      <div
        className='group '
        onClick={() => window.open(data.link)}>
        <div className='sites-url'>
          {data.formattedUrl}
        </div>
        <div className='site-title'>
          {data.title}
        </div>
        <div className='site-description'
          dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
        />
      </div>
    </div>
  )
}

export default SearchItemTemplate