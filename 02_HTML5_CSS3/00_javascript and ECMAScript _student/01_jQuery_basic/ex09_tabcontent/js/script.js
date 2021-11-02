$('.tabSet').each(function(){
    var topDiv=$(this);
    var anchors=topDiv.find('ul a');
    var panelDivs=topDiv.find('.panel');

    var lastAnchor;
    var lastPanel;

    lastAnchor=anchors.filter('.on');
    lastPanel=$(lastAnchor.attr('href'));
    panelDivs.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault(); //클릭 디폴트 동작 무효화
        var currentAnchor=$(this);
        var currentPanel=$(currentAnchor.attr('href'));

        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');
        lastPanel.hide();
        currentPanel.show();

        lastAnchor=currentAnchor;
        lastPanel=currentPanel;
    });

});