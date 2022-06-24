module.exports = function toReadable (number) {
   var dozen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    var ty = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
     if(number <= 20){
        return dozen[number]
     }else if(number >=21 && number <= 100 ){
        var a = Math.floor(number / 10);
        var b = number % 10;
        return ty[a - 1] + ' ' + dozen[b]
     } else if(number > 100){
        var c = Math.floor(number / 100);
        var d = number % 100;
            if(d<=20){
                return dozen[c] + ' ' + 'hundred' + ' ' + dozen[d];
            } else{
                var e = Math.floor(d / 10);
                var f = d % 10;
                return dozen[c] + ' ' + 'hundred' + ' ' + ty[e - 1] + ' ' + dozen[f];
            }
     }
  }

