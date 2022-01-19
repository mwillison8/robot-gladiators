var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //enemyHealth minus playerAttack; use result to update the value of enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    //Log reulting message to console to confirm that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + ' still has ' + enemyHealth + " health left.");
    }

    //playerHealth minus enemyAttach; use result to update the value of playerHealth variable
    playerHealth = playerHealth - enemyAttack;

    //Log resulting message to console to confirm that it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " +playerHealth + " health remaining."
    );

    //check players health
    if (playerHealth <=0) {
        window.alert(playerName + ' has died!');
    }
    else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
};

fight();