// Add your code here
const sampleData = {
    name: "Steve",
    email: "steve@steve.com"
}
//this is our configuration object for the fetch call
const configObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    //the body calls stringify to turn it to json, and then calls our sample dataset above
    body: JSON.stringify(sampleData)
}
function submitData() {
    //call our local json server object users
    fetch('http://localhost:3001/users', configObject)
    //process the response using json()
        .then(function (response) {
            //this returns the json response as an object
            return response.json()
        })
            //this takes the object created and lets us use it as a JS object
        .then(function (object) {
            //call our add to page function passing the object as our param
            addToPage(object.id)
        })
        .catch(function (error) {
            alert("Bad stuff alert - check console")
            console.log(error.message)
            addToPage(error.message)
        }) 
}

//add to page takes data object as param (object above)
function addToPage(data) {
    //make a new li
    const li = document.createElement('li')
    //target the holder ul
    const holder = document.getElementById('holder')
    //append li
    holder.appendChild(li)
    //set LI text to the ID from the object we just added
    li.textContent = data
}
submitData()

