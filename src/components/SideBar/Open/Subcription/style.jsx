import styled from "styled-components";

const StyledSubscription = styled.section`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  h3 {
    padding: 6px 12px 4px !important;
  }
`;

const SubcriptionItem = styled.li`
  img {
    background-color: ${({ color }) => color};
    border-radius: 100%;
    height: 24px;
  }
`;

export { StyledSubscription, SubcriptionItem };
