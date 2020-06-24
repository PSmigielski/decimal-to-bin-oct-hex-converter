const test = (val) =>{
    const re = /^[0-9]*$/gm;
    return re.test(val);
}   
const reverseString = (str) => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let convertBinary = (number) =>{
    let binOutput = '';
    let num= parseInt(number);
    let temp = 0;
    while(num>0){
        num = Math.trunc(num)
        temp = Math.trunc(num); 
        if(num % 2 == 0 && num > 0){
            num = temp / 2;
            binOutput += '0';
        }
        else if(num % 2 == 1 && num > 0){
            num = temp / 2;
            binOutput +='1';
        }
        else if(num == 0){
            let bin = reverseString(binOutput);
            return bin;
        }
    }
}
let convertOctal = (number) =>{
    let octOutput = '';
    let num= parseInt(number);
    let temp = 0;
    while(num>0){
        num = Math.trunc(num)
        temp = Math.trunc(num); 
        if(num % 8 == 0 && num > 0){
            num = temp / 8;
            octOutput += '0';
        }
        else if(num % 8 > 0 && num > 0){
            switch(num % 8){
                case 1:
                    octOutput += '1';
                    break;
                case 2:
                    octOutput += '2';
                    break;
                case 3:
                    octOutput += '3';
                    break;
                case 4:
                    octOutput += '4';
                    break;
                case 5:
                    octOutput += '5';
                    break;
                case 6:
                    octOutput += '6';
                    break;
                case 7:
                    octOutput += '7';
                    break;
            }
            num = temp / 8;
        }
        else if(num == 0){
            let oct = reverseString(octOutput);
            return oct;
        }
    }
}
let convertHex = (number) =>{
    let hexOutput = '';
    let num= parseInt(number);
    let temp = 0;
    while(num>0){
        num = Math.trunc(num)
        temp = Math.trunc(num); 
        if(num % 16 == 0 && num > 0){
            num = temp / 16;
            hexOutput += '0';
        }
        else if(num % 16 > 0 && num > 0){
            switch(num % 16){
                case 1:
                    hexOutput += '1';
                    break;
                case 2:
                    hexOutput += '2';
                    break;
                case 3:
                    hexOutput += '3';
                    break;
                case 4:
                    hexOutput += '4';
                    break;
                case 5:
                    hexOutput += '5';
                    break;
                case 6:
                    hexOutput += '6';
                    break;
                case 7:
                    hexOutput += '7';
                    break;
                case 8:
                    hexOutput += '8';
                    break;
                case 9:
                    hexOutput += '9';
                    break;
                case 10:
                    hexOutput += 'A';
                    break;
                case 11:
                    hexOutput += 'B';
                    break;
                case 12:
                    hexOutput += 'C';
                    break;
                case 13:
                    hexOutput += 'D';
                    break;
                case 14:
                    hexOutput += 'E';
                    break;
                case 15:
                    hexOutput += 'F';
                    break;
            }
            num = temp / 16;
        }
        else if(num == 0){
            let hex = reverseString(hexOutput);
            return hex;
        }
    }
}
console.log(convertHex('85'));
document.querySelector('.confirm').addEventListener('click', ()=>{
    if(test(document.querySelector('#decimal').value) == false) alert('give a number!');
    else if(parseInt(document.querySelector('#decimal').value)>9007199254740991) alert('this number is too big!');//max safe intiger
    else {
        switch(document.querySelector('.selectList').options[document.querySelector('.selectList').selectedIndex].value){
            case 'bin':
                document.querySelector('#converted').innerHTML = convertBinary(document.querySelector('#decimal').value);
                break;
            case 'hex':
                document.querySelector('#converted').innerHTML = convertHex(document.querySelector('#decimal').value);
                break;
            case 'oct':
                document.querySelector('#converted').innerHTML = convertOctal(document.querySelector('#decimal').value);
                break;
            default:
                console.log('choose number system!')
                break;
        }
    }
});