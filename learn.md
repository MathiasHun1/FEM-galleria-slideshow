# concepts

- react concurrency
- react state updater functions
- How key works in React

# questions

- why the images swithing slowly in prod, how to solve it?
- how to fix page refreshes causing a bug in prod?

# fixes:

- try elimlinating the setTimeouts, replace it with AnimatePresence with "mode" prop. SOLUTION: Can't do it, because React router unmounts the page immidiatelly, and framer don't have time to do the animation. The setTimeout is fine
