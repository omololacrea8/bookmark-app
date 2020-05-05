//listen for form submit
document.getElementById('myForm').addEventListener('submit', (e) => {
    console.log("it works");
    e.preventDefault(); //trying to access the events object of tis particular function
});

