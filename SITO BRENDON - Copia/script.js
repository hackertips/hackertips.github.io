// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impedisce l'invio del modulo per test
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Esempio di elaborazione dei dati
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Messaggio:', message);
  
      alert('Grazie per averci contattato!');
    });
  });
  // scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del modulo per test

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esempio di elaborazione dei dati
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    alert('Grazie per averci contattato!');
  });

  // Visualizza il carrello al caricamento della pagina (se ci sono prodotti)
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
  }
});

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showCart() {
  let cartContent = 'Carrello:\n';
  let total = 0;

  cart.forEach(item => {
    cartContent += `${item.productName} - €${item.price}\n`;
    total += item.price;
  });

  cartContent += `Totale: €${total.toFixed(2)}`;
  alert(cartContent);
}
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del modulo per test

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esempio di elaborazione dei dati
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    alert('Grazie per averci contattato!');
  });

  // Visualizza il carrello al caricamento della pagina (se ci sono prodotti)
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
  }
});

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}
function showCart() {
  let cartContent = 'Carrello:\n';
  let total = 0;

  cart.forEach(item => {
    cartContent += `${item.productName} - €${item.price}\n`;
    total += item.price;
  });

  cartContent += `Totale: €${total.toFixed(2)}`;
  alert(cartContent);
}
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del modulo per test

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esempio di elaborazione dei dati
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    alert('Grazie per averci contattato!');
  });

  // Visualizza il carrello al caricamento della pagina (se ci sono prodotti)
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
  }
});



function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showCart() {
  let cartContent = 'Carrello:\n';
  let total = 0;

  cart.forEach(item => {
    cartContent += `${item.productName} - €${item.price}\n`;
    total += item.price;
  });

  cartContent += `Totale: €${total.toFixed(2)}`;
  alert(cartContent);
}
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del modulo per test

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esempio di elaborazione dei dati
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    alert('Grazie per averci contattato!');
  });

  // Visualizza il carrello al caricamento della pagina (se ci sono prodotti)
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
  }
});


function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showCart() {
  let cartContent = 'Carrello:\n';
  let total = 0;

  cart.forEach(item => {
    cartContent += `${item.productName} - €${item.price}\n`;
    total += item.price;
  });

  cartContent += `Totale: €${total.toFixed(2)}`;
  alert(cartContent);
}
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impedisce l'invio del modulo per test

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esempio di elaborazione dei dati
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Messaggio:', message);

    alert('Grazie per averci contattato!');
  });

  // Visualizza il carrello al caricamento della pagina (se ci sono prodotti)
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
  }
});

// Carrello semplice
let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(`Prodotto "${productName}" aggiunto al carrello.`);
  alert(`Hai aggiunto "${productName}" al carrello.`);
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showCart() {
  let cartContent = 'Carrello:\n';
  let total = 0;

  cart.forEach(item => {
    cartContent += `${item.productName} - €${item.price}\n`;
    total += item.price;
  });

  cartContent += `Totale: €${total.toFixed(2)}`;
  alert(cartContent);
}
