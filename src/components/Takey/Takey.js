import React from 'react'
import HtmlFieldData from '../HtmlFieldData/HtmlFieldData'
import Selected from '../Selected/Selected'
import SingleSelected from '../SingleSelected/SingleSelected'
import MultipleSelected from '../MultipleSelected/MultipleSelected'
import Options from '../Options/Options'
import Option from '../Option/Option'
import PropTypes from 'prop-types'

let Takey = (props) => {
  return [
    <props.components.HtmlFieldData
      name={props.name}
      selected={props.selected}
      key='HtmlFieldData' />,
    <props.components.Selected
      selected={props.selected}
      placeholder={props.placeholder}
      multiple={props.multiple}
      key='Selected'
      components={{
        SingleSelected: props.components.SingleSelected,
        MultipleSelected: props.components.MultipleSelected,
      }} />,
    <props.components.Options
      options={props.options}
      key='Options'
      components={{Option: props.components.Option}} />,
  ]
}

Takey.defaultProps = {
  name: '',
  selected: [],
  options: [],
  placeholder: '',
  multiple: false,
  creatable: false,

  maxSelectedCount: -1,
  minSelectedCount: -1,
  removeSelected: true,
  searchOptions: true,

  components: {
    HtmlFieldData: HtmlFieldData,
    Selected: Selected,
    SingleSelected: SingleSelected,
    MultipleSelected: MultipleSelected,
    Options: Options,
    Option: Option,
  },
}

Takey.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.array,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  creatable: PropTypes.bool,

  maxSelectedCount: PropTypes.number,
  minSelectedCount: PropTypes.number,
  removeSelected: PropTypes.bool,
  searchOptions: PropTypes.bool,

  components: PropTypes.shape({
    HtmlFieldData: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Selected: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    SingleSelected: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    MultipleSelected: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Options: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    Option: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  }),
}

export default Takey
