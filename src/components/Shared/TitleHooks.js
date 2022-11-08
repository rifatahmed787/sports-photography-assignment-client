import { useEffect } from "react";

const TitleHooks = (title) => {
  useEffect(() => {
    document.title = `${title}-sports photography`;
  }, [title]);
};

export default TitleHooks;
