import {
  createContext as createContextDefault,
  useContext as useContextDefault,
} from "react";
import { __DEV__ } from "../env";
import { invariant } from "../shared";

const DEFAULT_CREATE_CONTEXT_PROPS = {};

/**
 * Create a valid context with errorMessage tip based on createContext in React
 */
export const createContext = <T>({
  optional = false,
  displayName,
}: CreateContextProps = DEFAULT_CREATE_CONTEXT_PROPS) => {
  const Context = createContextDefault<T | null>(null);

  if (__DEV__) {
    Context.displayName = displayName;
  }

  function useContext() {
    const context = useContextDefault(Context);

    if (!optional && !context) {
      invariant(
        false,
        `The ${displayName}Context context should be wrapped  within ${displayName} as Provider.`
      );
    }

    // TODO: Auto get T 或者 T | null
    return context;
  }

  return [Context.Provider, useContext, Context] as const;
};

export interface CreateContextProps {
  displayName?: string;
  optional?: boolean;
}

export type CreateContextReturn = ReturnType<typeof createContext>;
