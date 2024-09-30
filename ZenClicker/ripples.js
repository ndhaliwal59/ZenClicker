export function createRipple(event) {   //circular ripple
  const body = document.body;
  const ripple = document.createElement('span');
  const diameter = Math.max(body.clientWidth, body.clientHeight) / 4; // Smaller initial size
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - radius}px`;
  ripple.style.top = `${event.clientY - radius}px`;
  ripple.classList.add('ripple');

  const randomDuration = Math.random() * (2 - 0.5) + 0.5;
  ripple.style.animationDuration = `${randomDuration}s`;

  const randomScale = Math.random() * (1.1 - 0.3) + 0.3;
  ripple.style.setProperty('--ripple-scale', randomScale);


  body.appendChild(ripple);

  // Remove the ripple element from the DOM when its animation ends
  ripple.addEventListener('animationend', () => {
      ripple.remove();
  });
}


export function createHeartRipple(event) {   //heart ripple
  const body = document.body;
  const ripple = document.createElement('span');
  ripple.classList.add('ripple2');

  const rippleSize = 50; // Adjust this based on your ripple size
    const rippleX = event.clientX - rippleSize / 2;
    const rippleY = event.clientY - rippleSize / 2;

    ripple.style.left = `${rippleX +10}px`;
    ripple.style.top = `${rippleY}px`;

  // Generate a random duration between 0.5s and 2s
  const randomDuration = Math.random() * (2 - 0.5) + 0.5;
  ripple.style.animationDuration = `${randomDuration}s`;

  // Generate a random scale between 1 and 3
  const randomScale = Math.random() * (3 - 1) + 1;
  ripple.style.setProperty('--ripple-scale', randomScale);

  body.appendChild(ripple);

  // Remove the ripple element from the DOM when its animation ends
  ripple.addEventListener('animationend', () => {
      ripple.remove();
  });
}

export function createStarRipple(event) {
  const body = document.body;
  const ripple = document.createElement('span');
  ripple.classList.add('ripple3');

  // Calculate the center of the ripple
  const rippleSize = 50; // Adjust this based on your ripple size
  const rippleX = event.clientX - rippleSize / 2;
  const rippleY = event.clientY - rippleSize / 2;

  // Set the position of the ripple centered on the click event
  ripple.style.left = `${rippleX}px`;
  ripple.style.top = `${rippleY}px`;

  // Generate a random duration between 0.5s and 2s
  const randomDuration = Math.random() * (2 - 0.5) + 0.5;
  ripple.style.animationDuration = `${randomDuration}s`;

  // Generate a random scale between 1 and 3
  const randomScale = Math.random() * (3.5 - 1) + 1;
  ripple.style.setProperty('--ripple-scale', randomScale);

  body.appendChild(ripple);

  // Remove the ripple element from the DOM when its animation ends
  ripple.addEventListener('animationend', () => {
      ripple.remove();
  });
}