type EventMapper<T extends Function> = {
  [key: string]: T;
};

export default EventMapper;
