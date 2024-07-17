import './Ball.css';

const Ball = ({ position }) => {
  return <div className="ball" style={{ top: `${position}%` }} />;
};

export default Ball;