import slugify from 'slugify';
type TToken = {
  name: string;
  value: any;
};

/**
 * Converts human readable tokens into Styled Components config friendly ones
 *
 * @param {array} tokens {name: string, value: any}
 * @return {object} {key, value}
 */

const tokensToStyledComponents = (tokens: Array<TToken>) => {
  const nameSlug = (text: string) => slugify(text, { lower: true });
  let response: Record<string, any> = {};

  tokens.forEach(({ name, value }) => {
    response[nameSlug(name)] = value;
  });

  return response;
};

export default tokensToStyledComponents;
