$('document').ready(function () {
    $('body').on('click', '.btn-add', function (evt) {
        evt.preventDefault();
        var $detailDiv = $('#main');
        url = $(this).data('url');
        $.get(url, function (data) {
            $detailDiv.replaceWith(data);
        })

    });
    $('body').on('click', '#btnadd', function () {
        if ($('#formADD').hasClass('.error')) {
            return 1;
        } else {
            var dataToSend = {
                "maNhanVien": $('#staff-code').val(),
                "hoVaTen": $('#Fullname').val(),
                "gioiTinh": $("#GioiTinh").val(),
                "ngaySinh": $("#DateofBirth").val(),
                "trinhDoDaoTao": "DAI HOC",
                "viTriCongViec": $("#work-position").val(),
                "donViCongTac": $("#OrganizationUnit").val(),
                "loaiHopDong": "Chinh Thuc",
                "trangThai": "Dang lam"
            };
            //console.log(dataToSend);
            //$.ajax({
            //    method: 'POST',
            //    url: '/api/EmployeesApi',
            //    data: dataToSend,
                
            //});
            $.post("/api/EmployeesApi", dataToSend).done(function (data) {
                var $detailDiv = $('.addEmployee');
                url = $(this).data('url');
                console.log(url);
                $.get(url, function (data) {
                    console.log(data);

                    $detailDiv.replaceWith(data);
                })
            }).fail(function () {
                alert("Co loi xay ra. De nghi kiem tra lai thong tin da nhap");
            })
        }
    });
    $(".right-panel").scroll(function () {
        console.log("ringt");
        $(".left-panel")
            .scrollTop($(".right-panel").scrollTop());
    });
    $(".left-panel").scroll(function () {
        $(".left-panel")
            .scrollTop($(".right-panel").scrollTop());
    });

});
