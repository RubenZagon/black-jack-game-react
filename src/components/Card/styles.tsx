import styled from "@emotion/styled";

export const BodyCard = styled.div`
  display: inline-block;
  background: white;
  width: 150px;
  height: 220px;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

export const Value = styled.div`
 color: ${props => (props.color === '♥' || props.color ===  '♦')? 'red' : 'black'};
 font-size: 2rem;
`;
