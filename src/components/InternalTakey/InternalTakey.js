import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import AppPropTypes from '../../utils/AppPropTypes'

let InternalTakey = (props) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [placeholder, setPlacholder] = useState(props.placeholder)
  const [optionHighlighted, setOptionHighlighted] = useState()
  const searchRef = useRef(null)

  let filteredOptions = props.filterOptions(searchText, props.selection, props.options)
  let hasOptions = !!props.options.length

  let onFocus = () => {
    setAreOptionsOpen(true)
    if (hasOptions) setOptionHighlighted(props.options[0].value)

    setPlacholder(!props.multiple && props.selection.length
      ? props.selection[0].label // Set placeholder to current selection on single select
      : props.placeholder)

    setTimeout(() => searchRef.current.focus())
  }
  let onBlur = (e) => {
    setAreOptionsOpen(false)
    setSearchText('')
  }
  let onOptionClick = (e) => {
    let value = e.target.value

    if (props.multiple) {
      value = props.selection.map((option) => option.value)
      value.push(String(e.target.value))
      e.preventDefault() // Keep options open on multi select
    }

    let event = {
      target: {
        value: value,
        name: props.name,
      }
    }

    props.onChange(event)
  }
  let onKeyDown = (e) => {
    if (e.keyCode === 13 && props.creatable) { // Enter Key
      onOptionClick(e)
      setSearchText('')

      if (!props.multiple) e.target.blur() // Close options on single select
    }
  }
  let onRemove = (e) => {
    if (props.removeSelection && e.target.classList.contains('remove')) {
      e.preventDefault() // Prevent click from opening options
      setPlacholder(props.placeholder) // Reset placeholder for single select
      let value = []

      if (props.multiple) {
        value = props.selection.map((option) => option.value)
        value.splice(value.indexOf(String(e.target.value)), 1) // Remove
      }

      let event = {
        target: {
          value: value,
          name: props.name,
        }
      }

      props.onChange(event)
    }
  }
  let onHoverOption = (e) => {
    if (e.target.value && e.target.value !== optionHighlighted) {
      setOptionHighlighted(String(e.target.value))
    }
  }

  let showSelection = props.multiple || !areOptionsOpen // Multiple: always show. Single: show when options are closed
  let showSearch = props.multiple || areOptionsOpen || !props.selection.length // Multiple: always show. Single: show when options are open or when nothing is selected (placeholder should be shown)

  let {
    HtmlFieldData,
    Container,
    Selection,
    SelectionList,
    OptionList,
    Option,
    Search,
    SelectionContainer,
    NoOptions,
  } = props.components

  return <Container styles={props.styles}>
    <HtmlFieldData
      name={props.name}
      itemList={props.selection}
      key='HtmlFieldData' />

    <SelectionContainer key="SelectionContainer" onFocus={onFocus} multiple={props.multiple} hasOptions={hasOptions} styles={props.styles} areOptionsOpen={areOptionsOpen}>
      {showSelection && <SelectionList
        itemList={props.selection}
        onClick={onRemove}
        canRemove={true}
        multiple={props.multiple}
        Item={Selection}
        styles={props.styles} />}
      {showSearch && <Search
        placeholder={placeholder}
        searchText={searchText}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={(e) => setSearchText(e.target.value)}
        ref={searchRef}
        styles={props.styles} />}
    </SelectionContainer>

    {areOptionsOpen && !!filteredOptions.length && <OptionList
      itemList={filteredOptions}
      multiple={props.multiple}
      onClick={onOptionClick}
      onMouseOver={onHoverOption}
      key='OptionList'
      Item={Option}
      optionHighlighted={optionHighlighted}
      styles={props.styles} />}

    {areOptionsOpen && !filteredOptions.length && <NoOptions styles={props.styles}>{props.noOptionsText}</NoOptions>}</Container>
}

InternalTakey.propTypes = {
  name: PropTypes.string.isRequired,
  selection: AppPropTypes.itemList.isRequired,
  options: AppPropTypes.itemList.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  multiple: PropTypes.bool.isRequired,
  creatable: PropTypes.bool.isRequired,

  maxSelectionCount: PropTypes.number.isRequired,
  minSelectionCount: PropTypes.number.isRequired,
  removeSelection: PropTypes.bool,
  searchOptions: PropTypes.bool,
  noOptionsText: PropTypes.string,
  filterOptions: PropTypes.func,

  components: PropTypes.shape({
    HtmlFieldData: AppPropTypes.element.isRequired,
    Container: AppPropTypes.element.isRequired,
    Selection: AppPropTypes.element.isRequired,
    SelectionList: AppPropTypes.element.isRequired,
    OptionList: AppPropTypes.element.isRequired,
    Option: AppPropTypes.element.isRequired,
    Search: AppPropTypes.element.isRequired,
    SelectionContainer: AppPropTypes.element.isRequired,
    NoOptions: AppPropTypes.element.isRequired,
  }).isRequired,

  styles: AppPropTypes.styles.isRequired,
}

export default InternalTakey
