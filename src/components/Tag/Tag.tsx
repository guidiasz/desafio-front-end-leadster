import React from 'react';
import styled, { css } from 'styled-components';

type TTag = React.ComponentProps<'input'> & {
  name: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  selectedOption: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: Function;
};

const Tag = ({ children, name, selectedOption, value, onChange, onClick, ...props }: TTag) => {
  const buttonID = React.useId();
  // 👇 https://github.com/vercel/next.js/issues/49499#issuecomment-167516066
  const inputRef = React.useRef<HTMLInputElement>(null);
  // ⬇ a ref just to avoid add selectedOption to dependency list
  const selectedOptionRef = React.useRef<TTag['selectedOption']>(selectedOption);
  // ⬆
  React.useEffect(() => {
    const input = inputRef.current;

    if (!input) return;

    if (input.value === selectedOptionRef.current?.toString() && !input.checked) {
      input.checked = true;
    }
  }, []);
  // 👆

  return (
    <li>
      <Radio
        {...props}
        ref={inputRef}
        name={name}
        type="radio"
        id={buttonID}
        value={value}
        checked={selectedOption === value}
        onClick={onClick}
        onChange={onChange}
      />
      <TagLabel htmlFor={buttonID}>{children}</TagLabel>
    </li>
  );
};

const Radio = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const TagLabel = styled.label`
  ${({ theme }) => css`
    border: solid 1px ${theme.colors.text.subdued};
    border-radius: 100vw;
    padding: ${theme.spacing['2xs']} ${theme.spacing.s};
    line-height: ${theme.leading.tight};
    cursor: pointer;
    transition: 0.3s;
    display: inline-block;
    &:hover {
      color: ${theme.colors.link.hover};
      border-color: ${theme.colors.link.hover};
    }
    ${Radio}:focus + & {
      outline: solid 2px ${theme.colors.outline.strong};
    }
    ${Radio}:checked + & {
      color: ${theme.colors.text.invert};
      border-color: ${theme.colors.background.primary};
      background-color: ${theme.colors.background.primary};
    }
  `}
`;

export default Tag;
