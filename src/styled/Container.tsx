import styled from "styled-components";

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
   width: 90%;
   max-width: 1120px;
   margin: 0 auto;
   padding: 1.7rem 0;
`;

export default Container;