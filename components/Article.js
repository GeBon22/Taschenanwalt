import styled from "styled-components";

export default function StyledArticle(props) {
  return <Article>{props.children}</Article>;
}

const Article = styled.article`
  text-align: justify;
  text-align-last: none;
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 1rem;
  white-space: pre-line;
`;
