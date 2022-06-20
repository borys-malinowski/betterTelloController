import { prefix as prefixConst } from "~discord/constants/constants";

const formatMessageContent = (
  content: string,
  prefix: string = prefixConst,
) => {
  return content.trim().substring(prefix.length).split(" ");
};

export default formatMessageContent;
