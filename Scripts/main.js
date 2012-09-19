var currentDiv = $('#searchDiv');
$('#findGroupDiv').hide();
$('#createGroupDiv').hide();
$('#searchResultsDiv').hide();
$('#myStudyGroupsDiv').hide();
$('#helpDiv').hide();

/* Your code goes here 1*/



var myClasses = []; 
var classDict = {};

/* Populate class dicts here */

/* Nav bar stuff here */


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

var populateMyGroups = function() {
    var html = "";

	var attendButtons = "<div class='btn-group'><button id='attending' class='btn btn-success'>Attending</button><button id='notAttending' class='btn btn-error'>Not Attending</button></div>";

    for (var i in myClasses){
        html = html + "<div style='position:relative;left:130px;top:259px' class='modal'><div class='modal-header'><h2>omg how do we do this</h2></div><div class='modal-body'><p>Location: " + myClasses[i].location +"</p><p>Date: " + myClasses[i].date+ "</p><p>Time: "+myClasses[i].time+ "</p><p>Organizer: <a href=mailto:" + myClasses[i].email + ">"+myClasses[i].name+"</a></p>"+attendButtons+"</div>";
    }

    $('.myStudyGroups').append(html);

    $('#attending').click();
    $('#notAttending').click();
    
        
}
