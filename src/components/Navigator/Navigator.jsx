import "./Navigator.scss";

function Navigator({ currIdx, navigateToImg, maxDots }) {
  const NAVIGATOR = Array(maxDots).fill(0);

  return (
    <ul className="navigator">
      {NAVIGATOR.map((_, idx) => (
        <li
          key={idx}
          onClick={() => navigateToImg(idx)}
          className={`navigator__dot ${currIdx === idx && "current"}`}
        ></li>
      ))}
    </ul>
  );
}

export default Navigator;
