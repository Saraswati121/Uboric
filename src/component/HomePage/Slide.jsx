import React from "react";
import './slide.css'
const colors = [
  "https://www.uboric.com/wp-content/uploads/2021/11/grocery.jpg",
  "https://www.uboric.com/wp-content/uploads/2021/11/health-care.jpg",
  "https://www.uboric.com/wp-content/uploads/2021/11/clothing.jpg"
];
const delay = 2000;
// "#0088FE", "#00C49F", "#FFBB28"
export function Slide() {
  const [index, setIndex] = React.useState(0);

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
            <img src={backgroundColor}/>
          </div>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          > */}
            {/* <img src="" alt="" /> */}
          {/* </div>
        ))}
      </div> */}
    </div>
  );
}