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
  background: ${COLORS.transparentGray15};
`;

const ValueDisplay = styled.div`
  padding-right: 24px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
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
