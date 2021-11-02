$( function() {
    $( "#location" ).selectmenu();


    //-------------------------------------
    $( function() {
        var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        $( "#category" ).autocomplete({
          source: availableTags
        });
        //-------------------------------------
        $( function() {
          $( "#startDate" ).datepicker({
            minDate: new Date(),
            maxDate: "+2w"
          });
          //시작하자 마자 날짜가 바로 적용되었으면 할때 setDate
          $( "#startDate" ).datepicker( "setDate", new Date() );

          //-------------------------------------
          $( function() {
            $( "input[type='radio']" ).checkboxradio();
          } );

          $( function() {
            $( "#progress" ).progressbar({
              value: 0
            });
            $('input').change(function(){
              updateProgress();
            });
            function updateProgress(){
              var progress = 0,
                  itemCount = 5,
                  itemCompleted = 0;
              var location = $('#location option:selected').val();
              var location = $('#category').val();
              var experience = $('#experience').val();
              var startDate = $('#startDate').val();
              var referrer = $('input[type="radio"]:checked').val();

              if(location) itemCompleted++;
              if(category) itemCompleted++;
              if(experience) itemCompleted++;
              if(startDate) itemCompleted++;
              if(referrer) itemCompleted++;

              progress = itemCompleted/itemCount * 100;
              $('#progress').progressbar("option", "value", progress);
              $('.pct span').text(progress);
              if(progress == 100){
                $('#submit').button({
                  disabled:false
                })
              }
            }
          } );
        });
      });
  });