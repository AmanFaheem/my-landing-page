// Array of image URLs for the background
const images = [
    'https://images.unsplash.com/photo-1533562389935-457b1ae48a39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503476783-60f36cd4f30a?q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1513774771450-219f3814234b?q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1521819073707-9bb8fc33d20c?q=80&w=1470&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

// Function to set a random background image
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.querySelector('.hero').style.backgroundImage = `url(${images[randomIndex]})`;
}

// Change background every 5 seconds
setInterval(changeBackgroundImage, 3000);
