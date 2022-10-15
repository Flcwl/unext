/**
 * Prevent the event's behavior, including default events and bubbling.
 */
export const stopEvent = (evt: React.SyntheticEvent) => {
  evt.preventDefault();
  evt.stopPropagation();
};

/**
 * Mocking the event behavior for `defaultPrevented`.
 * @ref https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
 */
export function mockDefaultHandlers<T extends React.ReactEventHandler<any>>(
  ...handlers: (T | undefined)[]
) {
  return function mockedDefaultHandler(event: React.SyntheticEvent) {
    handlers.some((handler) => {
      if (handler) {
        // the `defaultPrevented` will set `true` when execute `event.preventDefault()` in handler.
        handler(event);
      }
      return event.defaultPrevented;
    });
  };
}
