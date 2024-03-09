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
/*
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
*/

// Async and Await is a more modern way to handle promises, it's a syntactic sugar over promises.
async function trackUserHandler() {
  console.log('Getting position...');

  try {
    let posData = await getPosition();
    let timerData = await setTimer(2000);
    console.log(timerData, posData);
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener('click', trackUserHandler);

/** Promise.race()
 * ----------------
 * Race only cares about the first promise that finishes faster, 
 * it doesn't matter if the other promise is still pending.
*/
Promise.race([getPosition(), setTimer(1000)]).then(data => {
  console.log('First and Faster', data);
});

// Promise.all() will only resolve if all promises are resolved.
// if one of the promises is rejected, the whole Promise.all() will be rejected.
Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});

// Promise.allSettled() will resolve all promises, even if one of them is rejected.
// It will return an array with the results of all promises.
Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
  console.log(promiseData);
});