import { useEffect } from "react";
import Game from "../entities/Game";

const useBackgroundImage = (game: Game | undefined) =>
  useEffect(() => {
    const containerStyle = document.getElementById("main")?.style;
    const cssVar = "--game-background";

    if (containerStyle)
      containerStyle.setProperty(cssVar, `url(${game?.background_image})`);

    // Comment/Uncomment this line to enable/disable background images lingering through routes
    // return () => containerStyle?.setProperty(cssVar, "none");
  }, [game?.background_image]);

export default useBackgroundImage;
