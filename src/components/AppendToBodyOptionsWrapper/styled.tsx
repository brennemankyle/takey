import React from "react";
import styled from "@emotion/styled";
import {
  StyledAppendToBodyOptionsWrapper as RawStyledAppendToBodyOptionsWrapper,
  StyledAppendToBodyOptionsWrapperProps,
} from "./AppendToBodyOptionsWrapper";
import { Styles } from "../../utils/SelectTypes";

const StyledAppendToBodyOptionsWrapper = styled(
  RawStyledAppendToBodyOptionsWrapper
)(
  (props: Styles & StyledAppendToBodyOptionsWrapperProps) => `
  position: absolute;
  background-color: ${props.styles_colors_background};
  width: ${props.styles_width}px;

  ${
    props.placeOptionsAbove
      ? `bottom: ${window.innerHeight - props.parentRect.y}px;
        left: ${props.parentRect.x}px;`
      : `top: ${props.parentRect.y + props.parentRect.height}px;
        left: ${props.parentRect.x}px;`
  }
  ${props.styles_rightToLeft ? `transform: scaleX(-1);` : ``}
  ${!props.styles_hasOptions && !props.styles_multiple ? `display: none;` : ``}
`
);

export { StyledAppendToBodyOptionsWrapper };
