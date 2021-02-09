// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const DiaryEntries = ({ diaryEntries }) => {
  return (
    <div>
      {diaryEntries.map((diaryEntry) => (
        <div key={diaryEntry.id}>
          <span>{diaryEntry.id}</span>
          <span>{diaryEntry.napsCount}</span>
        </div>
      ))}
    </div>
  )
};

DiaryEntries.defaultProps = {
  diaryEntries: [],
}

DiaryEntries.propTypes = {
  diaryEntries: PropTypes.array,
}

export default DiaryEntries;
