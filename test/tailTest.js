const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"].toString());
assertEqual(tail([" Lighthouse"].toString()), ["Lighthouse"].toString());
assertEqual(tail([].toString()), [].toString());
assertEqual(tail([" 6"].toString()), [6].toString());