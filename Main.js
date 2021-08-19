function Romannumer(num) {
    var NumberRoman = "";
    if (typeof num === 'string' || num instanceof String) {
        return ("Is not a number");
    }
    else {
        while (num > 0) {
            if (num < 4) {
                NumberRoman += "I";
                num -= 1;
            }
            else if (num == 4) {
                NumberRoman += "IV";
                num -= 4;
            }
            else if (num >= 5 && num < 9) {
                NumberRoman += "V";
                num -= 5;
            }
            else if (num === 9) {
                NumberRoman += "IX";
                num -= 9;
            }
            else if (num >= 10 && num < 50) {
                NumberRoman += "X";
                num -= 9;
            }
            else if (num >= 40 && num < 50) {
                NumberRoman += "XL";
                num -= 40;
            }
            else if (num >= 50 && num < 90) {
                NumberRoman += "L";
                num -= 50;
            }
            else if (num >= 90 && num < 100) {
                NumberRoman += "XC";
                num -= 90;
            }
            else if (num > 100 && num < 400) {
                NumberRoman += "CX";
                num -= 100;
            }
            else if (num === 100) {
                NumberRoman += "C";
                num -= 100;
            }
            else if (num >= 400 && num < 500) {
                NumberRoman += "CD";
                num -= 400;
            }
            else if (num >= 500 && num < 900) {
                NumberRoman += "D";
                num -= 500;
            }
            else if (num >= 900 && num < 1000) {
                NumberRoman += "CM";
                num -= 900;
            }
            else if (num >= 1000) {
                NumberRoman += "M";
                num -= 1000;
            }
        }
    }
    return NumberRoman;
}
;
exports.Romannumer = Romannumer;
