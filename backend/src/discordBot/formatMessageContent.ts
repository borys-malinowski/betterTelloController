export const PREFIX = "!";

const formatMessageContent = (content: string) => {
  return content.trim().substring(PREFIX.length).split(" ");
};

export default formatMessageContent