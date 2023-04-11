import React from "react";
import { useMeetupGroupInfo } from "../../hooks";

const CoverSection = () => {
  const data = useMeetupGroupInfo();
  return (
    <div>
      <h1>{data.name}</h1>
      <p>
        {data.members} {data.who} and counting!
      </p>
    </div>
  );
};

export { CoverSection };
