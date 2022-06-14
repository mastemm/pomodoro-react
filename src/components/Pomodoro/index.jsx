import { useEffect, useState } from 'react';
import SPomodoro from './style';
function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {}), [seconds];
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <SPomodoro>
      <div className='pomodoro'>
        <div className='message'>
          {displayMessage && (
            <p>
              C'est le moment de prendre une pause! prochaine session dans :
            </p>
          )}
        </div>
        <div className='timer'>
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    </SPomodoro>
  );
}

export default Pomodoro;
