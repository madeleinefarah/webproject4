let experienceCount = 0;
let educationCount = 0;
let hardSkillCount = 0;
let softSkillCount = 0;
let languageCount = 0;
let hobbyCount = 0;

function getTodayDate() {
    const t = new Date();
    return t.toISOString().split("T")[0];
}

function formatDate(d) {
    if (!d) return "";
    const [year, month] = d.split("-");
    const names = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];
    return `${names[parseInt(month) - 1]} ${year}`;
}

function validateDates(start, end) {
    const s = new Date(start.value);
    const e = new Date(end.value);

    if (end.value && s > e) {
        alert("Start date must be before end date.");
        start.value = "";
        end.value = "";
        return;
    }
    if (s > new Date()) {
        alert("Start date cannot be in the future.");
        start.value = "";
    }
}

function validatePhoneNumber(p) {
    return /^[0-9\s]+$/.test(p);
}

function addExperience() {
    experienceCount++;
    const box = document.getElementById("experienceContainer");

    const div = document.createElement("div");
    div.classList.add("experience-item");
    div.id = `experience${experienceCount}`;

    div.innerHTML = `
        <button class="remove-button" onclick="removeExperience(${experienceCount})">
            ✕
        </button>

        <div class="form-row">
            <div class="form-group">
                <label>Job Title *</label>
                <input id="jobTitle${experienceCount}" required>
            </div>
            <div class="form-group">
                <label>Employer</label>
                <input id="employer${experienceCount}">
            </div>
        </div>

        <div class="subform-row">
            <div class="datesubform-row">
                <div class="dateform-group">
                    <label>Start Date *</label>
                    <input type="month" id="startDate${experienceCount}" max="${getTodayDate()}" required>
                </div>
                <div class="dateform-group">
                    <label>End Date *</label>
                    <input type="month" id="endDate${experienceCount}">
                </div>
            </div>
            <div class="form-group">
                <label>City</label>
                <input id="city${experienceCount}">
            </div>
        </div>

        <div class="form-group">
            <label>Description</label>
            <textarea id="description${experienceCount}"></textarea>
        </div>
    `;

    box.appendChild(div);

    const s = document.getElementById(`startDate${experienceCount}`);
    const e = document.getElementById(`endDate${experienceCount}`);

    s.addEventListener("change", () => validateDates(s, e));
    e.addEventListener("change", () => validateDates(s, e));
}

function removeExperience(id) {
    const div = document.getElementById(`experience${id}`);
    if (div) div.remove();
}

function addEducation() {
    educationCount++;
    const box = document.getElementById("educationContainer");

    const div = document.createElement("div");
    div.classList.add("education-item");
    div.id = `education${educationCount}`;

    div.innerHTML = `
        <button class="remove-button" onclick="removeEducation(${educationCount})">✕</button>

        <div class="form-row">
            <div class="form-group">
                <label>School *</label>
                <input id="school${educationCount}" required>
            </div>
            <div class="form-group">
                <label>Degree *</label>
                <input id="degree${educationCount}" required>
            </div>
        </div>

        <div class="subform-row">
            <div class="datesubform-row">
                <div class="dateform-group">
                    <label>Start Date *</label>
                    <input type="month" id="eduStartDate${educationCount}" max="${getTodayDate()}" required>
                </div>
                <div class="dateform-group">
                    <label>End Date *</label>
                    <input type="month" id="eduEndDate${educationCount}">
                </div>
            </div>
            <div class="form-group">
                <label>City</label>
                <input id="eduCity${educationCount}">
            </div>
        </div>

        <div class="form-group">
            <label>Description</label>
            <textarea id="eduDescription${educationCount}"></textarea>
        </div>
    `;

    box.appendChild(div);

    const s = document.getElementById(`eduStartDate${educationCount}`);
    const e = document.getElementById(`eduEndDate${educationCount}`);

    s.addEventListener("change", () => validateDates(s, e));
    e.addEventListener("change", () => validateDates(s, e));
}

function removeEducation(id) {
    const div = document.getElementById(`education${id}`);
    if (div) div.remove();
}

