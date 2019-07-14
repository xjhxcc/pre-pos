'use strict';

function countSameElements(collection) {
  for (let i = 0; i < collection.length; i++) {
        if (collection[i].length > 0) {
            let num = parseInt(collection[i].replace(/[^\d]/g, ''));//匹配到数字
            collection[i] = collection[i][0];
            for (let j = 0; j < num - 1; j++) {
               collection.splice(i, 0, collection[i]);           
            }
        }
    }
    let result = [];
    let num = 1;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === collection[i + 1]) {
            num++;
        } else {
            result.push({ name: collection[i], summary: num });
            num = 1;
        }
    }
    return result;
}