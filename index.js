var url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY';
// var request = new XMLHttpRequest();
// var myJSON = JSON.stringify(url);
// request.open('GET', requestURL);
// window.alert(myJSON);
function getData(){
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJSON) {
            var spaceObj = JSON.stringify(myJson.near_earth_objects);
            id = myJSON.near_earth_objects.id;
            name = myJSON.near_earth_objects.name;
            console.log(name);

        });
        
  };

//   this.getResponseHeaders(near_earth_objects, id);



   

