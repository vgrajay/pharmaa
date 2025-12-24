// Block access if not logged in
if (sessionStorage.getItem("admin") !== "true") {
    window.location.href = "login.html";
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function addMedicine() {
    const med = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("qty").value,
        expiryDate: document.getElementById("expiry").value,
        company: document.getElementById("company").value
    };

    fetch("/api/pharma/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-ADMIN": "true"
        },
        body: JSON.stringify(med)
    })
    .then(res => res.text())
    .then(msg => alert(msg));
}
