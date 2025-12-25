const API = "http://localhost:8081/api";
let isAdmin = false;
let lastExpiredList = []; // <== added to track expired list

/* =======================
   MEDICINE MASTER (JSON)
======================= */
const medicineMaster = [
  { "name": "Paracetamol", "price": 20 },
  { "name": "Pantoprazole", "price": 55 },
  { "name": "Amoxicillin", "price": 80 },
  { "name": "Azithromycin", "price": 120 },
  { "name": "Cetirizine", "price": 15 },
  { "name": "Vitamin C", "price": 30 },
  { "name": "Ibuprofen", "price": 40 },
  { "name": "Metformin", "price": 60 },

  { "name": "Amlodipine", "price": 50 },
  { "name": "Losartan", "price": 75 },
  { "name": "Atorvastatin", "price": 90 },
  { "name": "Simvastatin", "price": 85 },
  { "name": "Clopidogrel", "price": 110 },
  { "name": "Atenolol", "price": 45 },
  { "name": "Ramipril", "price": 70 },
  { "name": "Telmisartan", "price": 95 },

  { "name": "Doxycycline", "price": 95 },
  { "name": "Ciprofloxacin", "price": 100 },
  { "name": "Cephalexin", "price": 85 },
  { "name": "Levofloxacin", "price": 130 },
  { "name": "Clarithromycin", "price": 140 },
  { "name": "Doxycycline SR", "price": 110 },
  { "name": "Amoxiclav", "price": 150 },
  { "name": "Nitrofurantoin", "price": 70 },

  { "name": "Loratadine", "price": 18 },
  { "name": "Fexofenadine", "price": 55 },
  { "name": "Levocetirizine", "price": 22 },
  { "name": "Montelukast", "price": 80 },
  { "name": "Hydroxyzine", "price": 25 },
  { "name": "Chlorpheniramine", "price": 10 },
  { "name": "Desloratadine", "price": 60 },
  { "name": "Ranitidine", "price": 35 },

  { "name": "Omeprazole", "price": 45 },
  { "name": "Rabeprazole", "price": 65 },
  { "name": "Esomeprazole", "price": 90 },
  { "name": "Domperidone", "price": 30 },
  { "name": "Ondansetron", "price": 85 },
  { "name": "Dicyclomine", "price": 28 },
  { "name": "Hydroxide Antacid", "price": 20 },
  { "name": "Sucralfate", "price": 75 },

  { "name": "Gliclazide", "price": 70 },
  { "name": "Glimepiride", "price": 65 },
  { "name": "Sitagliptin", "price": 180 },
  { "name": "Vildagliptin", "price": 175 },
  { "name": "Insulin Regular", "price": 220 },
  { "name": "Insulin NPH", "price": 230 },
  { "name": "Pioglitazone", "price": 55 },
  { "name": "Acarbose", "price": 95 },

  { "name": "Salbutamol Inhaler", "price": 120 },
  { "name": "Budesonide Inhaler", "price": 260 },
  { "name": "Ipratropium Inhaler", "price": 210 },
  { "name": "Theophylline", "price": 40 },
  { "name": "Montelukast-LC", "price": 95 },
  { "name": "Tiotropium", "price": 280 },
  { "name": "Formoterol-Budesonide", "price": 320 },
  { "name": "Levosalbutamol", "price": 75 },

  { "name": "Diclofenac", "price": 35 },
  { "name": "Naproxen", "price": 55 },
  { "name": "Aceclofenac", "price": 60 },
  { "name": "Meloxicam", "price": 50 },
  { "name": "Piroxicam", "price": 45 },
  { "name": "Tramadol", "price": 90 },
  { "name": "Pregabalin", "price": 160 },
  { "name": "Gabapentin", "price": 140 },

  { "name": "Sertraline", "price": 95 },
  { "name": "Escitalopram", "price": 110 },
  { "name": "Fluoxetine", "price": 70 },
  { "name": "Amitriptyline", "price": 55 },
  { "name": "Olanzapine", "price": 130 },
  { "name": "Risperidone", "price": 120 },
  { "name": "Clonazepam", "price": 85 },
  { "name": "Alprazolam", "price": 75 },

  { "name": "Levothyroxine 25mcg", "price": 30 },
  { "name": "Levothyroxine 50mcg", "price": 35 },
  { "name": "Levothyroxine 100mcg", "price": 50 },
  { "name": "Carbimazole", "price": 65 },
  { "name": "Calcitriol", "price": 120 },
  { "name": "Vitamin D3", "price": 60 },
  { "name": "Calcium Carbonate", "price": 55 },
  { "name": "Calcium with D3", "price": 70 },

  { "name": "Iron Folic Acid", "price": 40 },
  { "name": "Multivitamin Tablet", "price": 45 },
  { "name": "Vitamin B Complex", "price": 35 },
  { "name": "Zinc Tablet", "price": 25 },
  { "name": "Folic Acid", "price": 20 },
  { "name": "Vitamin B12", "price": 80 },
  { "name": "L-ornithine L-aspartate", "price": 150 },
  { "name": "Protein Powder", "price": 320 },

  { "name": "Furosemide", "price": 30 },
  { "name": "Spironolactone", "price": 55 },
  { "name": "Hydrochlorothiazide", "price": 35 },
  { "name": "Torsemide", "price": 65 },
  { "name": "Isosorbide Mononitrate", "price": 90 },
  { "name": "Digoxin", "price": 40 },
  { "name": "Warfarin", "price": 75 },
  { "name": "Enoxaparin", "price": 360 }
];

