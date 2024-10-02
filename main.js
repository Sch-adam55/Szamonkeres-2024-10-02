import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

function updateImage() {
  const imageUrl = document.getElementById('imageUrl').value;
  const imageWidth = document.getElementById('imageWidth').value;
  const img = document.getElementById('image');
  
  if (imageUrl) {
      img.src = imageUrl;
  }
  
  if (imageWidth) {
      img.style.width = imageWidth + 'px';
  }
}

function updateBorder() {
  const borderThickness = document.getElementById('borderThickness').value;
  const borderColor = document.getElementById('borderColor').value;
  const img = document.getElementById('image');
  
  if (borderThickness) {
      img.style.border = `${borderThickness}px solid ${borderColor}`;
  }
}

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('imageUrl').addEventListener('input', updateImage);
document.getElementById('imageWidth').addEventListener('input', updateImage);
document.getElementById('borderThickness').addEventListener('input', updateBorder);
document.getElementById('borderColor').addEventListener('input', updateBorder);

