import styled from "styled-components";

interface GridProps {
   columns?: number;
}

const Grid = styled.div<GridProps>`
   display: grid;
   grid-template-columns: repeat(${props => props.columns ? props.columns : 2}, 1fr);
   grid-gap: .5rem;
`;

export default Grid;