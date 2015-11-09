var myFeature = {
    config : {
        dialogId : '#dialog',
        wrapper : '#open',
        canvas: '#mycanvas',
        uiOptions : {width: 1280, autoOpen: true, modal: true},
        rte: {
                    debug: 1,
                    tinymce: {
                        config: {
                          inline: true,
                          plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                              "insertdatetime media table contextmenu paste myexample"
                             ],
                             toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image myexample"
            }
        }
        }
      },

    init : function(config) {
        $.extend(myFeature.config, config);
        $(myFeature.config.wrapper).find('button').
            click(function() {
                 $(myFeature.config.dialogId).dialog(myFeature.config.uiOptions);
            });
            myFeature.buildGrid();
    },

    buildGrid : function() {
       $(myFeature.config.canvas).gridmanager(myFeature.config.rte);
    },


};



$(document).ready(function() {
  myFeature.init();

  //Solve problems jquery ui dialog- ckeditor/tinymce
 $(this).on('focusin', function(e) {
    if ($(e.target).closest(".mce-window, .moxman-window").length) {
    e.stopImmediatePropagation();
  }
});
});

