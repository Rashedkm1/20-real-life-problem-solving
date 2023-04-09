//Problem 1: Given an array of numbers, Find the smallest number.

// const findTheSmallestNumbers = (arr) => {
//     let smallest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         let num = arr[i];
//         if(num < smallest) {
//             smallest = num;
//         }
//     }
//     return smallest;
// };

// const numbers = [4, 2, 7, 1, 8];
// const findSmallest = findTheSmallestNumbers(numbers);
// console.log(findSmallest);


//=================== problem 2 ==========================

//Problem 2: Given an Array of numbers, Find the largest number.

// Method 1:
// const findLargestNumber = (arr) => {
//     let largest = arr[0];
//     arr.filter(num => num > largest ? largest = num: num );
//     return largest;
// }
// const numbers = [4, 2, 7, 1, 8];
// const findLargest = findLargestNumber(numbers);
// console.log(findLargest);

//Method 2:
// const findLargestNumber = (arr) => {
//     return arr.reduce((large, curr) => large > curr? large: curr);
// }
// const numbers = [4, 45, 2, 7, 1, 8];
// const findLargest = findLargestNumber(numbers);
// console.log(findLargest);

//Mehtod 3:
// const findLargestNumber = (arr) => {
//     return Math.max(...arr);
// }
// const numbers = [4, 2, 7, 1, 8];
// const findLargest = findLargestNumber(numbers);
// console.log(findLargest);


//================ problem 3 ====================

//Problem 3: Given an array of numbers. Find the sum of all numbers.

// const sumOfAllNumbers = (arr) => {
//     return arr.reduce((sum, curr) => sum + curr, 0);
// };
// const numbers = [4, 2, 7, 1, 8];
// const calculation = sumOfAllNumbers(numbers);
// console.log(calculation);

//================ problem 4 ====================
//Problem 4: Given an array of strings, create a new array with the first letter of each string;

// const createNewArray = (arr) => {
//     let newArr = [];
//     for(let i = 0;  i < arr.length; i++){
//         let fLetter = arr[i].charAt(0)
//         newArr.push(fLetter)       
//     }
//     return newArr;
// };

// const strings = ["hello", "world", "foo", "bar"];
// console.log(createNewArray(strings));

//================ problem 5 ====================
//Problem 5: Given an array of numbers, create a new array with only the even numbers.

// const newArrayWithEvenNums = (arr) => {
//     return arr.filter(num => num % 2 === 0);
// };  
// const numbers = [1, 2, 3, 4, 5];
// console.log(newArrayWithEvenNums(numbers));

//================ problem 6 ====================
//Problem 6: Given an array of strings, find the longest string;

// const findLongestString = (arr) => {
//     let largest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(largest.length < arr[i].length){
//             largest = arr[i];
//         }        
//     }
//     return largest;
// };
// const strings = ["hello", "world", "foo", "bar"];
// console.log(findLongestString(strings));

//================ problem 7 ====================
//Problem 7: Given an array of numbers, find the average;

// const findAverage = (arr) => {
//     return arr.reduce((accu, curr) => accu + curr, 0) / arr.length;
// };
// const numbers = [1, 2, 3, 4, 5];
// const calAverage = findAverage(numbers);
// console.log(calAverage);


//================ problem 8 ====================
//Problem 8: Given an array of strings, sort them in alphabetical order;

// const sorAlphabeticalOrder = (arr) => {
//     return arr.sort();
// };

// const strings = ["avijit", "hello", "world", "foo", "bar"];
// const sortAlphaOrder = sorAlphabeticalOrder(strings);
// console.log(sortAlphaOrder);

//================ problem 9 ====================
//Problem 9: Given an array of numbers, remove all duplicates

// const removeDuplicate = (arr) => {
//     let uniqueArr = [];
//     for(let i = 0; i < arr.length; i++){
//         let num = arr[i];
//         if(uniqueArr.indexOf(num) !== arr.indexOf(num)){
//             uniqueArr.push(num);
//         }
//     }
//     return uniqueArr;
// };
// const number = [1, 2, 3, 4, 2, 3];
// console.log(removeDuplicate(number));


//================ problem 10 ====================
//Problem 10: Given an array of integers, find two numbers that add up to a target value;

// const findTwoNumbers = (arr, target) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [arr[i], arr[j]]
//             }
//         }
        
//     }
//     return null
// };
// const numbers = [2, 4, 6, 8, 10];
// const target = 12;
// const result = findTwoNumbers(numbers, target);
// console.log(result); 


//================ problem 11 ====================
//Problem 11: A food ordering app needs to sort the menu item by price;

// const menuItems = [
//     {name: "Burger", price: 5.99},
//     {name: "Fries", price: 2.99},
//     {name: "Soda", price: 1.99},
//     {name: "Pizza", price: 10.99},
// ];

