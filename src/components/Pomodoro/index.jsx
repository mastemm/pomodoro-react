import { useEffect, useState } from 'react';
import SPomodoro from './style';
function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
          //
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

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
