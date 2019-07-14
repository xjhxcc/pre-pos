'use strict';

function countSameElements(collection) {
	let result=[];
	let num=1;
	for(let i=0;i<collection.length;i++){	 
		if(collection[i].length>1){
			result.push({key:collection[i].split('-')[0],count:parseInt(collection[i].split('-')[1])});
		}else{
			if(collection[i]===collection[i+1]){
				num++;
			}else{
				result.push({key:collection[i],count:num});
				num=1;
			}
		}
	}
	return result;
}
