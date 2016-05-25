var new_articles = document.querySelector(".new-wrapper");
var new_key1 = document.querySelector(".new-articles .new-button1");
var new_key2 = document.querySelector(".new-articles .new-button2");

var interview_wrapper = document.querySelector(".interview-wrapper");
var interview_key1 = document.querySelector(".interview-button1");
var interview_key2 = document.querySelector(".interview-button2");

var library_wrapper = document.querySelector(".library-wrapper");
var library_key1 = document.querySelector(".library-button1");
var library_key2 = document.querySelector(".library-button2");

var new_bias = { value: 0 };
var interview_bias = { value: 0};
var library_bias = { value: 0};

scrollRight(new_articles, new_key1, new_key2, new_bias, 300, -1000);
scrollLeft(new_articles, new_key1, new_key2, new_bias, 300, 0);

scrollRight(interview_wrapper, interview_key1, interview_key2, interview_bias, 400, -1000);
scrollLeft(interview_wrapper, interview_key1, interview_key2, interview_bias, 400, 0);

scrollRight(library_wrapper, library_key1, library_key2, library_bias, 203, -1200);
scrollLeft(library_wrapper, library_key1, library_key2, library_bias, 203, 0);



function scrollRight(object, key1, key2, bias, value, border){
    key1.addEventListener("click", function(){
      bias.value -= value;
      object.style.left = bias.value + "px";
      key2.style.display = "block";
      if(bias.value <= border) {
        key1.style.display = "none";
      }
  });
}

function scrollLeft(object, key1, key2, bias, value, border){
    key2.addEventListener("click", function(){
      bias.value += value;
      object.style.left = bias.value + "px";
      key1.style.display = "block";
      if(bias.value >= border) {
        key2.style.display = "none";
      }
  });
}
