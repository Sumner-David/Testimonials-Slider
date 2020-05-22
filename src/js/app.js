

//Get all elements needed for the transitions
const prevButton = document.querySelector('.leftArrow');
const nextButton = document.querySelector('.rightArrow');
const personImage = document.querySelector('.person');
const quote = document.querySelector('.quote');
const name = document.querySelector('.name');
const jobTitle = document.querySelector('.name span');

const johnQuote = '" If you want to lay the best foundation possible I\'d recommend taking this course.The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer."';

const tanyaQuote = '" I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\' t recommend this course enough.I\' m now in the job of my dreams and so excited about the future."';



const transitions = function() {

    //Add listener to buttons
    prevButton.addEventListener('click', function(event){

        if(personImage.getAttribute('src') === 'images/image-tanya.jpg') {
            personImage.setAttribute('src', 'images/image-john.jpg');
            quote.textContent = johnQuote;
            name.innerHTML = 'John Tarkpor <span> Junior Web-Developer</span>';
            

        }else {
            personImage.setAttribute('src', 'images/image-tanya.jpg');
            quote.textContent = tanyaQuote;
            name.innerHTML = 'Tanya Sinclair <span> UX Engineer</span>';
        }
    }); 
    
    nextButton.addEventListener('click', function (event) {

        if (personImage.getAttribute('src') === 'images/image-tanya.jpg') {
            personImage.setAttribute('src', 'images/image-john.jpg');
            quote.textContent = johnQuote;
            name.innerHTML = 'John Tarkpor <span> Junior Web-Developer</span>';


        } else {
            personImage.setAttribute('src', 'images/image-tanya.jpg');
            quote.textContent = tanyaQuote;
            name.innerHTML = 'Tanya Sinclair <span> UX Engineer</span>';
        }
    });

    
}

const app = function() {
    transitions();
}

app();
