const bugattis = [{
    name: "Chiron",
    rating: 9.4,
    mph: 263,
    }, {
    name: "EB110 SS",
    rating: 7.5,
    mph: 221, 
    }, {
    name: "Veyron",
    rating: 8.3,
    mph: 253,
    }, {
    name: "Veyron SS",
    rating: 8.9,
    mph: 267,
    }, {
    name: "Chiron 300+",
    rating: 9.7,
    mph: 304,
    }]
    export { bugattis }

    function summariseAll(bugattis){
        let bugattiSentenceArray = [];
        for (let i = 0; i < bugattis.length; i++){
          let bugattisName = bugattis[i].name;
          let bugattisRating = bugattis[i].rating;
          let bugattisMph = bugattis[i].mph;
          let bugattiSentence = bugattisName + " rating is " + bugattisRating + " and the speed is " + bugattisMph + "."
          
          bugattiSentenceArray.push(bugattiSentence);

        }
      return bugattiSentenceArray;
    }
      
      console.log(summariseAll(bugattis));

    

    