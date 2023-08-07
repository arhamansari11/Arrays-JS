console.log("This is the pratice of arrys in the javascript")

let myArray = ["Arham", "Nadeem", "Ansari"]

myArray[2] = "Ahmad";
console.log(myArray["0"] , myArray["1"] , myArray["2"])
// console.clear();

// Arrays Methods

// 1 -> Join Method    => Join a letter or word in array  
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(num.join(" and " ));

  // 2-> Push Method   => Push a new letter or word in array in last
let y =  num.push(34);
console.log(num ,y);

// 3-> Pop Method   => Pop a letter or word means remove the last letter
let r = num.pop();
console.log(num, r)


// 4 -> String Method  => Convert the array into string
console.log(num.toString())

// 5-> Shift Method  => Remove the 1st letter  
let a = num.shift();
console.log(num, a)

// 6-> Unshift Method  => Add the letter or word in array in 1st
let b = num.unshift(98);
console.log(num, b)


// 7 -> Concat Method => Merges the array with another
let arr1 = [1, 2, 3, 4]
let arr2 = [5,6,7,8]
let arr3 = [9,10,11,12]

let newarray = arr1.concat(arr2).concat(arr3);
console.log(...newarray)

// 8-> Deleted Method =>Del the first letter But does not effect the lenght of array

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
delete arr4[7]

console.log(arr4, arr4.length)

// 9-> Reverse Method => Reverse the array
 
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(...arr5.reverse())


// 10-> Sort Method => Sort the array

let compare = (a,b) => {
  return a - b
}

let arr6 = [1, 42, 33, 54, 85, 426, 7, 8, 9, 210]

console.log(arr6.sort(compare))


// 12 -> Splice Method => 1st(Kha se start krna), 2nd(kitne Remove Elemets), 3rd(kitne elements dene ha)

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr7.splice(4, 2 , 12 ,12 ,12)
console.log(arr7)

// 13-> Slice Method 

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newarr8 =  arr8.slice(5)
console.log(newarr8)
