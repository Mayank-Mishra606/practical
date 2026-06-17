function showData(){
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if(name === "" || course === ""){
        alert("Please fill all fields");
        return;
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML =
    `<h3>Student Details</h3>
     <p><b>Name:</b> ${name}</p>
     <p><b>Course:</b> ${course}</p>`;
}