function addHardSkill() {
    hardSkillCount++;
    const box = document.getElementById("hardSkillsContainer");

    const div = document.createElement("div");
    div.classList.add("skill-item");
    div.id = `hardSkill${hardSkillCount}`;

    div.innerHTML = `
        <input id="hardSkillInput${hardSkillCount}">
        <button class="remove-button" onclick="removeHardSkill(${hardSkillCount})">✕</button>
    `;
    box.appendChild(div);
}

function removeHardSkill(id) {
    const div = document.getElementById(`hardSkill${id}`);
    if (div) div.remove();
}

function addSoftSkill() {
    softSkillCount++;
    const box = document.getElementById("softSkillsContainer");

    const div = document.createElement("div");
    div.classList.add("skill-item");
    div.id = `softSkill${softSkillCount}`;

    div.innerHTML = `
        <input id="softSkillInput${softSkillCount}">
        <button class="remove-button" onclick="removeSoftSkill(${softSkillCount})">✕</button>
    `;
    box.appendChild(div);
}

function removeSoftSkill(id) {
    const div = document.getElementById(`softSkill${id}`);
    if (div) div.remove();
}

function addLanguage() {
    languageCount++;
    const box = document.getElementById("languagesContainer");

    const div = document.createElement("div");
    div.classList.add("language-item");
    div.id = `language${languageCount}`;

    div.innerHTML = `
        <div class="form-row">
            <input id="languageInput${languageCount}">
            <select id="languageLevel${languageCount}">
                <option disabled selected>Select proficiency level</option>
                <option>Native speaker</option>
                <option>Highly proficient</option>
                <option>Very good command</option>
                <option>Good working knowledge</option>
                <option>Working knowledge</option>
                <option>C2</option><option>C1</option>
                <option>B2</option><option>B1</option>
                <option>A2</option><option>A1</option>
            </select>
        </div>
        <button class="remove-button" onclick="removeLanguage(${languageCount})">✕</button>
    `;
    box.appendChild(div);
}

function removeLanguage(id) {
    const div = document.getElementById(`language${id}`);
    if (div) div.remove();
}

function addHobby() {
    hobbyCount++;
    const box = document.getElementById("hobbiesContainer");

    const div = document.createElement("div");
    div.classList.add("hobby-item");
    div.id = `hobby${hobbyCount}`;

    div.innerHTML = `
        <input id="hobbyInput${hobbyCount}">
        <button class="remove-button" onclick="removeHobby(${hobbyCount})">✕</button>
    `;
    box.appendChild(div);
}

function removeHobby(id) {
    const div = document.getElementById(`hobby${id}`);
    if (div) div.remove();
}

