import styled from "styled-components";

const StyledSubscription = styled.section`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const SubcriptionItem = styled.li`
  img {
    background-color: ${({ color }) => color};
    border-radius: 100%;
    height: 24px;
  }
`;

export { StyledSubscription, SubcriptionItem };
