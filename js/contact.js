const setup = (function () {
    document.getElementById('sendMessage').onsubmit = function (e) {
      e.preventDefault();
      console.log('click');
      const number = '56994991536';
      const fname = document.getElementById('first_name').value;
      const lname = document.getElementById('last_name').value;
      const email = document.getElementById('email').value;
      link = `https://web.whatsapp.com/send?phone=56994991536&text=Hola, soy ${fname} ${lname} me gustaría abrir una empresa en Chile desde Argentina.`;
      if ((new MobileDetect(window.navigator.userAgent)).mobile()) {
        link = `https://api.whatsapp.com/send?phone=56994991536&text=Hola, soy ${fname} ${lname} me gustaría abrir una empresa en Chile desde Argentina.`;
      }

      ga('send', 'event', 'Whatsapp', 'contact', `${fname} ${fname} ${email}`);

      window.open(link);
    };
  })
  if (window.attachEvent) {
    window.attachEvent('onload', setup);
  } else {
    window.addEventListener('load', setup, false);
  }