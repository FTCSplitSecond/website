const container = document.getElementById('hero');
const image = document.getElementById('robot-img');

container.addEventListener('mousemove', (e) => {
const containerRect = container.getBoundingClientRect();
const offsetX = e.clientX - containerRect.left - containerRect.width / 2;
const offsetY = e.clientY - containerRect.top - containerRect.height / 2;
const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
const maxDistance = Math.sqrt(containerRect.width * containerRect.width + containerRect.height * containerRect.height);
const scale = clamp(1 + (maxDistance / distance) * 0.005, 1, 1.1); // Adjust scale factor as needed

image.style.scale = scale;
});

container.addEventListener('mouseleave', () => {
// Reset scale when cursor leaves the container
image.style.scale = 1;
});

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }