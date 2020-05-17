var cross = false;
var button = document.getElementById("submit");
button.addEventListener('click', function() {
    var text = document.getElementById("task");
    if(text.value != null && text.value != '') {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text.value));
        text.value = '';
        ul.appendChild(li);

        function cross() {
            if(!cross) {
                li.classList.add("cross");
            } else {
                li.classList.remove("cross");
            }
            cross = !cross;
        }


        li.addEventListener("click", cross);

        function deleteListItem(){
            li.classList.add("delete");
        }
        var dBtn = document.createElement("button");
	    dBtn.appendChild(document.createTextNode("X"));
	    li.appendChild(dBtn);
        dBtn.addEventListener("click", deleteListItem);
        
    }
});

var clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function() {
    var listItems = document.getElementsByTagName("li");
    for(var i=0; i<listItems.length; i++) {
        listItems[i].classList.add("delete");
    }
});

var clearCompleted = document.getElementById("clearCompleted");
clearCompleted.addEventListener("click", function() {
    var listItems = document.getElementsByTagName("li");
    for(var i=0; i<listItems.length; i++) {
        if(listItems[i].classList.contains("cross")) {
            listItems[i].classList.add("delete");
        }
    }
});