import { castArray } from './essentialLodash'

let massageData = (props) => {
  let { selection, options, placeholder, ...otherProps } = props

  // Stringify
  selection = castArray(selection).map((value) => String(value))
  options = options.map((option) => ({value: String(option[props.optionKeys[0]]), label: String(option[props.optionKeys[1]])}))

  // Objectify
  let massagedSelection = selection.map((value) => {
    let option = options.find((option) => option.value === value)

    return option == null ? {value: value, label: value} : option
  })

  placeholder = otherProps.text_placeholder ? otherProps.text_placeholder : placeholder

  return {
    ...otherProps,
    selection: massagedSelection,
    options,
    text_placeholder: placeholder,
  }
}

export default massageData
