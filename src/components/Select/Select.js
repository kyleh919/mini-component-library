import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
`;

const NativeSelect = styled.select`
  position: absolute;
  opacity: 0.5;
  height: 100%;
`;

const PresentationalSelect = styled.div`
  background-color: red;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <Icon id="chevron-down" style={{ display: "inline-block" }} />
      </PresentationalSelect>
    </Wrapper>
  );
};

export default Select;
