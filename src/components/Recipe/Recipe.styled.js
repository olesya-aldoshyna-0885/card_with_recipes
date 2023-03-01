import styled from "styled-components";

export const Container = styled.section`
    border: 1px solid black;
    padding: 8px;
    border-radius: 4px;
`;

export const Image = styled.img`
    display: block;
    width: 220px;
    height: 100%;
    object-fit: cover;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 8px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  /* svg {
    color: red;
  } */
`;

export const RecipeDifficulty = styled.div`
  
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 4px;

  background-color: ${props => {
    return props.isActive ? `orangered` : `white`;
    // console.log(props)
    // return `red`
}
}`;