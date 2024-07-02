function menu(n) { //menu w nawigacji
    let content_main = '';
    switch(n) {
        default:
            content_main = home();
            break;
        case 2:
            content_main = oferta();
            break;
        case 3:
            content_main = galeria();
            break;
        case 4:
            content_main = kontakt();
            break;
    }
    document.getElementsByTagName("main")[0].innerHTML = content_main;
}

function home() {   //Strona Home
    let content =`
    <section class="container">
        <h1>Wypożyczalnia aut sportowych.</h1>
        <h2>Bez ograniczeń.</h2>
        <button class="buttton-moreinfo" onClick="menu(2)">Dowiedz się więcej</button>
    </section>`;
    return content;
}

function oferta() { //Strona Oferta
    let content=`
    <div class="offer-box">
        <div class="offer-box-title"><!--Tekst nad ofertami-->
            <p>Nasza firma oferuje najlepsze sportowe samochody do wynajęcia.</p>
        </div>

        <div class="offer-box-column"><!--Pojedyncza oferta w kolumnie-->
            <div class="offer-car"><img src="images/galeria/zdjecia/BRABUS_911_1.jpg" alt="Brabus 911" /></div>
            <h3>Brabus 900  - PORSCHE 911 TURBO S</h3>
            <ul>
                <li>Moc: 900 KM</li>
                <li>Przyspieszenie 0-100km/h: 2.5s</li>
                <li>Max prędkość: 340 km/h</li>
            </ul>
        </div>

        <div class="offer-box-column"><!--Pojedyncza oferta w kolumnie-->
            <div class="offer-car"><img src="images/galeria/zdjecia/BRABUS_GT63_1.jpg" alt="Brabus GT63"/></div>
            <h3>Brabus 1000 - MERCEDES-AMG GT-63</h3>
            <ul>
                <li>Moc: 1000 KM</li>
                <li>Przyspieszenie 0-100km/h: 2.6s</li>
                <li>Max prędkość: 316 km/h</li>
            </ul>
        </div>

        <div class="offer-box-column"><!--Pojedyncza oferta w kolumnie-->
            <div class="offer-car"><img src="images/galeria/zdjecia/BMW_M3_1.jpg" alt="BMW M3"/></div>
            <h3>BMW M3 CS </h3>
            <ul>
                <li>Moc: 551 KM</li>
                <li>Przyspieszenie 0-100km/h: 3,4s</li>
                <li>Max prędkość: 302 km/h</li>
            </ul>
        </div>
        <div class="butt-offer-space"><!--Przycisk do konfiguratora-->
        <button class="button-offer" onClick="location.href='configurator.html'">Przejdź do konfiguratora</button>
        </div>
    </div>`;
    return content;
}
function galeria(){ //Strona Galeria
    let content =`
    <section id="gallery"><!--Galeria zdjęć-->
    <h1>Galeria zdjęć</h1>
     <div id="galeria">
          <div class="element-galerii" ><a href="images/galeria/zdjecia/BRABUS_911_1.jpg"  data-lightbox="galeria" data-title="Brabus 900 ROCKET R"><img src="images/galeria/zdjecia/BRABUS_911_1.jpg" alt="Brabus 911"/></a></div>
          
          <div class="element-galerii"><a href="images/galeria/zdjecia/BRABUS_911_2.jpg"  data-lightbox="galeria" data-title="Brabus 900 ROCKET R"><img src="images/galeria/zdjecia/BRABUS_911_2.jpg" alt="Brabus 911"/></a></div>
          
          <div class="element-galerii"><a href="images/galeria/zdjecia/BRABUS_911_3.jpg"  data-lightbox="galeria" data-title="Brabus 900 ROCKET R"><img src="images/galeria/zdjecia/BRABUS_911_3.jpg" alt="Brabus 911"/></a></div>
         
          <div class="element-galerii" ><a href="images/galeria/zdjecia/BRABUS_GT63_1.jpg"  data-lightbox="galeria" data-title="BRABUS ROCKET 1000"><img src="images/galeria/zdjecia/BRABUS_GT63_1.jpg" alt="BMW M3"/></a></div>
          
          <div class="element-galerii"><a href="images/galeria/zdjecia/BRABUS_GT63_2.jpg"  data-lightbox="galeria" data-title="BRABUS ROCKET 1000"><img src="images/galeria/zdjecia/BRABUS_GT63_2.jpg" alt="BMW M3"/></a></div>
          
          <div class="element-galerii"><a href="images/galeria/zdjecia/BRABUS_GT63_3.jpg"  data-lightbox="galeria" data-title="BRABUS ROCKET 1000"><img src="images/galeria/zdjecia/BRABUS_GT63_3.jpg" alt="BMW M3"/></a></div>
          
          <div class="element-galerii" ><a href="images/galeria/zdjecia/BMW_M3_1.jpg"  data-lightbox="galeria" data-title="BMW M3 CS"><img src="images/galeria/zdjecia/BMW_M3_1.jpg" alt="BMW M3"/></a></div>
          
          <div class="element-galerii"><a href="images/galeria/zdjecia/BMW_M3_2.jpg"  data-lightbox="galeria" data-title="BMW M3 CS"><img src="images/galeria/zdjecia/BMW_M3_2.jpg" alt="BMW M3"/></a></div>
          
          <div class="element-galerii"><a href="images/galeria/zdjecia/BMW_M3_3.jpg"  data-lightbox="galeria" data-title="BMW M3 CS"><img src="images/galeria/zdjecia/BMW_M3_3.jpg" alt="BMW M3"/></a></div>
     </div>
    </section>
        `;
    return content;
}
function kontakt(){ 
    //Załadowanie strony Kontakt poprzez asynchroniczne pobieranie danych z serwera
    async function fetchTest() {
        let response = await fetch('./contact.html');
        let responseText = await response.text();
    
        document.getElementById('kontakt').innerHTML = responseText;
    }
    (async() => {
        await fetchTest();
    })();
    let content =`
    <div id="kontakt">
    </div>
    `
    return content;
}


