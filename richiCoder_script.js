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
        root.innerHTML = '<div>richi<span id="richi-coder-span-logo-injected">Coder</span></div>';
        root.style.position = 'fixed';
        root.style.bottom = '1vh';
        
        root.style.left = '50%';
        root.style.transform = 'translateX(-50%)';
        root.style.fontFamily = 'Orbitron, monospace';
        root.style.transition = 'transform 0.2s ease-out, opacity 1s ease-in-out';
        root.style.cursor = 'pointer';
        root.style.opacity = 0;
        
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
            // Adding style to CODER
            const span = document.querySelector('#richi-coder-span-logo-injected');
            span.style.backgroundImage = 'linear-gradient(45deg, rgb(124,58,237), #00407c 30%, white 60%'
            span.style.webkitTextFillColor = 'transparent'
            span.style.webkitBackgroundClip = 'text'
            span.style.backgroundSize = '400%'
            span.style.backgroundPosition = 0
        }, 1000);
}


/* 
:root {
    --accent: 124, 58, 237;
    --accent-gradient: linear-gradient(
      45deg,
      rgb(var(--accent)),
      #00407c 30%,
      white 60%
    );
  }
.text-gradient {
    background-image: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-position: 0%;
}
*/