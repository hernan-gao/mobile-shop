$(document).ready(function(){
    for(let i=0;i<title.length;i++){
        let title_item= "<p class=\"title\"><a  href=\"#\">首页 /</a>"+title[i]+"</p>" + "<div class=\"row prd\"></div>";
        $(".main-right").append(title_item);
        for (let j=0;j<prduction[i].length;j++) {
            let prd = "<div class=\"col-sm-4 col-md-4 ol-xs-12\">\n" +
                "       <div class=\"item thumbnail\">\n" +
                "           <img src=\""+prduction[i][j].src+"\" alt=\"\">\n" +
                "           <h1>"+prduction[i][j].name+"</h1>\n" +
                "           <h2>"+prduction[i][j].price+"</h2>\n" +
                "           <p><a href=\"#\">"+prduction[i][j].detail1+"</a></p>\n" +
                "           <p>"+prduction[i][j].detail2+"</p>\n" +
                "           <a href=\"#\" class=\"btn1\">立即购买</a>\n" +
                "       </div>\n" +
                "</div>";
            $(".prd").eq(i).append(prd)
        }
    }
    for(let k=0;k<menu.length;k++){
        let menu_item =
            "<div class=\"menu \">\n"+
            "<p class=\""+menu[k].color+"\">"+menu[k].name+"</p>\n"+
            "<ul class=\"menu_dt\">\n"+
            "</ul>\n"+
            "</div>";
        $(".main-left").append(menu_item);
        for(let l=0;l<menu_detail[k].length;l++){
            let menu_dt= "<li><a href=\"#\">"+menu_detail[k][l].name+"<span class=\"badge "+menu_detail[k][l].color+"\">"+menu_detail[k][l].count+"</span></a></li>";
            $(".menu_dt").eq(k).append(menu_dt);
        }
    }
})