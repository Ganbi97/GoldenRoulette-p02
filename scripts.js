// Config
const WHATSAPP = '5492235577516';
const IFRAME_URLS = {
  regalamonedas: 'https://www.regalamonedas.lat',
  ganaencasa: 'https://www.ganaencasa24.com',
  tiger: 'https://casinotiger.live'
};

document.addEventListener('DOMContentLoaded', ()=> {
  const nickInput = document.getElementById('nickInput');
  const whatsappCTA = document.getElementById('whatsappCTA');
  const iframeOverlay = document.getElementById('iframeOverlay');
  const iframeFrame = document.getElementById('iframeFrame');
  const iframeTitle = document.getElementById('iframeTitle');
  const iframeClose = document.getElementById('iframeClose');

  // WhatsApp CTA
  whatsappCTA.addEventListener('click', ()=>{
    const nick = nickInput.value?.trim() || 'Usuario';
    if(typeof fbq!=='undefined'){ fbq('track','Contact'); }
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero mi usuario con el nombre: ' + nick)}`;
  window.open(url, '_blank', 'noopener');
  });

  // Botones de plataformas
  document.querySelectorAll('.platform-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const platform = btn.dataset.platform;
      const nick = nickInput.value?.trim() || 'Usuario';

      if(platform === 'ganamos' || platform === 'zeus'){
        if(typeof fbq!=='undefined'){ fbq('track','Contact'); }
        const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Quiero un usuario en ' + platform)}`;
        window.open(url, '_blank', 'noopener');
      } else {
        const iframeURL = IFRAME_URLS[platform];
        if(iframeURL){
          iframeFrame.src = iframeURL;
          iframeTitle.innerText = platform;
          iframeOverlay.style.display = 'flex';
        }
      }
    });
  });

  // Cerrar iframe
  iframeClose.addEventListener('click', ()=>{
    iframeOverlay.style.display = 'none';
    iframeFrame.src = 'about:blank';
  });
});
