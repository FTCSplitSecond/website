window.addEventListener('scroll', function() {
    const image = document.getElementById('robot-img');
    const scrolled = window.scrollY;
    const initialWidth = 68; // Initial width of the image in viewport height (vh)
    const newWidth = Math.max(initialWidth * (1 - scrolled / 500), initialWidth / 2); // Adjust the 1000 value for faster/slower shrinking
    const opacity = Math.max(0, 1 - scrolled / 350); // Adjust the 500 value for faster/slower fading
  
    image.style.width = newWidth + 'vh';
    image.style.opacity = opacity;

    const textBox = document.getElementById('hero-text');
    // Delay the adjustment of text box height by 100 pixels
    const scrolledAdjusted = Math.max(0, scrolled - 250);
    const initialHeight = 78; // Initial height of the text box in percentage (%)
    const newHeight = Math.max(initialHeight * (1 - scrolledAdjusted / 500), initialHeight / 3); // Adjust the 1000 value for faster/slower shrinking
    textBox.style.height = newHeight + '%';

  });