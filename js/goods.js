//select all
var dataCount=$(".check_type").length;

$("#filter-all").click(function(){
    
    if($(this).prop("checked")){
        console.log("true")
        $(".check_type").prop("checked", true);
        
    }else{
        console.log("false")
        $(".check_type").prop("checked", false);
       
    }
});


$("#gallery-filter :checkbox").click(function(){

    //get count
    
    var checkCount=$(".check_type:checked").length;
    if(checkCount==dataCount){
        $("#filter-all").prop("checked", true);
    }else{
        $("#filter-all").prop("checked", false);
    }        


    let valueId=$(this).data("value");



});



$("#filter-coffee").click(function(){
    
    if($(this).prop("checked")){
        console.log("true")
        $(".coffee").removeClass("box_hide");
        
    }else{
        console.log("false")
         $(".coffee").addClass("box_hide");
       
    }
});
$("#filter-cup").click(function(){
    
    if($(this).prop("checked")){
        console.log("true")

        $(".cup").removeClass("box_hide");

        
    }else{
        console.log("false")
        $(".cup").addClass("box_hide");
       
    }
});
$("#filter-tea").click(function(){
    
    if($(this).prop("checked")){
        console.log("true")
        $(".tea").removeClass("box_hide");

        
    }else{
        console.log("false")
        $(".tea").addClass("box_hide");
    }
});
$("#filter-all").click(function(){
    
    if($(this).prop("checked")){
        console.log("true")
        $(".tea").removeClass("box_hide");
        $(".cup").removeClass("box_hide");
        $(".coffee").removeClass("box_hide");
        
    }
    else{
        console.log("false")
        $(".tea").addClass("box_hide");
        $(".cup").addClass("box_hide");
        $(".coffee").addClass("box_hide");
    }
});


        // jQuery UI Button
    // $('#gallery-filter :checkbox').input({
    //     // icons: {
    //     //     primary: 'icon-checkbox'
    //     // }

    // });

