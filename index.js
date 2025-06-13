function addingEventListener() {
    const input =document.getElementById("button");
    input.addEventListener("click", function() {
        alert("i was alerted");
    });
};
addingEventListener();