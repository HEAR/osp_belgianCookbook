$(function() {
	
	
    // Choose the number of pages of the document
    var nb_page = 180;

    for (i = 1; i < nb_page; i++){
        $("#master-page").clone().attr("id","page-"+i).insertBefore($("#master-page"));
    }
    $("#master-page").hide();

    // Loads main content into <article id="my-story">
    $("#my-story").load("https://lite6.framapad.org/p/yOOZ2wkDAb/export/txt");

    // __________________________________ MOVEABLE ELEMENTS __________________________________ //
    $("div.moveable").
        append("<div class='properties button'>Properties</div>").
        draggable({
                cursor: "move",
                stack: "div.moveable",
        }).
        resizable();

    $('.properties').on('click', function() {
        var top = $(this).parent().css('top');
        var left = $(this).parent().css('left');
        var width = $(this).parent().width();
        var height = $(this).parent().height();
        var p = new Popelt({
            title: "Properties to copy/paste into this object's style attribute.",
            content: 'style="top: ' + top + '; left: ' + left + '; width: ' + width + 'px; height: ' + height + 'px;"',
        }).show();
    });

	$("#page-2 .body").clone().insertAfter($("#page-2 .body")[0]);
	$("#page-2 .body").clone().insertAfter($("#page-2 .body")[0]);
	$("#page-3 .body").clone().insertAfter($("#page-3 .body")[0]);
	$("#page-3 .body").clone().insertAfter($("#page-3 .body")[0]);
	$("#page-4 .body").clone().insertAfter($("#page-4 .body")[0]);
	$("#page-4 .body").clone().insertAfter($("#page-4 .body")[1]);
	$("#page-5 .body").clone().insertAfter($("#page-5 .body")[0]);
	$("#page-5 .body").clone().insertAfter($("#page-5 .body")[1]);
	$("#page-6 .body").clone().insertAfter($("#page-6 .body")[0]);
	$("#page-6 .body").clone().insertAfter($("#page-6 .body")[1]);
	
});
