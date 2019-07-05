$(document).ready(function(){
    $.ajax({
        url:"js/main-right.json",//为什么要加上前缀文件名？
        success:function(json){
            $.each(json.title,function(index,value){
                let title_item= "<p class=\"title\"><a  href=\"#\">首页 /</a>"+value+"</p>" + "<div class=\"row prd\"></div>";
                $(".main-right").append(title_item);
                $.each(json.product[index],function(key,value){
                        let prd = "<div class=\"col-sm-4 col-md-4 col-xs-12\">\n" +
                            "       <div class=\"item thumbnail\">\n" +
                            "           <a href=\"#\"><img src=\""+value.src+"\" alt=\"\"></a>\n" +
                            "           <h1>"+value.name+"</h1>\n" +
                            "           <h2>"+value.price+"</h2>\n" +
                            "           <p><a href=\"#\">"+value.detail1+"</a></p>\n" +
                            "           <p>"+value.detail2+"</p>\n" +
                            "           <a href=\"#\" class=\"btn1\">立即购买</a>\n" +
                            "       </div>\n" +
                            "</div>";
                        $(".prd").eq(index).append(prd)
                })
            })
        },
        error:function(){
            alert("产品页调用失败")
        }
    }),
    $.ajax({
        url:"js/main-left.json",//为什么要加上前缀文件名？
        success:function(json){
            $.each(json.menu,function(index,value){
            let menu_item =
                "<div class=\"menu \">\n"+
                "<p class=\""+value.color+"\">"+value.name+"</p>\n"+
                "<ul class=\"menu_dt\">\n"+
                "</ul>\n"+
                "</div>";
            $(".main-left").append(menu_item);
            $.each(json.menu_detail[index],function(key,value){
                let menu_dt= "<li><a href=\"#\">"+value.name+"<span class=\"badge "+value.color+"\">"+value.count+"</span></a></li>";
                $(".menu_dt").eq(index).append(menu_dt);
            })
            })
        },
        error:function(){
            alert("菜单页调用失败")
        }
    })
})