const teamsContainer = document.querySelector(".container")

//console.log(teamsContainer);

const apiCall = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

async function teamApi(){

try{

  const response = await fetch(apiCall);
 
  const teams = await response.json();

  console.log(teams);

  teamsContainer.innerHTML ="";

  //let names = {teams[i].teamName};

 for (let i = 0; i < teams.length; i++) {
  console.log(teams[i].teamName);
  if (i === 14 ){
    break;  
  }

  teamsContainer.innerHTML += `<div class="container">
                               <h4>Teamname: ${teams[i].teamName}</h4>
                               <p>Location: ${teams[i].location}</p>
                               <p>ID: ${teams[i].teamId}</p>
  
                                </div> `;

}
     
 }catch(error){
   console.log(error);
   teamsContainer.innerHTML = message("error", error);
   
 }

}

teamApi()