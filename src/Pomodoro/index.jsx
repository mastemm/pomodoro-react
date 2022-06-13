import SPomodoro from './style';
function Pomodoro() {
  return (
    <SPomodoro>
      <div className='pomodoro'>
        <div className='message'>
          <p>C'est le moment de prendre une pause! prochaine session dans :</p>
        </div>
        <div className='timer'>25:00</div>
      </div>
    </SPomodoro>
  );
}

export default Pomodoro;
