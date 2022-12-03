"use strict";



movies.splice(50);

// -------------- NORMALIZATION DATA --------------

const AllMovies = movies.map((el) => {
   return {
      title: el.title,
      year: el.year,
      category: el.categories,
      id: el.imdbId,
      rating: el.imdbRating,
      runtime: `${Math.trunc(el.runtime / 60)} h, ${el.runtime % 60} m `,
      lang: el.language,
      youtube: `https://www.youtube.com/embed/${el.youtubeId}`,
      summary: el.summary,
      smallimg: el.smallThumbnail,
      bigimg: el.bigThumbnail,
   };
});

// -------------- NORMALIZATION DATA  END --------------



// ----------- RENDER ALL MOVIES ------------------------

function AllMoviesRender() {
   AllMovies.forEach((el) => {
      // console.log(el);
      const card = createElement(
         "div",
         "card shadow",
         `
      <img src="${el.smallimg}" alt="${el.title}" class="card-top-img" />
      <div class="card-body">
         <h3 class="card-title">${el.title}</h3>

         <ul class="card-list p-0 list-unstyled">
            <li class="card-list-item"><strong>Year:</strong>${el.year}</li>
            <li class="card-list-item"><strong>Language:</strong>${el.lang}</li>
            <li class="card-list-item"><strong>Rating:</strong>${el.rating}</li>
            <li class="card-list-item"><strong>Category:</strong>${el.category}</li>
         </ul>

         <div class="social d-flex">
            <a href="${el.youtube}" class="btn btn-danger mx-2">
               YouTube
            </a>
            <button class="btn btn-primary mx-2" data-more="${el.id}">
               Read more ...
            </button>

            <button class="btn btn-warning mx-2" data-save="${el.id}">
               Save
            </button>

         </div>
      </div>`
      );

      $(".wrapper").appendChild(card);
   });
}

AllMoviesRender();

// ----------- RENDER ALL MOVIES END ------------------------

// ----------- DYNAMIC CATEGORY ------------------------

function categoryMovies() {

   const removeDuplicate = [];

   AllMovies.forEach((el) => {
      el.category.forEach((e) => {
         if (!removeDuplicate.includes(e)) {
            removeDuplicate.push(e);
         }
      });
   });

   removeDuplicate.sort();

   removeDuplicate.forEach((e) => {
      const option = createElement("option", "item-option", e);

      $("#category").appendChild(option);

   });

}

categoryMovies();

// ----------- DYNAMIC CATEGORY END ------------------------



// -------------------SEARCH FILM-----------------------



const searchFilm = function (query, rating, category) {

   return AllMovies.filter((e) => {
      return e.title.match(query) && e.rating >= rating && e.category.includes(category);
   })
}






$('#result').addEventListener("click", () => {

   $('.wrapper').innerHTML = `<span class="loader"></span>`;
   let inputValue = $('#search').value.trim();
   let rating = $('#rating').value.trim();
   let category = $('#category').value.trim();

   const regex = new RegExp(inputValue, "gi");

   let result = searchFilm(regex, rating, category)

   console.log(result);

   setTimeout(() => {
      findeRender(result);
   }, 2000)


})


function findeRender(data = []) {
   $(".wrapper").innerHTML = "";


   if (data.length > 0) {
      $(".count").innerHTML = `<h3>${data.length} ta ma'lumot topildi !</h3>`
      data.forEach((el) => {
         // console.log(el);
         const card = createElement(
            "div",
            "card shadow",
            `
         <img src="${el.smallimg}" alt="${el.title}" class="card-top-img" />
         <div class="card-body">
            <h3 class="card-title">${el.title}</h3>
   
            <ul class="card-list p-0 list-unstyled">
               <li class="card-list-item"><strong>Year:</strong>${el.year}</li>
               <li class="card-list-item"><strong>Language:</strong>${el.lang}</li>
               <li class="card-list-item"><strong>Rating:</strong>${el.rating}</li>
               <li class="card-list-item"><strong>Category:</strong>${el.category}</li>
            </ul>
   
            <div class="social d-flex">
               <a href="${el.youtube}" class="btn btn-danger mx-2">
                  YouTube
               </a>
               <button class="btn btn-primary mx-2" data-more="${el.id}">
                  Read more ...
               </button>
   
               <button class="btn btn-warning mx-2" data-save="${el.id}">
                  Save
               </button>
   
            </div>
         </div>`
         );

         $(".wrapper").appendChild(card);
      });
   } else {
      $(".wrapper").innerHTML = "MA'LUMOT TOPILMADI ";
   }
}

//================= film filte by id ===================

function filterFilmById(idFilm) {

   let item = AllMovies.filter((e) => {
      return e.id === idFilm;
   });

   const {title, smallimg, time , summary, lang , rating , category , year }=item[0];

   const row = createElement('div', 'row', `
   
   
   <div class="col-4 p-3">
   <img src="${smallimg}" alt="movies " class="w-100 mt-2 img-thumbnail">
</div>

<div class="col-7 p-3 mt-2">
   <ul class="list-group">
      <li class="list-group-item">
         <strong>Film name: </strong> ${title}
      </li>
      <li class="list-group-item">
      <strong>Runtime: </strong> ${time}
      </li>
      <li class="list-group-item">
         <strong>Rating:   </strong> ${rating}
      </li>
      <li class="list-group-item">
         <strong>Language: </strong> ${lang}
      </li>
      <li class="list-group-item">
         <strong>Category: </strong> ${category}
      </li>
      <li class="list-group-item">
         <strong>Year: </strong> ${year}
      </li>
   
   </ul>
</div>

<div class="col-12">
   <h3 class="text-center text-danger">Summary:</h3>
   <p>${summary}</p>
</div>
   
   
   `);


   $('.modal-wrapper').appendChild(row);

}






// modal window 





$('.wrapper').addEventListener('click', (e) => {

$('.modal-wrapper').innerHTML="";

   if (e.target.classList.contains('btn-primary')) {

      let idFilm = e.target.getAttribute('data-more');

      filterFilmById(idFilm)

      $('.modal-window').classList.remove('hide-modal');
      $('body').style.overflow="hidden";


     
   }


})



$('.modal-window').addEventListener('click', (e) => {
   if (e.target.classList.contains('modal-window')) {
      $('.modal-contents').classList.toggle('pop-up');
   }
})


$('.hide').addEventListener('click', () => {
   $('.modal-window').classList.add('hide-modal');
   $('body').style.overflow="visible";
 
})



const bookmark=[];