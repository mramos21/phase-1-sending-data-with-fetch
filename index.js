// Add your code here
/*const formData = {
  dogName: 'Byron',
  dogBreed: 'Poodle',
};

const configurationObject = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(formData),
};

fetch('http://localhost:3000/dogs', configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error){
    alert('Bad things! Ragnarők!');
    console.log(error.message);
});*/



function addContact(id) {
 document.querySelector('body').innerHTML = id;
 }

function submitData(name, email){
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
  .then(response => response.json())
  .then(body => addContact(body.id))
  .catch(function (error) {
    alert(error)
    document.body.append(error);
  })
}

