const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600&display=swap';
link.rel = 'stylesheet'
document.head.appendChild(link)
link.addEventListener('load', createRoot())
function createRoot() {
    // Create element
        const root = document.createElement('a');
        root.href = 'https://richicoder.com';
        root.target = '_blank';
        root.style.color = 'black'
        root.style.textDecoration = 'none'
        root.innerHTML = 'richiCoder';
        root.style.position = 'fixed';
        root.style.bottom = '1vh';
        root.style.left = '50%';
        root.style.transform = 'translateX(-50%)';
        root.style.fontFamily = 'Orbitron, monospace';
        root.style.transition = 'transform 0.2s ease-out, opacity 1s ease-in-out';
        root.style.cursor = 'pointer';
        root.style.opacity = 0
        setTimeout(() => {
            document.body.appendChild(root);
            setTimeout(() => {
                root.style.opacity = 1
            }, 500);
            root.addEventListener('mouseover', () => {
                root.style.transform = 'translateX(-50%) scale(1.2) translateY(-20%)'
            })
            root.addEventListener('mouseleave', () => {
                root.style.transform = 'translateX(-50%)'
            })
        }, 1000);
}