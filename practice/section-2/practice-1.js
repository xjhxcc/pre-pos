'use strict';

function countSameElements(collection) {
  var collection_a=[];
  var m={};
  for (let i = 0; i <collection.length ; i++) {
    if (collection[i] in m) {
      m[collection[i]]=m[collection[i]] + 1;
    }
    else {
      m[collection[i]]=1;
    }
  }
  for (var key in m) {
    var temp={};
    temp['key']=key;
    temp['count']=m[key];
    collection_a.push(temp);
  }
   return collection_a;
  return result;
}
