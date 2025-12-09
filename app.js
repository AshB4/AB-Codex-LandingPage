/** @format */

const supabaseUrl = "https://gnchphtvepgmduhidwmm.supabase.co";
const apiKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduY2hwaHR2ZXBnbWR1aGlkd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NzQsImV4cCI6MjA4MDM2OTc3NH0.IsMy2XTSSieE7N4Zn-WDS0pFN2Y1TIisP8JCcax8k0M"; 
const prodsUrl = "${supabaseUrl}/rest/v1/products`";

async function submitLead(event) {
	event.preventDefault();

	const leadData = getLeadData();

	const response = await fetch(supabaseUrl + "/rest/v1/leads", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			apikey: apiKey,
			Authorization: "Bearer " + apiKey,
		},
		body: JSON.stringify(leadData),
	});

	console.log("Response:", response.status);
}

function getLeadData() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	return {
		name: name,
		email: email,
		message: message,
	};
}

document.getElementById("contact-form").addEventListener("submit", submitLead);

async function getProducts() {
	const response = await fetch(supabaseUrl + "/rest/v1/products", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			apikey: apiKey,
			Authorization: "Bearer " + apiKey,
		},
	});

	const data = await response.json();

	let prodsCards = document.getElementById("prodsCards");

	for (let i = 0; i < data.length; i++) {
  prodsCards.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
      <div class="card shadow-sm rounded-3 border-0" style="width: 18rem;">

        <div class="ratio ratio-1x1">
          <img 
            src="${data[i].img_url}" 
            alt="${data[i].name}" 
            class="img-fluid object-fit-cover rounded-top"
          >
        </div>

        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-center">${data[i].name}</h5>
          <p class="card-text">${data[i].description}</p>
          <p class="mt-auto fw-bold bg-primary text-white text-center py-2 rounded">
  $${data[i].price}
</p>
        </div>

      </div>
    </div>
  `;
}
}

document.addEventListener("DOMContentLoaded", getProducts);

	


