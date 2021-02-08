// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const DiaryEntries = props => (
  <div>
    {props.diaryEntries.map((datum) => (
      <span key={datum.id}>{datum.id}</span>
    ))}
  </div>
)

DiaryEntries.defaultProps = {
  diaryEntries: {},
}

DiaryEntries.propTypes = {
  diaryEntries: PropTypes.array,
}

document.addEventListener('DOMContentLoaded', () => {
  // Got this half-reasonable idea from https://learnetto.com/blog/rails-data-react-component-webpacker
  // For the future, probably better to rely on one of webpacker-react, react-on-rails, or react-rails
  const node = document.getElementById('diary_entries');
  const diaryEntries = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <DiaryEntries diaryEntries={diaryEntries} />,
    document.body.appendChild(document.createElement('div')),
  )
})
