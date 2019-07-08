import React, { useRef } from 'react'
import PropTypes from 'prop-types'

let SelectionContainer = (props) => {
  const searchRef = useRef(null)

  let onFocus = (e) => {
    if (!props.areOptionsOpen) {
      props.onFocus(e)

      searchRef.current.focus()
    } else {
      e.target.blur() // Close if already open options
    }
  }
  let onBlur = (e) => {
    if (e.target.classList.contains('search')) {
      setTimeout(() => { // Call blur after focus event
        props.onBlur(e)
      })
    }
  }
  let onSearchClick = (e) => {
    if (props.areOptionsOpen) {
      // Call blur on search click
      e.preventDefault()
      searchRef.current.blur()
    }
  }

  const Search = React.cloneElement(props.Search, {
    onClick: onSearchClick,
    ref: searchRef,
  })

  return <div
    className={props.className}
    tabIndex={props.styles.disabled ? 'false' : '-1'}
    onFocus={onFocus}
    onBlur={onBlur}>
      {props.SelectionList}
      {Search}
      <span className="divider"></span>
      <img className="expand" src="expand.png" alt="expand" /></div>
}

SelectionContainer.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  areOptionsOpen: PropTypes.bool.isRequired,
}

export default SelectionContainer