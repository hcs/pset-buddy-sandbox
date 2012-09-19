var currentDiv = $('#searchDiv');
$('#findGroupDiv').hide();
$('#createGroupDiv').hide();
$('#searchResultsDiv').hide();
$('#myStudyGroupsDiv').hide();
$('#helpDiv').hide();

$('#submitCreateGroup').click(function(e) {
    alert("wtf");
    email = $('#email').val();  
    name = $('#fullname').val();  
    date = $('#date').val();  
    time = $('#time').val();  
    myClasses.push({email: email, name: name, date: date, time: time});
    $('#createGroupModal').modal('toggle');

});

var myClasses = []; 
var classDict = {};
classDict["cs50"] = {name:"Computer Science 50", description:"Rip phonebooks and other cool things to do with computer science."}
classDict["cs61"] = {name:"Computer Science 61", description:"The coolest class you will ever take at Harvard University. Period."}
classDict["stat110"] = {name:"Statistics 110", description:"lolwut, why am I taking a stats course if I'm a CS concentrator?"}
$('#sidenavbar li').click(function(e) {
      $('#navigationDivs').show();
      $('#searchResults').hide();

      var self = $(this);
      if (!self.hasClass('active')) {
        self.addClass('active');
      }
      self.siblings().removeClass('active');

      if (self.attr('id') == "myStudyGroups"){
        $('.myStudyGroups').html('5');
      }


      divId = (self.attr('id') + "Div");
      div = $("#"+divId);


      currentDiv.slideRightHide();
      div.slideLeftShow();


      currentDiv = div;
      e.preventDefault();
});

$('#submitSearch').click(function(e) {
    var self = $(this);

    var searchResultsDiv = $('#searchResultsDiv');
    searchResultsDiv.html('');
    
    var html = "";
    var findButton = '<a href="#createGroupModal" role="button" class="btn btn-primary btn-large" data-toggle="modal"<h2>Find study group!</h2></a>';
    var createButton = '<a href="#createGroupModal" style="position:relative;left:20px" role="button" class="btn btn-primary btn-large" data-toggle="modal"<h2>Create study group!</h2></a>';

    var buttons = findButton+createButton;

    searchText = $('#searchText').val();

    if (classDict[searchText]) {
        html="<div><h2>"+classDict[searchText].name+"</h2><h3>"+classDict[searchText].description+"</h3>"+buttons+"</div>";
    }

    searchResultsDiv.append(html);

    currentDiv.hide();
    searchResultsDiv.show();
    currentDiv = searchResultsDiv;

});

jQuery.fn.extend({
  slideRightShow: function() {
    return this.each(function() {
        $(this).show('slide', {direction: 'right'}, 1000);
    });
  },
  slideLeftHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'left'}, 1000);
    });
  },
  slideRightHide: function() {
    return this.each(function() {
      $(this).hide('slide', {direction: 'right'}, 1000);
    });
  },
  slideLeftShow: function() {
    return this.each(function() {
      $(this).show('slide', {direction: 'left'}, 1000);
    });
  }
});

