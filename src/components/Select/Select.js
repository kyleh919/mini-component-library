import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  & > * {
    padding: 12px 16px;
    border-radius: 8px;
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

const PresentationalSelect = styled.div`
  background: ${COLORS.transparentGray15};

  ${NativeSelect}:focus + & {
    outline: 2px dotted #4374cb;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const ValueDisplay = styled.div`
  padding-right: 24px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        <ValueDisplay>{displayedValue}</ValueDisplay>
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
