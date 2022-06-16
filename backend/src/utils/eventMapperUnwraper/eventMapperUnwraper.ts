import EventMapper from "../../types/EventMapper/EventMapper";

const eventMapperUnwraper = <T extends Function>(
  eventTarget: { on: Function },
  eventMapper: EventMapper<T>,
) => {
  for (const property in eventMapper) {
    eventTarget.on(property, eventMapper[property]);
  }
};
export default eventMapperUnwraper;
