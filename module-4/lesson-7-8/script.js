"use strict";



const cards = $$('.fs-1');


let region = ["Andijon ", "Buxoro ", "Farg'ona ", "Jizzax ", "Namangan ", "Navoiy ", "Qashqadaryo ", "Qaraqalpog'iston Respublikasi", "Samarqand ", "Sirdaryo ", "Surxondaryo ", "Toshkent Shahri", "Xorazm "]


function dynamicOption() {

   region.forEach((el) => {
      let option = createElement("option", 'item', el);
      $('#region').appendChild(option);
   })
}

dynamicOption()



const getTime = async (region = localStorage.getItem('select_region') || "toshkent") => {

   console.log(region);
   try {

      const today = await fetch(`https://islomapi.uz/api/present/day?region=${region}`);
      const result = await today.json();
      const week = await fetch(`https://islomapi.uz/api/present/week?region=${region}`);
      const weekResult = await week.json();

      console.log(weekResult);

      localStorage.setItem("day", JSON.stringify(result));
      localStorage.setItem("week", JSON.stringify(weekResult));

      renderTime()

   } catch (err) {
      console.log(err);
   }
}

getTime()





function renderTime() {

   let data = JSON.parse(localStorage.getItem('day'));
   let weekData = JSON.parse(localStorage.getItem('week'));

   console.log(weekData);

   const {
      times: {
         asr,
         hufton,
         peshin,
         quyosh,
         shom_iftor,
         tong_saharlik,
      }
   } = data;

   cards[0].innerHTML = tong_saharlik;
   cards[1].innerHTML = quyosh;
   cards[2].innerHTML = peshin;
   cards[3].innerHTML = asr;
   cards[4].innerHTML = shom_iftor;
   cards[5].innerHTML = hufton;

   let weekday = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', ];

   weekData.forEach((el) => {

      let weekdayNumber = new Date().getDay();




      const tr = createElement('tr', `${ el.weekday === weekday[weekdayNumber] ?  "bg-sucess" : "" }`, `
      
      <th>${el.weekday}</th>
      <td>${el.region}</td>
      <td>${el.date.substring(0,10)}</td>
      <td>${el.times.tong_saharlik}</td>
      <td>${el.times.quyosh}</td>
      <td>${el.times.peshin}</td>
      <td>${el.times.asr}</td>
      <td>${el.times.shom_iftor}</td>
      <td>${el.times.hufton}</td>

      `);


      $('#weekresult').appendChild(tr);
   })

}



$('#region').addEventListener('change', (e) => {

   $('#weekresult').innerHTML = "";

   localStorage.setItem('select_region', e.target.value);

   switch (e.target.value) {
      case "Farg'ona":
         getTime("marg'ilon");
         break;
      case "Qaraqalpog'iston Respublikasi":
         getTime('nukus');
         break;
      case "Qashqadaryo":
         getTime('qarshi');
         break;
      case 'Surxondaryo':
         getTime('Termiz');
         break;
      case "Buxoro":
         getTime('buxoro');
         break;
      case 'Andijon':
         getTime('andijon');
         break;
      case "Namangan":
         getTime('namangan');
         break;
      case "Samarqand":
         getTime('samarqand');
         break;
      case "Jizzax":
         getTime('jizzax');
         break;
      case "Sirdaryo":
         getTime('guliston');
         break;
      case "Xorazm":
         getTime('urganch');
         break;
      case "Navoiy":
         getTime('navoiy');
         break;
      case "Toshkent Shahri":
         getTime('toshkent');
         break;

      default:
         getTime('toshkent');

   }

   selectRegion()


})





function selectRegion() {
   $('#select_region').innerHTML = localStorage.getItem('select_region');
}

selectRegion()