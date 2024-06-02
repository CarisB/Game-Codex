import { Button, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSolidUpArrowAlt } from "react-icons/bi";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  const activeThreshold = 1000; // When should the button be active?
  const mediaProps = isMobile
    ? { right: 5, bottom: 5 }
    : { left: 10, bottom: 10 }; // Different props depending on size

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > activeThreshold
        ? setShowButton(true)
        : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () =>
      window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  return (
    <>
      {showButton && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          variant="solid"
          colorScheme="green"
          leftIcon={<BiSolidUpArrowAlt />}
          position={"fixed"}
          zIndex={1}
          {...mediaProps}
        >
          Return to top
        </Button>
      )}
    </>
  );
}

export default ScrollToTop;
