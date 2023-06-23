import styled from 'styled-components';
import { variables } from '../../Styles/GlobalStyle';

import { Field} from 'formik';

export const Wrap = styled.div`
text-align: left;
    padding: 28px 20px;
    border-radius: 16px;
    width: 335px;
    background: ${variables.colors.background};

    @media (min-width: 768px) {
        width: 468px;
        padding: 32px;
    }
`;

export const Label = styled.label`
    color: #343434CC;
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: calc((14 / 12) * 100%);
`;

export const Input = styled(Field)`
    resize:  none;
    margin-bottom: 14px;
    width: 295px;
    min-height: 127px;
    font-weight: 600;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
    color: ${variables.colors.text};
    background-color: #F6F6F6;
    border-radius: 8px;
    border: none;
    padding: 12px 0 12px 14px;
    @media (min-width: 768px) {
        width: 404px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 18px;
    }
    &:hover,
    &:focus {
    }

    ::placeholder {
      color: ${variables.colors.text};
      font-weight: 600;
      font-size: 14px;
}
`;

export const FormBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FormBtn = styled.button`
  color: #ffffff;
  background-color: ${variables.colors.primary};
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover, 
  &:focus {
    background-color: ${variables.colors.secondary};
  }
`;

export const FormBtnCancel = styled.button`
  color: ${variables.colors.text};
  background-color: #E5EDFA;
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover, 
  &:focus {
    background-color: ${variables.colors.secondary};
  }
`;

export const WrapForReview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const WrapForEdit = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E3F3FF;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  stroke: #3E85F3;
  cursor: pointer;

  &:hover, 
  &:focus {
    stroke: #ffffff;
    background-color: #3E85F3;
  }
`

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EA3D6533;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  cursor: pointer;
  stroke: #EA3D65;
  &:hover, 
  &:focus {
    stroke: #ffffff;
    background-color: #EA3D65;
  }

`