// const sortItems = (arr) => {
//     return arr.sort((a, b) => a.price - b.price);
// }; 
// console.log(sortItems(menuItems));

//================ problem 12 ====================
//Problem 12: A social media app needs to find all unique hashtags used in a user post.

//Example 1:
// const userPost = [
//     "Just went for a #run #fitness",
//     "Enjoying the #weekend #friends",
//     "Can't wait for the #vacation #beach"
//   ];
  
//   const findHashtags = (arr) => {
//     let hastags = [];
//     for(let i = 0; i < arr.length; i++){
//         let el = arr[i]
//         let word = el.split(" ");
//         for(let j = 0; j < word.length; j++){
//             if(word[j].startsWith('#')){
//                 hastags.push(word[j]);
//             }
            
//         }
//     }
//     return hastags;
//   };
  
//   console.log(findHashtags(userPost)); 

  //Example 2:
//   const post = [
//     {id: 1, content: "Check out my #cat pictures! #cute #feline"},
//     {id: 1, content: "I love #coffee! #caffeineaddict"},
//     {id: 1, content: "Just finished a great #workout! #fitnessgoals"}
//   ];

//   const findHashtags = (arr) => {
//     let hashtags  = [];
//     for(let i = 0; i < arr.length; i++){
//         let words = arr[i]["content"].split(" ");
//         for(let j = 0; j < words.length; j++){
//             if(words[j].startsWith('#')){
//                 hashtags.push(words[j]);
//             }
//         }        
//     }
//     return hashtags;
//   };
//   console.log(findHashtags(post));


//================ problem 13 ====================
//Problem 13: A Weather app needs to format a list of temperatures in Celsius and Fahrenheit for display.

// const temperatures = [12, 25, 8, 19, 3];

// const tempToFahrenheit = (arr) => {
//   return arr.map(temp => {
//     const fahrenheit = (temp * 1.8) + 32;
//     return `${temp}°C (${fahrenheit.toFixed(1)}°F)`
//   });
  
// };

// console.log(tempToFahrenheit(temperatures));



//================ problem 14 ====================
//Problem 14: A video sharing site needs to keep track of the number of views, likes and comments on each video.

// const videos = [
//   {
//     id: "abc123",
//     title: "How to code a React App",
//     views: 1000,
//     likes: 50,
//     comments: [
//       {id: "c1", text: "great tutorials"},
//       {id: "c2", text: "thanks for sharing"}
//     ],
//   },
//   {
//     id: "d3f43",
//     title: "Building a REST API with node.js",
//     views: 500,
//     likes: 25,
//     comments: [
//       {id: "c3", text: "very helpful, thanks"},
//       {id: "c4", text: "can't wait to try this out"}
//     ],
//   },
// ];
  //Increment the view count fo the video
// const incrementViewCount = (videoId) => {
//   const video = videos.find(v => v.id === videoId);
//   video.views += 1;
//   console.log(`View count for video ${videoId}: ${video.views}`);
// };

  //Add a comment to the video.

// let addComment = (videoId, comment) => {
//   const video = videos.find(v => v.id === videoId);
//   video.comments.push(comment);
//   console.log(`Comment for the video ${videoId}:`,  video.comments);
// };

// addComment("d3f43", {id: "c5", text: "this is second"});



//================ problem 15 ====================
//Problem 15: Facebook needs to keep track of the number of reactions(like, love, haha, wow, sad, angry) on each post.

// const posts = [
//   {
//     id: "_1",
//     author: "Avijit Saha",
//     content: "JavaScript 100 Basic Problems!",
//     reactions: {
//       like: 50,
//       love: 20,
//       haha: 5,
//       wow: 2,
//       sad: 1,
//       angry: 0,
//     },
//   },
//   {
//     id: "_2",
//     author: "Avijit Saha",
//     content: "JavaScript 100 Basic Problems!",
//     reactions: {
//       like: 50,
//       love: 20,
//       haha: 5,
//       wow: 2,
//       sad: 1,
//       angry: 0,
//     },
//   }
// ];

// const incrementReactionCount = (postId, reactionType) => {
//   const post = posts.find(p => p.id === postId);
//   post.reactions[reactionType] += 1;
//   console.log(`Incrimented ${reactionType} reaction type for the post ${postId}`);
// };
// incrementReactionCount("_2", "like");

//================ problem 16 ====================
//Problem 16: Based on Finding the two numbers that add up to a target Value.

// const findFrequentlyPurchasedPairs = (arr, tVal) => {
//   const piars = [];

//   for(let i = 0; i < purchases.length; i++){
//     const product1 = purchases[i];
//     for(let j = i + 1; j < purchases.length; j++){
//       const product2 = purchases[j];
//       if(product1 + product2 == target){
//         piars.push([product1, product2]);
//       }
//     }    
//   }
//   return piars;
// }

