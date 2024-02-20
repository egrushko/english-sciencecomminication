export function getSymbolWidth(symbol) {
    if (!symbol) return 0
    const isLowerCase = symbol.toLowerCase() === symbol
    switch(symbol){
        case "a":
          return isLowerCase ? 1.02 : 1.1;
        case "b":
          return isLowerCase ? 1.115 : 1.195;
        case "c":
          return isLowerCase ? 0.88 : 1.1;
        case "d":
          return isLowerCase ? 1.125 : 1.25;
        case "e":
          return isLowerCase ? 1 : 1.08;
        case "f":
          return isLowerCase ? 0.585 : 1;
        case "g":
          return isLowerCase ? 1.02 : 1.25;
        case "h":
          return isLowerCase ? 1.11 : 1.32;
        case "i":
          return isLowerCase? 0.505 : 0.53;
        case "j":
          return isLowerCase ? 0.51 : 0.92;
        case "k":
          return isLowerCase ? 1 : 1.18;
        case "l":
          return isLowerCase ? 0.55 : 0.985;
        case "m":
          return isLowerCase ? 1.75 : 1.5;
        case "n":
          return isLowerCase ? 1.15 : 1.325;
        case "o":
          return isLowerCase ? 1.1 : 1.36;
        case "p":
          return 1.15;
        case "q":
          return isLowerCase ? 1.15 : 1.35;
        case "r":
          return isLowerCase ? 0.75 : 1.15;
        case "s":
          return isLowerCase ? 0.85 : 1.06;
        case "t":
          return isLowerCase ? 0.68 : 1.1;
        case "u":
          return isLowerCase ? 1.1 : 1.3;
        case "v":
          return isLowerCase ? 0.95 : 1.06;
        case "w":
          return isLowerCase ? 1.45 : 1.6;
        case "x":
          return isLowerCase ? 0.93 : 1.05;
        case "y":
          return isLowerCase ? 0.945 : 0.98;
        case "z":
          return isLowerCase ? 0.87 : 1.06;
        default:
          return 0.405;
    }
}