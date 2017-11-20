var usd = 26.8;
 var eur = 31;
 var rub = 0.43;
 var input = +prompt('Какую сумму вы хотели бы поменять?');
 if (!isNaN(input)) {
   alert('USD= ' + usd * input + '\n' + 'EUR= ' + eur * input + '\n' + 'RUB= ' + rub * input );
   var type_of_changing_money = prompt('В какую валюту вы хотели бы перевести? USD, EUR, RUB?').toLowerCase();
   if (type_of_changing_money == 'usd' || type_of_changing_money == '$' || type_of_changing_money == 'доллар' ){
     var result= input/usd;
     alert(input + 'грн = ' + result+ type_of_changing_money);
   }else if (type_of_changing_money == 'eur' || type_of_changing_money == 'евро') {
     var result= input/eur;
     alert(input + 'грн = ' + result + type_of_changing_money);
   }else if (type_of_changing_money == 'rub' || type_of_changing_money == 'рубль'){
     var result=input/rub;
     alert(input + 'грн = ' + result + type_of_changing_money);
   }else {
     alert( 'Выберите пожалуйста одну из валют: USD, EUR, RUB' );
   }
   var answer = confirm('Вы действительно хотите поменять ' + input + ' гривен на ' + result + ' ' + type_of_changing_money + '?');
   if (answer == true){
     alert('Спасибо');
   }else {
     alert('Возвращайтесь!');
   }
 } else {
   alert('Введите пожалуйста корректныe данные');
}
