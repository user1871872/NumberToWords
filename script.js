const ones = {
  0: "",
  1: "ONE",
  2: "TWO",
  3: "THREE",
  4: "FOUR",
  5: "FIVE",
  6: "SIX",
  7: "SEVEN",
  8: "EIGHT",
  9: "NINE",
  10: "TEN",
  11: "ELEVEN",
  12: "TWELVE",
  13: "THIRTEEN",
  14: "FOURTEEN",
  15: "FIFTTEEN",
  16: "SIXTEEN",
  17: "SEVENTEEN",
  18: "EIGHTEEN",
  19: "NINETEEN",
};

const prefixes = {
  2: "TWENTY",
  3: "THIRTY",
  4: "FOURTY",
  5: "FIFTY",
  6: "SIXTY",
  7: "SEVENTY",
  8: "EIGHTY",
  9: "NINETY",
};


function toWords(){
  const number = document.getElementById('num').value;
  const result1 = ones[number]; 

  if (+num.value in ones) {
    document.getElementById('result').setAttribute('value', result1);
  }

  const numArray = num.value.split("");

  if (numArray.length === 2 && +num.value > 19) {
    document.getElementById('result').setAttribute('value', prefixes[numArray[0]]+ " " + ones[numArray[1]], result);
  }

  if (numArray.length === 3) {
    if (+numArray[1] === 0) {
      document.getElementById('result').setAttribute('value', ones[numArray[0]]+ " " + "HUNDRED" + " " + ones[numArray[2]], result);
    } 
    else if(+numArray[1] < 2)
     {
   document.getElementById('result').setAttribute('value', ones[numArray[0]] + " " + "HUNDRED" + " " +  ones[+[numArray[1], +  numArray[2]].join("")], result);
    }
    else
     {
    document.getElementById('result').setAttribute('value', ones[numArray[0]]+" " + " HUNDRED " +  prefixes[numArray[1]] +  " " + ones[numArray[2]], result);
  }
}
if (numArray.length === 3) {
    if (+numArray[1] === 0) {
      document.getElementById('result').setAttribute('value', ones[numArray[0]]+ " " + "HUNDRED" + " " + ones[numArray[2]], result);
    } 
    else if(+numArray[1] < 2)
     {
   document.getElementById('result').setAttribute('value', ones[numArray[0]] + " " + "HUNDRED" + " " +  ones[+[numArray[1], +  numArray[2]].join("")], result);
    }
    else
     {
    document.getElementById('result').setAttribute('value', ones[numArray[0]]+" " + " HUNDRED " +  prefixes[numArray[1]] +  " " + ones[numArray[2]], result);
  }
}
if (numArray.length === 3) {
  if (+numArray[1] === 0) {
    document.getElementById('result').setAttribute('value', ones[numArray[0]]+ " " + "HUNDRED" + " " + ones[numArray[2]], result);
  } 
  else if(+numArray[1] < 2)
   {
 document.getElementById('result').setAttribute('value', ones[numArray[0]] + " " + "HUNDRED" + " " +  ones[+[numArray[1], +  numArray[2]].join("")], result);
  }
  else
   {
  document.getElementById('result').setAttribute('value', ones[numArray[0]]+" " + " HUNDRED " +  prefixes[numArray[1]] +  " " + ones[numArray[2]], result);
}
}
if (numArray.length === 4) {
  if (+numArray[1] === 0) {
    document.getElementById('result').setAttribute('value', ones[numArray[0]] + " " +  "THOUSAND" + ones[numArray[1]]+ " " + ones[numArray[3]], result);
  } 
  else if(+numArray[1] < 2)
   {
    document.getElementById('result').setAttribute('value', ones[numArray[0]] + " " + " THOUSAND" + ones[numArray[1]] + " " + "HUNDRED" + " " +  ones[+[numArray[2]  +  numArray[3]].join("")], result);
  }
  else
   {
document.getElementById('result').setAttribute('value', ones[numArray[0]]+ " " + "THOUSAND " + ones[numArray[1]] + " " + "HUNDRED"+ " " + prefixes[numArray[2]]+ " "  + " " + ones[numArray[3]], result);
}
}
/*if(numArray.length === 4){
  if(+numArray[1] === 0){
    document.getElementById('result').setAttribute('value', ones[numArray[0]] + " THOUSAND " +  ones[numArray[1]] +  " " + prefixes[numArray[2]], result);
  }
}*/

}