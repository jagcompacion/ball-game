import confettiImg from './images/confetti.png';

const Result = ({
  result
}) => {
  return (
    <div className='result'>
      <div>Times Up!</div>
      <div><img src={confettiImg} /></div>
      <div className='alert'>
        <h2>{result.toFixed(0)}</h2>
        <div>seconds</div>
      </div>
    </div>
  )
}

export default Result