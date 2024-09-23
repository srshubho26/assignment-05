// Blog to home page navigator
pageNavigator("home-navigator", "/assignment-05");

document.getElementById("faq-container").addEventListener('click', function(e){
    const target = e.target;
    if(target.tagName !== "BUTTON" || target.classList.contains("rotate-180"))return;
    target.classList.add("rotate-180");
    const faqClass = target.id;

    const ansDiv = document.querySelector("div." + faqClass);
    const height = document.querySelector("div." + faqClass+" > div").clientHeight;

    const allAns = document.querySelectorAll("article div.ans");
    for(const _ans of allAns){
        if(_ans.style.height==="auto"){
            _ans.style.height = _ans.clientHeight+"px";
            _ans.previousElementSibling.lastElementChild.classList.remove("rotate-180"); 

            setTimeout(function(){
                _ans.style.height = 0;
            }, 10);
            break;
        }
    }

    setTimeout(function(){
        ansDiv.style.height = height + "px";
    }, 10);

    setTimeout(function(){
        ansDiv.style.height = "auto";
    }, 400);
});
