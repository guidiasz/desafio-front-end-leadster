interface Link {
  title: string;
  url: string;
}

export interface LinkProps {
  link: Link;
}

export interface NavProps {
  title: string;
  links: Link[];
}
