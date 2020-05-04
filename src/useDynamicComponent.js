import { useEffect, useState } from "react";

const useDynamicComponent = (comp) => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    import("components-react-lib").then((r) => {
      setComponent(r[comp]);
    });
  }, [comp]);

  return component;
};

export default useDynamicComponent;
