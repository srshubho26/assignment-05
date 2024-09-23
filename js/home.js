// Home to Blog page navigator
pageNavigator("blog-navigator", "blog.html");

// Navigate between Donation and History
function tabNavigatorInit(btnId, tabId){
    document.getElementById(btnId).addEventListener("click", function(){
        document.querySelector("button.active").className = "px-5 sm:px-8 py-2 sm:py-4 bg-white border border-[#111111B3] rounded-lg font-semibold text-lg sm:text-xl text-[#111111B3]";
        
        document.getElementById(btnId).className = "px-5 sm:px-8 py-2 sm:py-4 bg-[#B4F461] border border-[#B4F461] rounded-lg font-semibold text-lg sm:text-xl text-[#111111] active"

        document.querySelector(".tab:not(.hidden)").classList.add("hidden");
        document.getElementById(tabId).classList.remove("hidden")
    });
}

tabNavigatorInit("donation-navigator", "donation-tab");
tabNavigatorInit("history-navigator", "history-tab");

// Donation functionality
function donationInit(btnId, fieldId, areaDonated, titleId){
    document.getElementById(btnId).addEventListener("click", function(){
        const amountOfDonation = parseFloat(document.getElementById(fieldId).value);
        const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
        const donationOfCard = parseFloat(document.getElementById(areaDonated).innerText);

        if(isNaN(amountOfDonation)){
            alert("Invalid Donation Amount!");
            return;
        }
        if(amountOfDonation<1){
            alert("Please enter an amount of minimum 1 taka!");
            return;
        }

        if(isNaN(mainBalance) || isNaN(donationOfCard)){
            alert("Failed to donate!");
            return;
        }

        if(amountOfDonation > mainBalance){
            alert("Insufficint balance!");
            return;
        }

        const newBalance = mainBalance - amountOfDonation;
        const totalAreaDonated = donationOfCard + amountOfDonation;

        // Updating main balance
        document.getElementById("main-balance").innerText = newBalance;

        // Updating total donation the card got
        document.getElementById(areaDonated).innerText = totalAreaDonated;

        // Clearing the input field of amount
        document.getElementById(fieldId).value = "";

        // Adding a history row
        addHistory(document.getElementById(titleId).innerText, amountOfDonation);

        // Showing modal after successful donation
        showModal();
    })
}


donationInit("flood-noakhali-submit", "flood-noakhali-input", "totalOfNoakhali", "flood-noakhali-title");
donationInit("flood-feni-submit", "flood-feni-input", "totalOfFeni", "flood-feni-title");
donationInit("quota-submit", "quota-input", "totalOfQuota", "quota-title");


// History making function
function addHistory(title, amount){
    const div = document.createElement("div");
    div.className = "border border-[#1111111A] rounded-xl p-4 sm:p-8 text-left max-w-[1150px] mx-auto w-full mb-6";
    div.innerHTML = `<h4 class="text-xl font-bold text-[#111111]">
        ${amount} Taka is Donated for ${title}
    </h4>
    <p class="text-base text-[#111111B3] mt-4">
        ${formatedDate()}
    </p>`;

    document.getElementById("history-tab").appendChild(div);
}


// Modal showing function
function showModal(){
    document.body.classList.add("overflow-hidden");
    document.getElementById("modal").classList.remove("hidden");
    setTimeout(function(){
        document.getElementById("modal").classList.remove("opacity-0");
        document.querySelector("#modal>div").classList.remove("scale-0");
    }, 100);
}

// Closing modal
document.getElementById("close-modal").addEventListener("click", function(){
    document.getElementById("modal").classList.add("opacity-0");
    document.querySelector("#modal>div").classList.add("scale-0");

    setTimeout(function(){
        document.getElementById("modal").classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }, 100);
});