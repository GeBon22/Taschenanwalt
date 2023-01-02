import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: var(--default-border-radius);
  box-shadow: var(--box-shadow);
  width: 90vw;
  min-height: 70vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: auto;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  scroll-behavior: smooth;
`;

export default PageContainer;
