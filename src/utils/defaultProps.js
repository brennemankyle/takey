import HtmlFieldData from '../components/HtmlFieldData/HtmlFieldData'
import AppendToBodyOptionsWrapper from '../components/AppendToBodyOptionsWrapper/AppendToBodyOptionsWrapper'
import { Wrapper, Selection, SelectionList, OptionList, Option, Search, SelectionWrapper, OptionWrapper, StyledAppendToBodyOptionsWrapper } from '../components/styledComponents/styledComponents'
import filterOptions from './filterOptions'
import massageData from './massageData'

const noop = () => {}

let defaultProps = {
  onChange: undefined,
  onBlur: noop,
  onFocus: noop,
  name: undefined,
  selection: [],
  options: [],
  placeholder: 'Select...',
  multiple: false,
  disabled: false,
  creatable: false,
  removable: true,
  appendToBody: false,
  rightToLeft: false,
  filterOptions: filterOptions,
  massageData: massageData,
  optionKeys: ['value', 'label'],
  checkRadioMaxCount: 10,

  text: {
    placeholder: '',
    noOptions: 'No Options',
    create: 'Create',
  },

  components: {
    Select: undefined,
    CheckRadio: undefined,
    CheckBox: undefined,
    Radio: undefined,
    HtmlFieldData,
    Wrapper,
    Selection,
    SelectionList,
    OptionList,
    Option,
    Search,
    SelectionWrapper,
    OptionWrapper,
    AppendToBodyOptionsWrapper,
    StyledAppendToBodyOptionsWrapper,
  },

  styles: {
    fontSize: '1em',
    borderRadius: '.2em',
    paddingTop: '.25em',
    paddingBottom: '.25em',
    paddingLeft: '.25em',
    paddingRight: '.25em',
    selection: {
      paddingTop: '.1em',
      paddingBottom: '.1em',
      paddingLeft: '.2em',
      paddingRight: '.2em',
      margin: '.2em',
    },
    option: {
      paddingTop: '.25em',
      paddingBottom: '.25em',
      paddingLeft: '.25em',
      paddingRight: '.25em',
    },
    checkRadio: {
      borderWidth: '2px',
      marginBetween: '1em',
      labelMargin: '.2em',
      paddingTop: '.2em',
      paddingBottom: '.2em',
      paddingLeft: '.2em',
      paddingRight: '.2em',
    },
    search: {
      width: '10em',
    },
    icon: {
      width: '1em',
    },
    colors: {
      primary: 'black',
      secondary: '#C3C3C3',
      highlight: 'lightblue',
      warning: '#CD5C5C',
      disabled: '#ECECEC',
      background: 'white',
    }
  }
}

export default defaultProps
