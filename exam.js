
 /*
1 print all car brands
2 total of car avai
3 print sudan car del
4 eprint  car with price /day greater than 60
5 det of jeep car
6 sort decending order of price per day
7 sort cars based on ascending order of aval cars
8 find the car with most avalable
9 calculate the revenue if all cars are rented for a day
10 count the no of sudan cars 
11 print all car brands
12 find total no of aval car of all types
13 find the cars with least avalablilty
14 check if there is any car with a price per day exacty 55


*/
//[id 0, brand 1 , model 2 , type 3 , pricePerDay 4, available 5]
let carBooking =[
    [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
    [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
    [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
    [4,'Jeep','Wrangler' , 'SUV' ,70 ,7],
    [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];


// 1 print all car brands
console.log("--------------1 print all car brands-------------------");
carBooking.forEach(item=>console.log(item[1]))
console.log("******************************************************");

// 2 total of car avai
console.log("--------------2 total of car avai------------------");
tot1=carBooking.map(item=>item[5]).reduce((a,b)=>a+b)
        console.log(tot1);

console.log("******************************************************");

// 3 print sudan car del
console.log("--------------3 print sudan car del-----------------");
a=carBooking.filter((item)=>item[3]=='Sedan')
console.log(a);
console.log("******************************************************");

//4 print  car with price /day greater than 60
console.log("--------------4 eprint  car with price /day greater than 60----------------");
a=carBooking.filter((item)=>item[4]>60)
console.log(a);
console.log("******************************************************");

// 5  det of jeep car
console.log("------------- 5  det of jeep ---------------");
a=carBooking.find((item)=>item[1]=='Jeep')
console.log(a);
console.log("******************************************************");
//6 sort decending order of price per day
console.log("-----------6--sort decending order of price per day-------------");
a=carBooking.sort((a,b)=>b[4]-a[4])
console.log(a);
console.log("******************************************************");

// 7 sort cars based on ascending order of aval ca
console.log("----------7 sort cars based on ascending order of aval ca----------");
a=carBooking.sort((a,b)=>a[5]-b[5])
console.log(a);
console.log("******************************************************");


//8 find the car with most avalable
console.log("----------8 find the car with most avalable---------");
a=carBooking.sort((a,b)=>b[5]-a[5]);
console.log(a[0][1])
console.log("******************************************************");



// //9 calculate the revenue if all cars are rented for a day

console.log("----------9 calculate the revenue if all cars are rented for a day--------");
a=carBooking.sort((a,b)=>a[5]-b[5]);
console.log(a[0][1])
console.log("******************************************************");

// //9 calculate the revenue if all cars are rented for a day

console.log("----------9 calculate the revenue if all cars are rented for a day--------");


tot1=carBooking.map(item=>item[4]).reduce((a,b)=>a+b)
        console.log(tot1);


console.log("******************************************************");

//10 count the no of sudan cars 

console.log("----------10 count the no of sudan cars -------");

tot1=carBooking.map(item=>item[3]=='Sedan').reduce((a,b)=>a+b)
        console.log(tot1);
console.log("******************************************************");


// 11 print all car brands


console.log("----------11 print all car brands-------");
carBooking.filter((item)=>item[1]).forEach(a=>console.log(a[1]))
console.log("******************************************************");


//12 find total no of aval car of all types
console.log("---------12 find total no of aval car of all types------");
;

tot=carBooking.map(item=>item[5]).reduce((a,b)=>a+b)
        console.log(tot);
console.log("******************************************************");

//13 find the cars with least avalablilty
console.log("-------13 find the cars with least avalablilty------");
;

tot=carBooking.map(item=>item[1]).sort((a,b)=>a[5]-b[5])
        console.log(tot[0]);
console.log("******************************************************");


//14 check if there is any car with a price per day exacty 55
console.log("------14 check if there is any car with a price per day exacty 55-----");
;

a=carBooking.some(item=>item[4]==55)
        console.log(a);
console.log("******************************************************");






