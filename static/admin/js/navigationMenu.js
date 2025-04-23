$( document ).ready(function()
{
  createNavigationMenu();
});
function createNavigationMenu()
{
  var menu = $('#navigationMenu');

  menu.append($('<div>').attr({"class":"col-lg-12"})//<div class="col-md-2"></div>
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"index.html"}).text("Main").css({"fontSize":20,"font-weight":"bold"})))
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"ContradictionOrParadox.html"}).text("Contradiction Or Paradox?").css({"fontSize":20,"font-weight":"bold"})))
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"QuestioningFaith.html"}).text("Questioning Faith").css({"fontSize":20,"font-weight":"bold"})))
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"Definitions.html"}).text("Definitions").css({"fontSize":20,"font-weight":"bold"})))
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"CriticalThinking.html"}).text("Critical Thinking").css({"fontSize":20,"font-weight":"bold"})))
	.append($('<div>').attr({"class":"row"}).append($('<div>').attr({"class":"col-lg-2"})).append($('<div>').attr({"class":"col-lg-4"}).text("Placeholder").css({"fontSize":20,"font-weight":"bold"})))
	.append($('<div>').attr({"class":"row"}).append($('<div>').attr({"class":"col-lg-2"})).append($('<div>').attr({"class":"col-lg-4"}).text("Placeholder").css({"fontSize":20,"font-weight":"bold"})))
		
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"MindsetApproach.html"}).text("Mindset And Approach").css({"fontSize":20,"font-weight":"bold"})))
    .append($('<div>').attr({"class":"row"}).append($('<a>').attr({"href":"Faith.html"}).text("Faith").css({"fontSize":20,"font-weight":"bold"})))
    .append($('<div>').attr({"class":"row"}).append($('<div>').attr({"class":"col-lg-2"})).append($('<div>').attr({"class":"col-lg-4"}).text("Placeholder").css({"fontSize":20,"font-weight":"bold"})))
	.append($('<div>').attr({"class":"row"}).append($('<div>').attr({"class":"col-lg-2"})).append($('<div>').attr({"class":"col-lg-4"}).text("Placeholder").css({"fontSize":20,"font-weight":"bold"})))

  );
}
