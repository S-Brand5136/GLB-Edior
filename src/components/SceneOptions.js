import { useContext } from "react";
import classNames from "classnames";
import { meshContext } from "../providers/MeshProvider";
import OptionsProvider from "../providers/OptionsProvider";

import "./styles/SceneOptions.scss";
import TreeGraph from "./TreeGraph";
import OptionsSelector from "./optionsMenu/OptionsSelector";

const SceneOptions = () => {
  let graphClass = classNames("graph", {});

  const { mesh, graph } = useContext(meshContext);

  return (
    <OptionsProvider>
      <main className={graphClass}>
        <OptionsSelector options={["SCENE", "EXPORT", "SETTINGS"]} />
        <TreeGraph graph={graph}></TreeGraph>
      </main>
    </OptionsProvider>
  );
};

export default SceneOptions;
