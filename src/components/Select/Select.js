import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

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
  /* background-color: red; */
  background: ${COLORS.transparentGray15};
`;

const ValueDisplay = styled.div`
  display: inline-block;
  vertical-align: super;
  margin-right: 24px;
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
        <Icon id="chevron-down" style={{ display: "inline-block" }} />
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
