import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysGeneratorService {

  constructor() { }

  getRandomNum(lbound: number, ubound: number) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
  }

  getRandomChar(number: boolean, lower: boolean, upper: boolean, other: boolean, extra: any) {
      const numberChars = "0123456789";
      const lowerChars = "abcdefghijklmnopqrstuvwxyz";
      const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const otherChars = "`~!#@$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
      let charSet = extra;

      if (number == true)charSet += numberChars;
      if (lower == true)charSet += lowerChars;
      if (upper == true)charSet += upperChars;
      if (other == true)charSet += otherChars;
      return charSet.charAt(this.getRandomNum(0, charSet.length));
  }

  // getPassword(55, 'abcdefghijklmnopqrstuvwxyz0123456789*#$@',true, true, false, false, true, true, true, false)
  getKey(length: number,
    extraChars: any,
    firstNumber: boolean,
    firstLower: boolean,
    firstUpper: boolean,
    firstOther: boolean,
    latterNumber: boolean,
    latterLower: boolean,
    latterUpper: boolean,
    latterOther: boolean)
    {
      let rc = "";

      if (length > 0)rc = rc + this.getRandomChar(firstNumber, firstLower, firstUpper, firstOther, extraChars);

      for (let idx = 1; idx < length; ++idx) {
        rc = rc + this.getRandomChar(latterNumber, latterLower, latterUpper, latterOther, extraChars);
      }

      return rc;
    }
}
