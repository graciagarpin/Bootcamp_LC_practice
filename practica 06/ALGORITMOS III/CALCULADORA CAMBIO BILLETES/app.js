//imagenes euros de: https://rosafernandezsalamancaprimaria.blogspot.com/2014/11/monedas-y-billetes-de-euro.html

var money = [
  {
    name: 'Billete de 200 €',
    value: 200,
    image:
      'https://2.bp.blogspot.com/-iaibOjE0GfE/VFvHpiF99hI/AAAAAAABbRI/frKG753CtMA/s1600/billete-200-euros--644x362.jpg',
  },

  {
    name: 'Billete de 100 €',
    value: 100,
    image:
      'https://2.bp.blogspot.com/-MbJUe6uUQks/VFvHt6rb8qI/AAAAAAABbRc/bakxv_47EyM/s1600/img020.jpg',
  },

  {
    name: 'Billete de 50 €',
    value: 50,
    image:
      'https://3.bp.blogspot.com/-SyHh3H-bM5A/VFvHuCXd9TI/AAAAAAABbRg/d0w505p_QIY/s1600/receta2028.jpg',
  },

  {
    name: 'Billete de 20 €',
    value: 20,
    image:
      'https://1.bp.blogspot.com/-_c2dOmvyCas/VFvHpIibFJI/AAAAAAABbRE/i0iDQ9etLGg/s1600/20e_r.jpg',
  },

  {
    name: 'Billete de 10 €',
    value: 10,
    image:
      'https://2.bp.blogspot.com/-wwH5wkGG2pc/VFvHobqcyeI/AAAAAAABbQ8/aKaxyRvqnYM/s1600/10%2Beuros.jpg',
  },

  {
    name: 'Billete de 5 €',
    value: 5,
    image:
      'https://2.bp.blogspot.com/-vlwcmoTzzw0/VFvHkGEL2SI/AAAAAAABbQ0/BQLqozjqe7w/s1600/1357836181_092181_1357840883_sumario_normal.jpg',
  },

  {
    name: 'Moneda de 2 €',
    value: 2,
    image:
      'https://2.bp.blogspot.com/-_rgwepwKZio/VFvE74CgrSI/AAAAAAABbPg/xrJtLgYZUN8/s1600/2euros.jpg',
  },

  {
    name: 'Moneda de 1 €',
    value: 1,
    image:
      'https://3.bp.blogspot.com/-eEEVA0fxyfI/VFvE9F-it8I/AAAAAAABbPw/O448TE3Ji38/s1600/euro.jpg',
  },

  {
    name: 'Moneda de 0,50 €',
    value: 0.5,
    image: '',
  },

  {
    name: 'Moneda de 0,20 €',
    value: 0.2,
    image:
      'https://3.bp.blogspot.com/-3nUrEBYIsMU/VFvE9nsi0SI/AAAAAAABbP4/nQw7sDXziZY/s1600/images.jpg',
  },

  {
    name: 'Moneda de 0,10 €',
    value: 0.1,
    image: '',
  },

  {
    name: 'Moneda de 0,05 €',
    value: 0.05,
    image: '',
  },

  {
    name: 'Moneda de 0,02 €',
    value: 0.02,
    image: '',
  },

  {
    name: 'Moneda de 0,01 €',
    value: 0.01,
    image: '',
  },
];

function returnChange() {
  var devolutionAmount;
  var totalPurchase = document.getElementById('input-totalPurchase').value;
  var paymentHandOver = document.getElementById('input-paymentHandOver').value;

  devolutionAmount = paymentHandOver - totalPurchase;
  calculateCoinsOfChange(devolutionAmount);

  return devolutionAmount;
}

document
  .getElementById('calculate-button')
  .addEventListener('click', returnChange);

function calculateCoinsOfChange(devolutionAmount) {
  for (let index = 0; index < money.length; index++) {
    var coinValue = money[index].value;
    var amountOfChange;
    amountOfChange = devolutionAmount / coinValue;
    if (amountOfChange >= 1) {
      var devolution = devolutionAmount;
      devolutionAmount = devolutionAmount % coinValue;

      devolution = devolution - devolutionAmount;
      var numberOfCoins = devolution / coinValue;
      console.log('Devolver ' + numberOfCoins + ' ' + money[index].name);
    }
  }
}
