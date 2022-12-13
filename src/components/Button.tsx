import styled from 'styled-components';

type TButtonProps = {
  btnName: string;
  callback?: () => void;
};

const Button = ({ btnName, callback }: TButtonProps) => {
  return <StyledButton onClick={callback}>{btnName}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  height: 2rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  outline: 0.5px solid ${(props) => props.theme.color.brown};
  outline-offset: 3px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.color.deepOrange};
  }
`;

export default Button;
