const min = 1;
const max = 100;
let guess;
let atempts = 0;
const randnum = Math.floor(Math.random() * (max - min + 1))+ min;
window.prompt(randnum);
let running = true;

while(running){
    guess = window.prompt(`Guess the number between ${min} - ${max}.`)
    guess = Number(guess);

    if (isNaN(guess)){
        window.alert(`enter valied number`);
    }
    else if(guess > max || guess < min){
        window.alert(`enter valied number`);
    }
    else {
        atempts++;
        if(guess > randnum){
            window.alert(`guess is high`);
        }
        else if(guess < randnum){
            window.alert(`guess is low`);
        }
        else{
            window.alert(`crt. the answer is ${randnum}, ur attenpts ${atempts}.`);
            running = false;
        }
    }
}
