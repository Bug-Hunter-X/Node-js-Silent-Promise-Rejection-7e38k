# Node.js Silent Promise Rejection

This repository demonstrates a common but easily missed error in Node.js applications: unhandled promise rejections.  These rejections are silently swallowed, leading to difficult-to-debug issues.

The `bug.js` file shows the problematic code. The `bugSolution.js` file presents a solution using `process.on('unhandledRejection', ...)`, which catches these errors and allows for proper handling.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`
3. Observe that there is no error output, even though the promise rejects.
4. Run `node bugSolution.js`
5. Now an error is logged to the console showing the rejection and stack trace.