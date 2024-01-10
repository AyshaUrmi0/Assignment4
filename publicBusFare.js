//reserved bus can carry 50 people
//microbus can carry 11
//rest people will go by public bus
//we have to calculate public bus fair. for each people public bus fare is 250 tk.


function publicusFare(people)
{
    if(typeof people != 'number')
    {
        console.log('Please provide a number');
        return;
    }

    if(people <= 50){
        console.log("they will go by reserved bus");
        return 0;
    }
    else {
        let reserved = 50;
        let micro = 11;
        let publicBus = people - reserved - micro;
        let total = publicBus * 250;
        return total;
    }



}

let result = publicusFare(75);
console.log(result);