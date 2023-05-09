const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600&display=swap';
link.rel = 'stylesheet'
document.head.appendChild(link)
link.addEventListener('load', () => {
        console.log('loaded');
        // Create element
        const root = document.createElement('a');
        root.href = 'https://richicoder.com';
        root.target = '_blank';
        root.style.color = 'black'
        root.style.textDecoration = 'none'
        root.innerHTML = 'richiCoder';
        root.style.position = 'fixed';
        root.style.bottom = 0;
        root.style.left = '50%';
        root.style.transform = 'translateX(-50%)';
        root.style.fontFamily = 'Orbitron, arial';
        root.style.transition = 'all 0.2s ease-out';
        root.style.cursor = 'pointer';
        
        setTimeout(() => {
            document.body.appendChild(root);
            root.addEventListener('mouseover', () => {
                root.style.transform = 'translateX(-50%) scale(1.2) translateY(-20%)'
            })
            root.addEventListener('mouseleave', () => {
                root.style.transform = 'translateX(-50%)'
            })
        }, 1000);
})


