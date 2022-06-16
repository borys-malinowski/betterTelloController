import { Client, ClientOptions, Message } from "discord.js";
import eventMapperUnwraper from "../../../utils/eventMapperUnwraper/eventMapperUnwraper";
import EventMapper from "../../../types/EventMapper/EventMapper";

type Callback = (message: Message<boolean>) => Promise<void>;

interface CreateClient {
  (token: string): Client;
  (token: string, eventMapper: EventMapper<Callback>): Client;
  (
    token: string,
    eventMapper: EventMapper<Callback>,
    options: ClientOptions,
  ): Client;
}

const createClient: CreateClient = (
  token: string,
  eventMapper?: EventMapper<Callback>,
  options?: ClientOptions,
): Client => {
  const { intents, ...rest } = Object(options);
  const client = new Client({
    intents: intents || ["GUILDS", "GUILD_MESSAGES"],
    ...rest,
  });
  if (eventMapper) {
    eventMapperUnwraper<Callback>(client, eventMapper);
  }
  client.login(token);
  return client;
};

export default createClient;
