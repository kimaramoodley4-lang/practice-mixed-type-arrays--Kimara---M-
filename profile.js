// Task 1: Create the Profile
// Elements: Name (string), Age (number), Subscribed (boolean), Location (string), Hobbies (array)
let hobbies = ["Photography", "Gaming"];
let profile = ["John Doe", 25, true, "Cape Town", hobbies];

// Task 2: Access and Log Profile Details
console.log("User Name:", profile[0]); 

// The hobbies array is at index 4. The second hobby is at index 1 of THAT array.
console.log("Second Hobby:", profile[4][1]);

// Task 3: Modify the Profile
profile[1] = 26; // Update age
profile[4].push("Coding"); // Add a new hobby to the nested array

// Task 4: Display the Updated Profile
console.log("Updated Profile:", profile);
