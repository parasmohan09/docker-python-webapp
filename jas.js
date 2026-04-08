document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let s1 = parseInt(document.getElementById("sub1").value);
    let s2 = parseInt(document.getElementById("sub2").value);
    let s3 = parseInt(document.getElementById("sub3").value);  

    let total = s1 + s2 + s3;
    let avg = total / 3;

    fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            total: total,
            avg: avg
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerHTML =
            `Name: ${data.name} <br> Total: ${data.total} <br> Avg: ${data.avg}`;
    });
});