import React from "react";

const CounterContext = React.createContext();
const CounterProvider = CounterContext.Provider;
const CounterConsumer = CounterContext.Consumer;

export default CounterContext;
export { CounterProvider, CounterConsumer };
