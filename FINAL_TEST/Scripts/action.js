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
                "MaNhanVien": $('#staff-code').val(),
                "HoVaTen": $('#Fullname').val(),
                "GioiTinh": $("#GioiTinh").val(),
                "NgaySinh": $("#DateofBirth").val(),
                "TrinhDoDaoTao": "DAI HOC",
                "ViTriCongViec": $("#work-position").val(),
                "DonViCongTac": $("#OrganizationUnit").val(),
                "LoaiHopDong": "Chinh Thuc",
                "TrangThai": "Dang lam"
            };
            console.log(dataToSend);
            $.post("/api/EmployeesApi", dataToSend).done(function (data) {

            })
        }


    });
});