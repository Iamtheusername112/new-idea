import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="my-8 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 20 Productive Ideas for your business
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">
          Write and like your favourite ideas.
        </strong>
        No account needed!.
      </h2>

      <div>
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="select select-bordered border-primary w-full max-w-xs"
        >
          <option disabled selected>
            Select theme
          </option>
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>emerald</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>acid</option>
          <option>lemonade</option>
          <option>sunset</option>
          <option>winter</option>
          <option>valentine</option>
          <option>halloween</option>
          <option>garden</option>
          <option>business</option>
          <option>forest</option>
          <option>aqua</option>
          <option>lofi</option>
          <option>pastel</option>
          <option>lofi</option>
          <option>fantasy</option>
          <option>wireframe</option>
          <option>luxury</option>
          <option>dracula</option>
          <option>black</option>
          <option>cmyk</option>
          <option>autumn</option>
          <option>night</option>
          <option>coffee</option>
          <option>dim</option>
          <option>nord</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