// Obsługa formularza

// Ustawienie daty
document.getElementById('date-start').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
document.getElementById('date-end').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
//obilczanie ilosci dni
function dateToDaySet(dateStart, dateEnd) {
    let date1 = new Date(dateStart);
    let date2 = new Date(dateEnd);
    const diffTime = (date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))+1;
}

function wykonaj() {
   //pobranie wartości z formularza
    let fullname = document.getElementById('fullname').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let car = document.getElementById('carsList').value;
    let localization = document.getElementById('localization').value;
    let dateStart = document.getElementById('date-start').value;
    let dateEnd = document.getElementById('date-end').value;
    let payment = document.querySelector('input[name="platnosc"]:checked').value;
    let dateDays = dateToDaySet(dateStart, dateEnd);
    if(dateToDaySet(dateStart,dateEnd)>=1){
    let booking = {//Przypisanie wartości do zmiennej booking
        id: Date.now(),
        fullname: fullname,
        age: age,
        phone: phone,
        car: car,
        localization: localization,
        dateStart: dateStart,
        dateEnd: dateEnd,
        payment: payment,
        dateDays: dateDays,
        value: 200 * dateDays
    };
    //Zapisanie wypożyczenia w localStorage
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    renderBookings();
   } else{
    alert("Zakończenie wypożyczenia nie może nastąpić wcześniej niż rozpoczęcie.");
   }
}


//Wyświetlanie  wypożyczen pod formularzem na stronie "zamów samochód"
function renderBookings() {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    let box = document.getElementById('box');
    if(bookings.length>0){
        let zawartosc = "";
        bookings.forEach((booking,id) => {
            zawartosc += `
                <div class=wypozyczenie><!--Pojedyncze wypozczenie widoczne w konfiguratorze pod formularzem-->
                <p>Imię i nazwisko: <b>${booking.fullname}</b></p> 
                <p>Wybrany samochód: <br><b>${booking.car}</b></p>
                <p>Wybrano salon: <b>${booking.localization}</b></p>
                <p>Wybrana opcja płatności: <b>${booking.payment}</b></p>
                <p>Okres wypożyczenia: <b>${booking.dateDays} dni</b></p>
                <p>Należna kwota to <b>${booking.value} zł. </b></p>
                <br>
                <button class="btn-normal" onClick="deleteBooking(${id})">Zrezygnuj</button> 
                <button class="btn-normal" onClick="modifyBooking(${id})">Modyfikuj</button>
                </div>
            `;
        });
        box.innerHTML= "<h1>Aktualne wypożyczenia:</h1>"+zawartosc;
    }
    else{
        box.innerHTML= "";
    }
    
}
//Usuwanie wybranego wypożyczenia
function deleteBooking(id) {
    let bookings = JSON.parse(localStorage.getItem('bookings'));
   bookings.splice(id, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    renderBookings();
}
//modyfikacja wybranego wypożyczenia
function modifyBooking(id) {
    let bookings = JSON.parse(localStorage.getItem('bookings'));
    let booking = bookings[id];
    document.getElementById('fullname').value = booking.fullname;
    document.getElementById('age').value = booking.age;
    document.getElementById('phone').value = booking.phone;
    document.getElementById('carsList').value = booking.car;
    document.getElementById('localization').value = booking.localization
    document.getElementById('date-start').value = booking.dateStart
    document.getElementById('date-end').value = booking.dateEnd
    document.querySelector('input[name="platnosc"]:checked').value = booking.payment
    deleteBooking(id);
}
//Dynamiczne wyświetlanie wypożyczeń po załadowaniu strony
window.addEventListener('load', () => {
    if (localStorage.getItem('bookings')) {
        renderBookings();
    }
});
