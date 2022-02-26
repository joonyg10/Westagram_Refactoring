import "./Navigator.scss";

function Navigator({ currIdx, showClickedSlide, dotsCnt }) {
  const NAVIGATOR = Array(dotsCnt).fill(0);

  return (
    <ul className="navigator">
      {NAVIGATOR.map((_, idx) => (
        <li
          key={idx.toString()}
          onClick={() => showClickedSlide(idx)}
          className={`navigator__dot ${currIdx === idx && "current"}`}
        ></li>
      ))}
    </ul>
  );
}

export default Navigator;
