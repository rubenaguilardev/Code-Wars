// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
// Examples

// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']


function capMe(names) {
  let lowerCaseNames = names.map(name => name.toLowerCase())
  let capitalizedNames = lowerCaseNames.map(name => name.replace(name[0], name[0].toUpperCase()))
  return capitalizedNames
  }


