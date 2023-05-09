// Create element
const root = document.createElement('div');
root.innerHTML = 'richiCoder';
root.style.position = 'fixed';
root.style.bottom = 0;
root.style.left = '50%';
root.style.transform = 'translateX(-50%)';
// Inject html to page
setTimeout(() => {
    document.body.appendChild(root)
}, 200);
