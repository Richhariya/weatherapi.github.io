

     var button = document.querySelector('.button')
     var inputValue = document.querySelector('.inputValue')
     var namee = document.querySelector('.name');
     var desc = document.querySelector('.desc');
     var temp = document.querySelector('.temp');

     button.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e44da51e45928d6603b0d6dbfe0ace11')
           .then(response => response.json())
           .then(data => {
            var nameValue = data['name'];
            var temperatureValue = data['main']['temp'];
            var descriptionValue = data['weather'][0]['description'];

            namee.innerHTML = nameValue;
            temp.innerHTML = temperatureValue;
            desc.innerHTML = descriptionValue;
        })
        .catch(err => alert('Wrong city name!'))
     })

     

