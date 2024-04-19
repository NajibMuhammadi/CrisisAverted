import './next-btn.css'

const NextBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="carousel-btn next">↦</button>
  );
};

export default NextBtn;
