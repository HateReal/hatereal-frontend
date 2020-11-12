import React from "react";
import {
  NextPage,
} from "next";
import {
  useCounter,
} from "src/hooks";

const IndexPage: NextPage = () => {
  const { counter, increase, decrease, reset } = useCounter();
  return (
    <div>
      {counter.value}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={() => reset(4)}>reset</button>
    </div>
  );
};

export default IndexPage;
