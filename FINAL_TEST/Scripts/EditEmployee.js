function update() {
    var MaNhanVien = $("input[name='MaNhanVien']").val();
    var HoVaTen = $("input[name='hoVaTen']").val();
    var GioiTinh = $('#GioiTinh').find(":selected").text();
    var ViTriCongViec = $("input[name='ViTriCongViec']").val();
    var DonViCongTac = $("input[name='DonViCongTac']").val();
    var Obj = {
        "MaNhanVien": MaNhanVien,
        "HoVaTen": HoVaTen,
        "GioiTinh": GioiTinh,
        "NgaySinh": "1998/02/02",
        "TrinhDoDaoTao": "Dai hoc",
        "NoiDaoTao": "MISA",
        "ChuyenNganh": "IT",
        "NgayThuViec": "",
        "NgayChinhThuc": "",
        "LoaiHopDong": "Fresher",
        "TrangThai": "Hoat dong",
        "ViTriCongViec": ViTriCongViec,
        "DonViCongTac": DonViCongTac
    };

    $.ajax({
        method: 'PUT',
        url: 'api/EmployeeApi/' + MaNhanVien,
        data: { id: MaNhanVien, employee: EmployeeObj },
    }).done(function (data) {
        console.log('success')
    })
}
$(document).ready(function () {
    $("input[name='MaNhanVien']").val("3");
    var code = $("input[name='MaNhanVien']").val();
    $.ajax({
        method: "GET",
        url: "/api/Emp/1/" + code,
        success: function (response) {
            console.log(response.MaNhanVien)
            //ho ten
            $("input[name='hoVaTen']").val(response.HoVaTen);
            var res = response.HoVaTen.split(" ");
            var getCount = res.length;
            var HoVaDem = "";
            for (var i = 0; i < res.length - 1; i++) {
                HoVaDem += res[i] + " ";
                console.log(HoVaDem);
            }
            $('#Firt-midname').val(HoVaDem);
            $('#Lastname').val(res[res.length - 1]);
            $("#GioiTinh option[value=" + response.GioiTinh + "]").attr('selected', 'selected');
            $("input[name='ViTriCongViec']").val(response.ViTriCongViec);
            $("input[name='DonViCongTac']").val(response.DonViCongTac);
        }
    })
})

