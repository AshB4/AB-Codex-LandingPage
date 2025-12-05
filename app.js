/** @format */

const supabaseUrl = "https://gnchphtvepgmduhidwmm.supabase.co";
const apiKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduY2hwaHR2ZXBnbWR1aGlkd21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTM3NzQsImV4cCI6MjA4MDM2OTc3NH0.IsMy2XTSSieE7N4Zn-WDS0pFN2Y1TIisP8JCcax8k0M"; 

async function submitLead(event) {
    console.log("submitLead IS RUNNING");
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