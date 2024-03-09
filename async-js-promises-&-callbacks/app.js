const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
}

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);// This will return a new promise, so we can chain another then() to it.
    })
    .then(data => {
      console.log(data, positionData);
    })
    .catch(err => {
      console.log(err);
    });

  setTimeout(() => {
    console.log('Timer done!');
  }, 0);// The browser communicates with JS via the Event Loop and the Message Queue to let it know once a longer-taking task finished.
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

