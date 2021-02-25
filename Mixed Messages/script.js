const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

const footballIndex = {
    club: ['Barcelona', 'Real Madrid', 'Bayern Munich', 'P$G', 'Man City'],
    pos: ['Striker', 'Winger', 'Midfielder', 'Defender', 'Goalkeeper'],
    country:['Germany', 'Spain', 'France', 'Argentina'] 
};

let message = [];

for (let info in footballIndex){
    let num = generateRandomNumber(footballIndex[info].length);
    if(info === 'club'){
        message.push(`You are player at ${footballIndex[info][num]} football club.`);
    } else if (info === 'pos'){
        message.push(`You play in the ${footballIndex[info][num]} position.`)
    } else if (info === 'country'){
        message.push(`You are from the country of ${footballIndex[info][num]}.`)
    }
}

  function formatInfo(){
    const formatted = message.join('\n')
    console.log(formatted)
  }
  
  formatInfo();