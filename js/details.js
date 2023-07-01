$(".m-dialog").hide();
$(document).ready(function(){
    $("#btnClose").click(function(){
        $('.m-dialog').hide();
    })

    // get
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/MHK001",
        success: function(response){
            
            for (const householdCode in response) {
                const households = response[householdCode];
                
                for (const household of households) {
                    let householdCode = household["Mã hộ khẩu"];
                let cmt = household["Số CMT/CCCD"]
                let fullname = household["Họ tên"];
                let address = household["Nơi thường trú"];
                let relationship = household["Quan hệ với chủ hộ"];
                var el = `<tr>
                <td class="m-text-left">${householdCode}</td>
                <td class="m-text-left">${cmt}</td>
                <td class="m-text-left">${fullname}</td>
                <td class="m-text-left">${address}</td>
                <td class="m-text-left">${relationship}</td>
            </tr>`;
            $("table#detailshousehold tbody").append(el);
                }
                
            }
           
            
        },
        error: function(response){

        }
    });

    //tìm
    /*$(".m-table tr").dblclick(function(){
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/household",
            success: function(response){
                
                for (const household of response) {
                    let householdCode = household["Mã hộ khẩu"];
                    let cmt = household["Số CMT/CCCD"]
                    let fullname = household["Họ tên"];
                    let address = household["Nơi thường trú"];
                    let relationship = household["Quan hệ với chủ hộ"];
                    let peopleDomicile = household["Nguyên quán"];
                    let peopleNation = household["Dân tộc"];
                    let peopleEducation = household["Trình độ học vấn"];
                    let peopleDob = household["Ngày sinh"];
                    let peopleJob = household["Nghề nghiệp"];
                    let peopleSex = household["Giới tính"];
                    
                    if (condition) {
                        
                    }
                        // 
                        
                     
                
                        
                }
                
            },
            error: function(response){
    
            }
        });
    })*/
})