// 👇 baseado em: https://gist.github.com/ramirezsandin/cc93f6a405ff818e48038e28a26a1ba0
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

type Toptions = {
  method?: 'push' | 'replace';
  scroll?: boolean;
  fragment?: string;
};

type TValue = string | number | boolean;

const useRouterParams = ({ method, scroll = false, fragment }: Toptions = {}) => {
  const { back, push, replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reload = method === 'replace' ? replace : push;
  const hash = fragment ? (fragment[0] === '#' ? fragment : '#' + fragment) : '';

  function changeUrl(params: URLSearchParams) {
    const queryStr = pathname + '?' + params.toString() + hash;
    reload(queryStr, { scroll });
  }
  /**
   * Checks whether a param is exposed in the URL string or not.
   * @param name The name of the param.
   * @param value Optional, the param must have the specified value.
   * @returns true/false depending on the presence of the param.
   */
  function hasParam(name: string, value?: TValue) {
    const param = searchParams.getAll(name);
    if (param.length === 0) {
      return false;
    }
    if (!value) {
      return true;
    }
    return param.includes(value.toString());
  }

  /**
   *  Retrieves from the URL the value of the provided param.
   * @param name The name of the param.
   * @returns The value of the param.
   */
  const getParamValue = React.useCallback(
    (name: string) => {
      const value = searchParams.getAll(name);
      if (value.length === 0) return null;
      if (value.length === 1) return value[0];
      return value;
    },
    [searchParams],
  );

  /**
   * Adds a query param to the URL string. Multiple params with the same name
   * and different values can be added.
   * @param name The name of the param.
   * @param value The value of the param.
   */
  function addParam(name: string, value: TValue) {
    const valueStr = value.toString();
    const paramEntries = searchParams.getAll(name);
    if (paramEntries.includes(valueStr)) return;

    const newParams = new URLSearchParams(searchParams);
    newParams.append(name, valueStr);
    changeUrl(newParams);
  }

  /**
   * Sets multiple query params in the URL based on the provided array. If a param already exists,
   * it will be overridden. The function allows for setting both single and multiple values for each param.
   *
   * @param paramsArr An array of objects, each containing the name of the param and its value(s).
   *        - name: The name of the param.
   *        - value: The value of the param, which can be a single value or an array of values.
   */

  type TParamsArr = Array<{
    name: string;
    value: TValue | string[] | boolean[] | number[];
  }>;
  function setMultipleParams(paramsArr: TParamsArr) {
    const newParams = new URLSearchParams(searchParams);
    paramsArr.forEach(({ name, value }) => {
      newParams.delete(name);
      if (Array.isArray(value)) {
        value.forEach((item) => {
          newParams.append(name, item.toString());
        });
      } else {
        newParams.append(name, value.toString());
      }
    });

    changeUrl(newParams);
  }
  /**
   * It sets a query param in the URL to a given value. If it already exists, it
   * will be overriden.
   * @param name The name of the param.
   * @param value The value of the param, it can be single or multiple values.
   */
  function setParam(
    name: string,
    value: TValue | string[] | boolean[] | number[],
    getUrl: boolean = false,
  ) {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(name);

    if (Array.isArray(value)) {
      value.forEach((item) => {
        newParams.append(name, item.toString());
      });
    } else {
      newParams.append(name, value.toString());
    }
    if (getUrl) return '?' + newParams.toString() + hash;
    changeUrl(newParams);
  }

  /**
   * If no argument is passed, it clears all the query params from the URL.
   * If one or more params are passed as arguments, only those will be cleared
   * from the URL.
   * @param params one or more params to remove.
   */
  function clearParams(...params: string[]) {
    // Clear all params
    if (!params.length) {
      const newParams = new URLSearchParams();
      changeUrl(newParams);

      return;
    }
    // Clear the given params
    const newParams = new URLSearchParams(searchParams);

    params.forEach((param) => {
      newParams.delete(param);
    });

    changeUrl(newParams);
  }

  /**
   * Removes the provided params with a specific value from the URL.
   * @param name The name of the param.
   * @param value The value of the param.
   */
  function removeParam(name: string, value?: TValue) {
    if (!value) {
      clearParams(name);
      return;
    }
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(name, value.toString());

    changeUrl(newParams);
  }

  /**
   * Adds the query param to the URL if it's not already there or removes it
   * otherwise.
   * @param name The name of the param.
   * @param value The value of the param.
   */
  function toggleParam(name: string, value: TValue) {
    const newParams = new URLSearchParams(searchParams);
    const valueStr = value.toString();

    if (newParams.getAll(name).includes(valueStr)) {
      newParams.delete(name, valueStr);
    } else {
      newParams.append(name, valueStr);
    }
    changeUrl(newParams);
  }

  /**
   * Navigate to the previous history entry
   */
  function routerBack() {
    back();
  }

  return {
    hasParam,
    getParamValue,
    addParam,
    setParam,
    setMultipleParams,
    clearParams,
    removeParam,
    toggleParam,
    routerBack,
  };
};
export { useRouterParams };
