## Javascript is a single-threaded language
Code executes step by step, in order

But, Certain operations take a bit longer.

Then, Asynchronous Code execution comes into play.

## How does JavaScript handle asynchronous code execution?
It's single-threaded but offloads longer-taking tasks(e.g. timers) to the browser (which uses multiple threads).