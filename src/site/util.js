import { bookmarklets } from "../entry";

export const content = bookmarklets.map(name => ({
  name,
  href: `javascript:${require(`../../dist/${name}.js`)}`
}));