// const purchases = [1,2,3,4,5,1,3,5,6,7,2,4,8,9,9];
// const target = 10;

// console.log(findFrequentlyPurchasedPairs(purchases, target));

//================ problem 17 ====================
//Problem 17: A restaurant wants to keep track of its inventory of ingredients for various dishes. the restaurant's chefs need to be able to easy update the inventory levels for each ingredients as they use them in dishes.

// const ingredients = [
//   {name: "dough", inventory: 10},
//   {name: "tomato sauce", inventory: 8},
//   {name: "mozzarella cheese", inventory: 6},
//   {name: "pepperoni", inventory: 4},
//   {name: "mashrooms", inventory: 3}
// ];
// function to update inventory level for a given ingredients.

// const updateInventory = (name, quentity) => {
//   const ingredient = ingredients.find(i => i.name === name)
//   if(ingredient){
//     ingredient.inventory -= quentity;
//     return `ingredient update for ${name}: ${ingredient.inventory} remaining`
//   } else {
//     return `ingredient ${name} not found`
//   }

// };

// console.log(updateInventory("dough", 2));



//================ problem 18 ====================
//Problem 18: Given an array of object representing products, sort the product by price form lowest to highest.



// const sortPrice = (arr) => {
//   return arr.sort((a, b) => a.price - b.price);
// };
// const product = [
//   {name: "iPhone 13", price: 999},
//   {name: "pixel 6", price: 749},
//   {name: "galaxy s21", price: 699},
//   {name: "onePlus 9 pro", price: 969},
// ];
// console.log(sortPrice(product));




//================ problem 19 ====================

//Problem 19: Suppose you have an array of object representing people, and you want to filter the array include who are over 18 years old.


// const printAgeOver18 = (arr) => {
//   return arr.filter(person => person.age > 18);
// };

// const people = [
//   {name: "Alice", age: 25},
//   {name: "Bob", age: 17},
//   {name: "Charlie", age: 21},
//   {name: "David", age: 14},
// ];
// console.log(printAgeOver18(people));



//================ problem 19.1 ====================

//Problem 19.1: Suppose you have list of books and you want to allow users to search for a book by it's title. You could represent the list of books as an array of object, where each object represent a book with a title, author and year of puplication.

// const books = [
//   { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
//   { title: "To Kill  a Mockingbird", author: "Harper Lee", year: 1960 },
//   { title: "1984", author: "George Orwell", year: 1949 },
// ];
// search function
// const searchBooks = (books, searchText) => {
//   const matchingBooks = books.filter(book => {  
//     const {title, author, year} = book  
//     return title.toLowerCase().includes(searchText.toLowerCase()) ||
//            author.toLowerCase().includes(searchText.toLowerCase()) ||
//            year.toString().toLowerCase().includes(searchText.toLowerCase());          
//   });
//   return matchingBooks  
// }
// const queryText = "Kill";
// const matchingText = searchBooks(books, queryText);


// break the array and print string formate
// if(matchingText.length > 0){
//   matchingText.forEach((book) => {
//     console.log(`- ${book.title} by ${book.author}, published in ${book.year}`);
//   });
// }else {
//   console.log(`No books found matching '${searchText}'`);
// }


//================ problem 19.2 ====================

//Problem 19.2: Suppose you have a list of google search results and you want to allow users to filter the results by the domain of the website. you could represent the list of search results as an array of objects, where each object represents a search result with a title, URL, and description

// const searchResults = [
//   { 
//   title: "Google", 
//   url: "https://www.google.com", 
//   description: "Search the world's information, including webpages, images, videos and more." 
//   },

//   { 
//   title: "Wikipedia", 
//   url: "https://en.wikipedia.org", 
//   description: "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world." 
//  },

//   { 
//   title: "GitHub", 
//   url: "https://github.com", 
//   description: "GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it." 
//  }
// ];


// const filterResult = (results, domain) => {
//   return results.filter(result => result.url.includes(domain));
// }

// console.log(filterResult(searchResults, "google"));

//================ problem 20 ====================
//Problem 20: In a web application that displays a list of products with their prices in different currencies. Let's say that we have an array of products, where each product has a name and a price property in USD. We want to display a list of these products with their prices converted to a different currencies, besed on the user's preferences.


// const products = [
//   {name: "iPhone", price: 999},
//   {name: "MacBook", price: 1499},
//   {name: "AirPods", price: 249},
// ];
// const currencyExchangeRate = 0.85;
// const currencySymbol = '€';

// const porductInEuros = products.map(product => ({
//   name: product.name,
//   price: product.price * currencyExchangeRate,
//   formatedPrice: `${currencySymbol}${(product.price * currencyExchangeRate).toFixed(2)}`
// }));

// console.log(porductInEuros);
