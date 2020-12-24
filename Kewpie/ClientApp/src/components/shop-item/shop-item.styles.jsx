import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ItemContainer = styled.div`
  padding: 8px;
  position: relative;
  display: flex;
  margin: 4px;
  flex-direction: column;
  width: 320px;
  height: 360px;
  border: 1px white solid;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  &:hover {
    button {
      opacity: 0.9;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 4px;
    width: 240px;
  }

  @media (hover: none), (hover: on1-demand) {
    button {
      display: flex;
      min-width: unset;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const ItemInfoContainer = styled.div`
  height: 60%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'n n n n n n p p '
    'd d d d d d d d '
    'd d d d d d d d ';
`;

export const ItemImageContainer = styled.div`
  display: block;
  overflow: hidden;
  height: 100%;
`;

export const ItemImage = styled.img`
  src: ${(props) => props.src};
  width: 320px;
  height: 240px;
  object-fit: fill;
  border-radius: 4px;
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ItemPrice = styled.div`
  display: grid;
  grid-area: p;
  background-color: #b3cbd4a4;
  padding: 0 8px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.div`
  display: grid;
  grid-area: n;
  color: #353131;
  padding: 0 8px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
  border-radius: 4px;
`;

export const ItemDescription = styled.div`
  color: #6d6060;
  grid-area: d;
  margin-top: 1px;
  border-radius: 4px 4px 6px 6px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0 8px;
  border-top: 1px solid black;
  border: 1px solid rgba(255, 255, 255, 0.7);
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled(CustomButton)`
  width: 140px;
  top: 180px;
  position: absolute;
  display: none;
  align-self: center;
`;
