currentDiv = $('#searchDiv');
$('#findGroupDiv').hide();
$('#createGroupDiv').hide();
$('#searchResultsDiv').hide();

classDict = []
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
    
    var html = "";

    for (var key in classDict) {
        if (classDict[key] ==
        $('#populateSearchResults').html("5");
    }

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
