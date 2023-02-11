import styled from "styled-components";

const StyledSubscription = styled.section``;

const SubcriptionItem = styled.li`
  img {
    background-color: ${({ color }) => color};
    border-radius: 100%;
    height: 24px;
  }
`;

export { StyledSubscription, SubcriptionItem };
