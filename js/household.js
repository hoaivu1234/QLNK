$(".m-dialog").hide();
$(document).ready(function () {
    //thực hiện load dữ liệu
    //Gọi api lấy dữ liệu
    //THực hiện gán các sk
    //Thêm mới hộ khẩu

    loadData();
    $("#btnAdd").click(function () {
        $(".m-dialog").show();
        //focus vào ô đầu
        $("#first").focus();
    })
    //ẩn form thêm mới
    $("#btnClose").click(function () {
        $('.m-dialog').hide();
    })
    //Kiểm tra dữ liệu khi nhấn lưu
    $("#btnSave").click(function () {
        let householdCode = $("#householdCode").val();
        let fullname = $("#fullNameHead").val();
        let address = $("#addresshousehold").val();
        let relationship = "chủ hộ";
        let household = {
            "MHK": householdCode,
            "Họ tên": fullname,
            "Nơi thường trú": address,
            "Quan hệ với chủ hộ": relationship
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/household",
            data: JSON.stringify(household),
            dataType: "JSON",
            contentType: "application/json",
            success: function (response) {
                $(".m-dialog").hide();
                loadData();
            },
            error: function (response) {

            }
        });
    }
    );

    $("input[required]").blur(function () {
        var me = this;

        validateInputRequired(me);
    })
})

function loadData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/household",
        success: function (response) {
            for (let household of response) {
                console.log(household)
                let householdCode = household["MHK"];

                let fullname = household["Họ tên"];
                let address = household["Nơi thường trú"];
                let relationship = household["Quan hệ với chủ hộ"];
                if (relationship === "chủ hộ") {
                    var el = `<tr>
                            <td class="m-text-left">${householdCode}</td>
                            <td class="m-text-left">${fullname}</td>
                            <td class="m-text-left">${address}</td>
                            <td><a href="details.html?MHK=${householdCode}"><i id="details-household" class="fas fa-eye"></i></a><i id="edit" class="fas fa-edit"></i><i id="addhousehold" class="fas fa-user-plus"></i><i id="separate" class="fas fa-object-ungroup"></i><i id="staying" class="fas fa-home"></i><i id="leave" class="fas fa-sign-out-alt"></i><i id="delete" class="fas fa-trash-alt"></i></td>
                        </tr>`;
                    $("table#tblhousehold tbody").append(el);
                }

            }




        },
        error: function (response) {
            console.log(response);
        }
    });

}

function validateInputRequired(input) {
    var me = this;

    let value = $(input).val();
    if (value == null || value === "") {
        $(input).addClass("m-input-error");
        $(input).attr("title", "Thông tin này không được phép bỏ trống!");

    }
    else {
        $(input).removeClass("m-input-error");
        $(input).removeAttr("title");
    }
}