document.getElementById("cvForm").addEventListener("submit", function (e) {
    e.preventDefault();

        const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const fullName = `${first} ${last}`;

    const job = document.getElementById("jobTitle").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();
    const summary = document.getElementById("summary").value.trim();

    if (!validatePhoneNumber(phone)) {
        alert("Invalid phone format.");
        return;
    }

    const location = city && country ? `${city}, ${country}` : city || country;

        document.getElementById("outputName").textContent = fullName;
    document.getElementById("outputJobTitle").textContent = job;
    document.getElementById("outputLocation").textContent = location;

    document.getElementById("outputPhoneLink").textContent = phone;
    document.getElementById("outputPhoneLink").href = "tel:" + phone.replace(/\s+/g, "");

    document.getElementById("outputEmailLink").textContent = email;
    document.getElementById("outputEmailLink").href = "mailto:" + email;

    document.getElementById("avatarInitials").textContent =
        first.charAt(0) + last.charAt(0);

        document.getElementById("outputPrintName").textContent = fullName;
    document.getElementById("outputPrintJob").textContent = job;
    document.getElementById("outputPrintLocation").textContent = location;
    document.getElementById("outputPrintPhone").textContent = phone;

    const printEmail = document.getElementById("outputPrintEmail");
    printEmail.textContent = email;
    printEmail.href = "mailto:" + email;

        document.getElementById("outputSummary").textContent = summary;

        const expBox = document.getElementById("outputExperience");
    expBox.innerHTML = "";

    document.querySelectorAll(".experience-item").forEach((item, idx) => {
        const i = idx + 1;

        const jobTitle = document.getElementById(`jobTitle${i}`)?.value.trim();
        if (!jobTitle) return;

        const employer = document.getElementById(`employer${i}`)?.value.trim();
        const start = formatDate(document.getElementById(`startDate${i}`)?.value);
        const endRaw = document.getElementById(`endDate${i}`)?.value;
        const end = formatDate(endRaw) || "Present";
        const c = document.getElementById(`city${i}`)?.value.trim();
        const desc = document.getElementById(`description${i}`)?.value.trim();

        let h = `
            <div class="cvv-item">
                <div class="cvv-dot"></div>
                <div class="cvv-item-body">
                    <h3 class="cvv-h3">${jobTitle}
        `;

        if (employer) h += ` – ${employer}`;
        if (c) h += `, ${c}`;

        h += `<span class="cvv-date">${start} – ${end}</span></h3>`;

        if (desc) h += `<p class="cvv-line">${desc}</p>`;

        h += `</div></div>`;
        expBox.innerHTML += h;
    });

        const eduBox = document.getElementById("outputEducation");
    eduBox.innerHTML = "";

    document.querySelectorAll(".education-item").forEach((item, idx) => {
        const i = idx + 1;

        const school = document.getElementById(`school${i}`)?.value.trim();
        const degree = document.getElementById(`degree${i}`)?.value.trim();
        if (!school && !degree) return;

        const start = formatDate(document.getElementById(`eduStartDate${i}`)?.value);
        const endRaw = document.getElementById(`eduEndDate${i}`)?.value;
        const end = formatDate(endRaw) || "Present";
        const c = document.getElementById(`eduCity${i}`)?.value.trim();
        const desc = document.getElementById(`eduDescription${i}`)?.value.trim();

        let h = `
            <div class="cvv-edu">
                <h3 class="cvv-h3">${school}
        `;

        if (c) h += ` – ${c}`;
        h += `<span class="cvv-date">${start} – ${end}</span></h3>`;

        if (degree || desc) {
            h += `<p class="cvv-line">`;
            if (degree) h += degree;
            if (desc) h += ` • ${desc}`;
            h += `</p>`;
        }

        h += `</div>`;
        eduBox.innerHTML += h;
    });

        const hardBox = document.getElementById("outputHardSkills");
    hardBox.innerHTML = "";
    document.querySelectorAll("#hardSkillsContainer input").forEach(inp => {
        if (inp.value.trim()) {
            const li = document.createElement("li");
            li.textContent = inp.value.trim();
            hardBox.appendChild(li);
        }
    });

        const softBox = document.getElementById("outputSoftSkills");
    softBox.innerHTML = "";
    document.querySelectorAll("#softSkillsContainer input").forEach(inp => {
        if (inp.value.trim()) {
            const li = document.createElement("li");
            li.textContent = inp.value.trim();
            softBox.appendChild(li);
        }
    });

        const langBox = document.getElementById("outputLanguages");
    langBox.innerHTML = "";
    document.querySelectorAll("#languagesContainer .language-item").forEach(item => {
        const name = item.querySelector("input").value.trim();
        const level = item.querySelector("select").value;
        if (name && level && !level.startsWith("Select")) {
            const li = document.createElement("li");
            li.textContent = `${name} – ${level}`;
            langBox.appendChild(li);
        }
    });

        const hobBox = document.getElementById("outputHobbies");
    hobBox.innerHTML = "";
    document.querySelectorAll("#hobbiesContainer input").forEach(inp => {
        if (inp.value.trim()) {
            const li = document.createElement("li");
            li.textContent = inp.value.trim();
            hobBox.appendChild(li);
        }
    });

        document.getElementById("cvOutput").style.display = "block";
});

async function downloadCVAsPDF() {
    const cvOutput = document.getElementById("cvOutput");

    if (!cvOutput) {
        alert("CV output section is not available.");
        return;
    }

    try {
        const cvCard = cvOutput.querySelector(".cvv") || cvOutput;

        const canvas = await html2canvas(cvCard, { scale: 3 });
        const imgData = canvas.toDataURL("image/jpeg");

        const pdf = new window.jspdf.jsPDF("p", "pt", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV.pdf");
    } catch (error) {
        console.error("Error generating PDF:", error);
        alert("An error occurred while generating the PDF. Please try again.");
    }
}