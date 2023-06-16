import styled from 'styled-components';
export const Container = styled.section`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`
export const Image = styled.img`
  display:block;
  width: 100%;
  height: 120px;
  object-fit:cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-grow: 1;`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
`;

export const RecipeDifficulty = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const BadgeList = styled.div`
display: flex;
gap:8px;`

export const Badge = styled.span`
padding:4px 12px;
border: 1px solid black;
border-radius: 4px;
background-color: ${props => {
  if (!props.isActive) {
    return 'white';
  }
  
  switch (props.value) {
    case 'easy': return 'green';
    case 'medium': return 'blue';
    case 'hard': return 'red';
    default: return 'white'
  }
}};
 color: ${props => {
  return props.isActive ? 'white' : 'black';
  }};
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;

export const Favorite = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  flex-grow: 1;
`;


// export const Badge = styled.span`
// padding:8px 16px;
// border: 1px solid black;
// border-radius: 4px;
// background-color: ${props => {
//     return props.isActive ? 'red' : 'white';
// }};
//   color: ${props => {
//   return props.isActive ? 'white' : 'black';
//   }}
// `;