/* =======================
   FORMAT COUNT (K/L/M/B)
======================= */
function formatCount(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 100_000) return (num / 100_000).toFixed(1) + "L";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num;
}

/* =======================
   SCROLL HELPER
======================= */
function scrollTableTop() {
  const table = document.getElementById("table");
  if (table) {
    table.scrollIntoView({ behavior: "smooth", block: "start" }); // keeps table in view[web:13]
  }
}

/* =======================
   LOAD MEDICINES
======================= */
function loadMedicines() {
  fetch(API + "/pharma/all")
    .then(res => res.json())
    .then(data => {
      showTable(data);
      updateStats(data);
      lastExpiredList = []; // reset when showing all
      const deleteBtn = document.getElementById("deleteAllExpiredBtn");
      deleteBtn.classList.add("hidden"); // hide delete-all when not in expired view
      scrollTableTop();
    });
}

/* =======================
   UPDATE DASHBOARD
======================= */
function updateStats(data) {
  document.getElementById("totalMed").innerText = formatCount(data.length);

  const companies = new Set(
    data.map(m => m.company.toLowerCase().trim())
  );
  document.getElementById("totalCompany").innerText =
    formatCount(companies.size);

  const totalQty = data.reduce((s, m) => s + m.quantity, 0);
  document.getElementById("totalQty").innerText =
    formatCount(totalQty);
}

/* =======================
   TABLE RENDER
======================= */
function showTable(data) {
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = "";

  data.forEach(m => {
    tbody.innerHTML += `
      <tr>
        <td>${m.id}</td>
        <td>${m.name}</td>
        <td>${m.price}</td>
        <td>${m.quantity}</td>
        <td>${m.expiryDate}</td>
        <td>${m.company}</td>
        <td>
          ${isAdmin
            ? `<button class="del-btn" onclick="deleteMedicine(${m.id})">Delete</button>`
            : "-"}
        </td>
      </tr>
    `;
  });
}

/* =======================
   ADMIN LOGIN
======================= */
function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  fetch(`${API}/admin/login?u=${u}&p=${p}`)
    .then(res => {
      if (res.ok) {
        isAdmin = true;
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("adminPanel").classList.remove("hidden");
        loadMedicines();
      } else {
        alert("Invalid login");
      }
    });
}

/* =======================
   AUTO FILL PRICE (JSON)
======================= */
function autoFillPrice() {
  const sel = document.getElementById("medSelect").value;
  const med = medicineMaster.find(m => m.name === sel);
  document.getElementById("price").value = med ? med.price : "";
}

