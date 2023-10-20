import React from 'react';

type TGetDisplayValue = {
  value: React.OptionHTMLAttributes<HTMLOptionElement>['value'];
  children: React.ReactNode;
};
type TchildArray = Array<React.ReactElement<{ value: string; children: React.ReactNode }>>;

function checkChildArray(childArray: unknown): childArray is TchildArray {
  if (typeof childArray !== 'object' || !Array.isArray(childArray)) return false;
  if (childArray.every((child) => typeof child === 'object' && child !== null && 'props' in child))
    return true;
  return false;
}

export function getDisplayedValue({ value, children }: TGetDisplayValue) {
  const childArray = React.Children.toArray(children);

  if (!checkChildArray(childArray))
    throw new Error('Os filhos de Select devem ser HTMLtags do tipo option');

  const selectedChild = childArray.find((child) => child && child.props.value === value);

  return selectedChild?.props.children;
}
