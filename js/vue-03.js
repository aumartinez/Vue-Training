const POMODORO_STATES = {
  WORK: 'Working',
  REST: 'Resting',
  IDLE: 'Waiting to start',
};

const STATES = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused',
  IDLE: 'idle',
}

const WORKING_TIME_LENGTH_IN_MINUTES = 25;
const RESTING_TIME_LENGTH_IN_MINUTES = 5;

new Vue({
  el: '#app',
  data: {
    state: STATES.IDLE,
    minute: WORKING_TIME_LENGTH_IN_MINUTES,
    second: 0,
    pomodoroState: POMODORO_STATES.IDLE,
  },
  computed: {
    title: function(){
      if (this.pomodoroState === POMODORO_STATES.IDLE) {
        return this.pomodoroState;
      }
      else {
        return this.pomodoroState === POMODORO_STATES.REST ? POMODORO_STATES.REST : POMODORO_STATES.WORK;  
      }
    },
    min: function() {
      if (this.minute < 10) {
        return '0' + this.minute;
      }
      else {
        return this.minute;
      }
    },
    sec: function() {
      if (this.second < 10) {
        return '0' + this.second;
      }
      else {
        return this.second;
      }
    }
  },
  methods: {
    start: function() {
      this.state = STATES.STARTED;
      
      if (this.pomodoroState === POMODORO_STATES.IDLE) {
        this.pomodoroState = POMODORO_STATES.WORK; 
      }
      
      if (this.minute == 0 && this.second == 0) {
          this._state();
      }
      
      this._tick();
      this.interval = setInterval(this._tick, 1000);
    },
    pause: function() {
      this.state = STATES.PAUSED;
      clearInterval(this.interval);
    },
    stop: function() {
      this.state = STATES.STOPPED;
      clearInterval(this.interval);
      this._state();
      this.second = 0;
    },
    _tick: function() {
      if (this.second !== 0) {
        this.second--;
        return;
      }
      
      if (this.minute !== 0) {
        this.minute--;
        this.second = 59;
        return;
      }
      
      if (this.second == 0 && this.minute == 0) {
        this.state = STATES.STOPPED;
        clearInterval(this.interval);
      }
    },
    _state: function() {
      this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
      
      if (this.pomodoroState === POMODORO_STATES.WORK) {
        this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
      }
      else {
        this.minute = RESTING_TIME_LENGTH_IN_MINUTES;
      }
    }
  }
  
});