/* =======================
   ADD / MERGE MEDICINE
======================= */
function addMedicine() {
  if (!isAdmin) {
    alert("Admin login required");
    return;
  }

  const id       = Number(document.getElementById("id").value);
  const name     = document.getElementById("medSelect").value;
  const price    = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("qty").value);
  const expiry   = document.getElementById("expiry").value;
  const company  = document.getElementById("company").value.trim();

  if (!id || !name || !price || !quantity || !expiry || !company) {
    alert("Fill all fields / correct the mistake in fields");
    return;
  }

  const today = new Date();
  today.setHours(0,0,0,0);
  if (new Date(expiry) < today) {
    alert("Expired medicine cannot be added");
    return;
  }

  fetch(API + "/pharma/all")
    .then(res => res.json())
    .then(data => {

      // ✅ check if ID already exists
      const idExists = data.some(m => m.id === id);
      if (idExists) {
        alert("ID already exists. Please use a different ID.");
        return;
      }

      // 🔍 find SAME name + company + expiry
      const existing = data.find(m =>
        m.name === name &&
        m.company.toLowerCase() === company.toLowerCase() &&
        m.expiryDate === expiry
      );

      // ➕ merge quantity
      if (existing) {
        const merged = {
          ...existing,
          quantity: existing.quantity + quantity
        };

        fetch(API + "/pharma/delete/" + existing.id, { method: "DELETE" })
          .then(() =>
            fetch(API + "/pharma/add", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(merged)
            })
          )
          .then(() => {
            alert("Quantity merged with existing medicine");
            clearInputs();
            loadMedicines();
          });

      } else {
        const med = {
          id, name, price, quantity,
          expiryDate: expiry,
          company
        };

        fetch(API + "/pharma/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(med)
        })
        .then(res => res.text())
        .then(msg => {
          alert(msg);
          clearInputs();
          loadMedicines();
        });
      }
    });
}

/* =======================
   DELETE
======================= */
function deleteMedicine(id) {
  if (!confirm("Delete this medicine?")) return;

  fetch(API + "/pharma/delete/" + id, {
    method: "DELETE",
    credentials: "include"
  })
  .then(res => {
    if (!res.ok) throw new Error("Delete failed");
    return res.text();
  })
  .then(msg => {
    alert(msg);
    loadMedicines();
  })
  .catch(() => alert("Delete failed — still logged in"));
}

/* =======================
   CLEAR INPUTS
======================= */
function clearInputs() {
  document.getElementById("id").value = "";
  document.getElementById("medSelect").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("expiry").value = "";
  document.getElementById("company").value = "";
}

/* =======================
   VIEW EXPIRED MEDICINES
======================= */
function loadExpired() {
  if (!isAdmin) {
    alert("Admin login required");
    return;
  }

  fetch(API + "/pharma/expired")
    .then(res => res.json())
    .then(data => {
      lastExpiredList = data;  // store expired items

      const deleteBtn = document.getElementById("deleteAllExpiredBtn");
      if (data.length > 0) {
        deleteBtn.classList.remove("hidden");
      } else {
        deleteBtn.classList.add("hidden");
        alert("No expired medicines found");
      }

      showTable(data);
      updateStats(data);
      scrollTableTop();
    })
    .catch(err => {
      console.error(err);
      alert("Error loading expired medicines");
    });
}

/* =======================
   DELETE ALL EXPIRED
======================= */
function deleteAllExpired() {
  if (!isAdmin) {
    alert("Admin login required");
    return;
  }

  if (!lastExpiredList || lastExpiredList.length === 0) {
    alert("Load expired medicines first (View Expired)");
    return;
  }

  if (!confirm("Delete ALL expired medicines?")) return;

  const ids = lastExpiredList.map(m => m.id);

  Promise.all(
    ids.map(id =>
      fetch(API + "/pharma/delete/" + id, {
        method: "DELETE",
        credentials: "include"
      })
        .then(res => ({
          id,
          ok: res.ok,
          status: res.status
        }))
        .catch(err => ({
          id,
          ok: false,
          status: 0,
          error: err
        }))
    )
  )
    .then(results => {
      const failed = results.filter(r => !r.ok && r.status !== 404);
      const notFound = results.filter(r => r.status === 404);

      if (failed.length > 0) {
        console.error("Failed to delete IDs:", failed);
        alert("Some expired medicines could not be deleted. Check console for failed IDs.");
      } else {
        // Treat 404 as 'already deleted', so all good if only 200/204/404
        alert("All expired medicines deleted (including already-removed ones).");
      }

      console.log("Not found (already deleted) IDs:", notFound);

      lastExpiredList = [];
      const deleteBtn = document.getElementById("deleteAllExpiredBtn");
      deleteBtn.classList.add("hidden");
      loadMedicines(); // reload full list
    })
    .catch(err => {
      console.error("Delete all expired error:", err);
      alert("Delete all expired failed");
    });
}



/* =======================
   LOGOUT
======================= */
function logout() {
  fetch(API + "/admin/logout", {
    method: "POST",
    credentials: "include"
  }).catch(() => {});

  isAdmin = false;
document.getElementById("user").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("adminPanel").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");

  loadMedicines();
}

/* =======================
   INIT
======================= */
window.onload = () => {
  loadMedicines();

  // populate select from JSON
  const sel = document.getElementById("medSelect");
  medicineMaster.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.name;
    opt.textContent = m.name;
    sel.appendChild(opt);
  });
};
