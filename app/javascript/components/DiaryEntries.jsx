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
