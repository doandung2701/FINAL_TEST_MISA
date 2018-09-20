$('body').on('click', ".addEmployee .image-button", function () {
    $(".upload-avatar").click();
})
$('body').on('change', ".addEmployee .upload-avatar", function () {
    $(".user-image").attr("src", $(".upload-avatar").val());
})

$('body').on('blur', ".addEmployee #Firt-midname", function () {
    $("#Fullname").attr("value", $("#Firt-midname").val().trim() + " " + $("#Lastname").val().trim());
    if ($("#Fullname").val().trim() == "") {
        $("#formADD").addClass("error");
        $("#Fullname").addClass("Checkerror");
    }
       
        
    if ($("#Fullname").val().trim() != "") {
        $("#Fullname").removeClass("Checkerror");
        $("#formADD").removeClass("error");
    }
       
})

$('body').on('blur', ".addEmployee #Lastname", function () {
    $("#Fullname").attr("value", $("#Firt-midname").val().trim() + " " + $("#Lastname").val().trim());
    if ($("#Fullname").val().trim() == "") {
        $("#formADD").addClass("error");
        $("#Fullname").addClass("Checkerror");
    }
       

    if ($("#Fullname").val().trim() != "") {
        $("#Fullname").removeClass("Checkerror");
        $("#formADD").removeClass("error");
    }
       
})

$('body').on('blur', '.addEmployee [check="true"]', function () {
    if ($(this).val().trim() == "") {
        $(this).addClass("Checkerror");
        $("#formADD").addClass("error");
    }
       
    $("#formADD").addClass("error");
    if ($(this).val().trim() != "") {
        $(this).removeClass("Checkerror");
        $("#formADD").removeClass("error");
    }
       
})

