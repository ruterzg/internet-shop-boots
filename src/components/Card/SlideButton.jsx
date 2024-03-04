import React, { useState } from "react";

function SlideButton() {
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  const toggleSlide = () => {
    setIsSlideOpen(!isSlideOpen);
  };

  return (
    <div>
      <button onClick={toggleSlide}>Открыть слайд</button>
      {isSlideOpen && (
        <div>
          {/* Содержимое вашего слайда */}
          Это ваш слайд.
        </div>
      )}
    </div>
  );
}

export default SlideButton;
