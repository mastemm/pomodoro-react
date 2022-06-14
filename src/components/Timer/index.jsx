import SPomodoro from './style';

function Pomodoro() {
  return (
    <SPomodoro>
      <div className='Pomodoro'>
        <div className='message'>
          <p>C'est la pause ! Prochaine session dans :</p>
        </div>
        <div className='timer'></div>
      </div>
    </SPomodoro>
  );
}

export default Pomodoro;
