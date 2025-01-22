import HtmlFieldData from "../components/HtmlFieldData/HtmlFieldData";
import AppendToBodyOptionsWrapper from "../components/AppendToBodyOptionsWrapper/AppendToBodyOptionsWrapper";
import {
  Wrapper,
  OverlayOptionsWrapper,
  InPlaceOptionsWrapper,
} from "../components/Wrapper/styled";
import { SelectionWrapper } from "../components/SelectionWrapper/styled";
import { Selection, Option } from "../components/Item/styled";
import { SelectionList, OptionList } from "../components/ItemList/styled";
import { Search } from "../components/Search/styled";
import { StyledAppendToBodyOptionsWrapper } from "../components/AppendToBodyOptionsWrapper/styled";
import { Expand, Remove, Checkmark } from "../components/svg/svg";
import filterOptions from "./filterOptions";
import massageDataIn from "./massageDataIn";
import massageDataOut from "./massageDataOut";
import selectReducer from "../reducers/selectReducer";
import { MassagedSelectProps } from "./SelectTypes";
import { noop } from "./utils";

let defaultProps: MassagedSelectProps = {
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  name: "",
  className: "",
  selection: [],
  options: [],
  hasSelection: false,
  hierarchicalOptions: [],
  hasOptions: false,
  hasOptionGroups: false,
  singleNoOptions: false,
  placeholder: "Select...",
  multiple: false,
  disabled: false,
  creatable: false,
  removable: true,
  appendToBody: false,
  rightToLeft: false,
  allowDuplicates: true,
  alwaysReturnArray: false,
  optionsAlwaysOpen: false,
  overlayOptions: true,
  searchable: true,
  filterOptions,
  massageDataIn,
  massageDataOut,
  selectReducer,
  valueKey: (item) => item["value"],
  labelKey: (item) => item["label"],
  displayElementKey: (item) => item["displayElement"],
  selectableKey: (item) => item["selectable"],
  optionsKey: (item) => item["options"],
  checkRadioMaxCount: 10,
  truncateOptions: null,
  parseTo: "string",
  massaged: false,

  text_placeholder: "",
  text_noOptions: "No Options",
  text_truncatedShow: "...more",
  text_truncatedHide: "...less",
  text_create: "Create",

  // component_Select: undefined, // These undefined ones are defined in Druthers, must be done there or we'd have circular imports
  // component_CheckRadio: undefined,
  // component_CheckBox: undefined,
  // component_Radio: undefined,
  // component_Switch: undefined,
  component_HtmlFieldData: HtmlFieldData,
  component_Wrapper: Wrapper,
  component_Selection: Selection,
  component_SelectionList: SelectionList,
  component_OptionList: OptionList,
  component_Option: Option,
  component_Search: Search,
  component_SelectionWrapper: SelectionWrapper,
  component_OverlayOptionsWrapper: OverlayOptionsWrapper,
  component_InPlaceOptionsWrapper: InPlaceOptionsWrapper,
  component_AppendToBodyOptionsWrapper: AppendToBodyOptionsWrapper,
  component_StyledAppendToBodyOptionsWrapper: StyledAppendToBodyOptionsWrapper,

  svg_Checkmark: Checkmark,
  svg_Remove: Remove,
  svg_Expand: Expand,

  styles_fontSize: "1em",
  styles_borderRadius: ".2em",
  styles_borderWidth: "1px",
  styles_borderStyle: "solid",
  styles_paddingTop: ".25em",
  styles_paddingBottom: ".25em",
  styles_paddingLeft: ".25em",
  styles_paddingRight: ".25em",
  styles_selection_paddingTop: ".2em",
  styles_selection_paddingBottom: ".2em",
  styles_selection_paddingLeft: ".4em",
  styles_selection_paddingRight: ".4em",
  styles_selection_margin: ".2em",
  styles_option_paddingTop: ".25em",
  styles_option_paddingBottom: ".25em",
  styles_option_paddingLeft: ".25em",
  styles_option_paddingRight: ".25em",
  styles_checkRadio_borderWidth: "2px",
  styles_checkRadio_marginBetween: "1em",
  styles_checkRadio_labelMargin: ".2em",
  styles_checkRadio_paddingTop: ".2em",
  styles_checkRadio_paddingBottom: ".2em",
  styles_checkRadio_paddingLeft: ".2em",
  styles_checkRadio_paddingRight: ".2em",
  styles_search_size: "8",
  styles_icon_width: "1em",
  styles_colors_text: "black",
  styles_colors_primary: "black",
  styles_colors_secondary: "#C3C3C3",
  styles_colors_highlight: "lightblue",
  styles_colors_warning: "#FABAAC",
  styles_colors_warningBold: "#FA2222",
  styles_colors_disabled: "#ECECEC",
  styles_colors_background: "white",
  styles_width: "0",
  styles_multiple: false,
  styles_disabled: false,
  styles_hasSelection: false,
  styles_hasOptions: false,
  styles_optionHighlighted: null,
  styles_selectionHighlighted: null,
  styles_rightToLeft: false,
  styles_optionsAlwaysOpen: false,
  styles_searchable: true,
};

export default defaultProps;
