import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--primary-background-color);
  color: var(--primary-color);
  box-shadow: var(--box-shadow);
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
  padding-bottom: 1.2rem;
  scroll-behavior: smooth;
`;

export default PageContainer;
