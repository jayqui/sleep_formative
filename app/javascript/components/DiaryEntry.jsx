import React from 'react'
import PropTypes from 'prop-types'

function DiaryEntry({ diaryEntry }) {
  return (
    <div>
      { diaryEntry.napsCount}
    </div>
  )
}

DiaryEntry.propTypes = {

}

export default DiaryEntry

