import { Loadable } from "./Loadable";

const DataLoader: React.VFC<{
  data: Loadable<string>;
}> = ({ data }) => {
  const value = data.getOrThrow();
  return (
    <div>
      <div>Data is {value}</div>
    </div>
  );
};


export {DataLoader}