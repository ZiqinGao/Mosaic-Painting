
var app = function(app) {

    app.makePages = function(frame, stage, stageW, stageH, layoutManager){

        var p = {};

        var page1 = p.page1 = new zim.Container(stageW, stageH)
            .addTo(stage);
        page1.name = "page1";

        var logo = frame.asset("icon-40@2x.png")
            .addTo(page1);




        var content = new zim.Rectangle(700,600,frame.tin)
            .addTo(page1);
            // var introdution = new zim.Label("here is the introdution for how to use it", 10, "Courier", "white");
            // introdution.y-=8;

        var introduction = p.introduction = new zim.Label({
            text:"Welcome to \"mosaic painting\", here you can use 7 different kinds of brushes to create your mosaic painting. Before you start painting, you need to upload an original picture. Then you can choose a brush to augment the picture. You can control brush sizes with the silder. Have Fun! ",
            align:"center",
            valign:"center",
            size:30,
            color:"white",
            lineHeight: 50,
            lineWidth: 600 //The width of the text line
        }).addTo(content);

        introduction.x += 350; //adds to the X
        introduction.y += 250; // adds to the y

        var buttons = new zim.Container()
            .addTo(page1);
        var tabs = page1.tabs = new zim.Tabs({
            width:430,
            color:"yellowgreen",
            // tabs:["ONE", "TWO", "THREE"]
            tabs:["START"],
            currentEnabled: true
        }).addTo(buttons);
        zog(tabs.buttons[0].text);


        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey
        var layout = new zim.Layout({
            holder:page1,
            regions:[
        {object:logo, marginTop:5, maxWidth:80, height:10, align:"center", valign:"top"},
        {object:content, marginTop:1, maxWidth:100, backgroundColor:frame.grey},
        {object:buttons, marginTop:5, maxWidth:100, minHeight:10,}
            ],
            lastMargin:3,
            //regionShape:new zim.Shape(),
            scalingObject:stage
        });
        layoutManager.add(layout);


        ////////////////////////////////////////


        // PAGE 2

        var page2 = p.page2 = new zim.Container(stageW, stageH)
            //.addTo(stage);
        page2.name = "page2";

/////header

        var header = page2.bheader = new zim.Container()
            .addTo(page2);


        var tabs = p.page2.tabs = new zim.Tabs({
            width:210,
            height:25,
            tabs:["BACK","DELETE","SAVE"],
            currentEnabled:true
        }).addTo(header);
        tabs.selectedIndex = -1;
        //zog(tabs.header[0].text);



        var content2 = p.content2 = new zim.Container(1024,768)
            .addTo(page2);


        var mosaic = p.mosaic = new zim.Container()
            .addTo(content2);


        var loader = p.loader = new zim.Loader({
            frame:frame,
            label:new zim.Label({
                text:"Click or \nDrop Images",
                align:"center",
                valign:"center",
                size:20,
                color:"rgba(0,0,0,.5)"
            }),
            corner:40,
            width:400,
            height:200
        })




        var buttons2 = new zim.Container(300,80)
            .addTo(page2);

////brush size control
        var slider = p.slider =  new zim.Slider({
            min:.1,
            max:5,
            // vertical:true,
            inside:true,
            barLength:260,
            button:new zim.Button({
                width:15, height:15,
                color:frame.grey,
                rollColor:frame.green,
                corner:8,
                label:""
            }).expand(20,6)
        });

            slider.addTo(buttons2);
            slider.currentValue = 1;
            slider.scale(1);
            slider.x = 20;
            slider.y = 20;

 ///////////////////////////////////////////////////create brushes

        var brushes = p.brushes = new zim.Container();
            brushes.addTo(buttons2).mov(0,30);



        var circle = new zim.Circle(15,"red");
        var triangle = new zim.Triangle(30,30,30,"yellow");
        var rectangle = new zim.Rectangle(25,25,"blue");

        var custom1 = new zim.Shape(30,30)
            .scale(.1);
        custom1.custom = 1;
        custom1.graphics.f("yellowgreen").p("ANcUnI6yACIoV5eIVrvzIVsPvg");


        var custom2 = new zim.Shape(30,30)
            .scale(.22);
        custom2.custom = 2;
        custom2.graphics.f(frame.purple).p("AgLnFQhwhTiJgeQkRg+h9EHQiAEQFvFvQC4C4DRCCQDZh0DEivQGIlbhwklQhxkoknBAQhcAThjA2g");


        var custom3 = new zim.Shape(30,30)
            .scale(.12);
        custom3.custom = 3;
        custom3.graphics.f("orange").p("AFFF+QAuCaAKA0QAmC1gnBJQgwBYhGAyQhjBHiIgMQhBgFhGgjQhPgngpg6Qgqg6gShTQgPhHAAhgQAAgpAVg7QAahAAJgcIglA1QgpA5haBaQiICJhGAIQiEAQhggqQg7gagyg1Qg6g+gUh5QgRhtAWhOQAliDDJhCQBlgiBigJQgLgDhPgIQhVgIg6gMQjEgmgrhtQgbhDAOiHQAPiDAkgwQAzhEAogfQBGg1BfgIQCCgJCqCKQBVBFA2BAQgFgKgHgQQgJgSgLghQgFgRgDgMQgGgRgDgSQgHghgCgVIgCgDIgDhEQgBgiAIgwIAAgCQALg4AUgqQA3h5BogeIAYgGQBPgOBcAGQBxAIA4AoQCPBngeDfQgPBvgsBgQABgBApg5QA1hCA5gzQC3ikCyAlQBXASBUBbQA/BEAjBIQAEAIAEANQAgBdhRBuQgdAngtAmQgwAmgaAPIhAAkIgDABQgVAKgjAOQgVAIgRAFQhCAcgKADQgKADC0AOQDEAVAxAjQBPA7ANBzQANBrgvBuQgvBxhUA8QheBDhrgZQjhg1hZhaQgZgagXgmQgTgggKgHg");

        var custom4 = new zim.Shape(30,30)
            .scale(.12);
        custom4.custom = 4;
        custom4.graphics.f("green").p("AtZAAINZyhINaShItaSig");


        var brushShape = [circle,triangle,rectangle,custom1,custom2,custom3,custom4];
        zim.loop(brushShape,function(brush){
            brush.addTo(brushes);


            circle.x = 30;
            circle.y = 30;

            triangle.x = 75;
            triangle.y =30;

            rectangle.centerReg();
            rectangle.x = 120;
            rectangle.y = 30;

            custom1.centerReg();
            custom1.x = 160;
            custom1.y = 30;


            custom2.centerReg();
            custom2.x = 205;
            custom2.y = 32;

            custom3.centerReg();
            custom3.x = 245;
            custom3.y = 30;

            custom4.centerReg();
            custom4.x = 280;
            custom4.y = 30;

        });



            circle.on("mousedown", function() {
                zog("circle");
                p.brush = circle;
            });

           triangle.on("mousedown", function() {
                zog("triangle");
                p.brush = triangle;
            });

            rectangle.on("mousedown", function() {
                zog("rectangle");
                p.brush = rectangle;
            });

            custom1.on("mousedown", function() {
                zog("custom1");
                p.brush = custom1;
            });


            custom2.on("mousedown", function() {
                zog("custom1");
                p.brush = custom2;
            });



            custom3.on("mousedown", function() {
                zog("custom3");
                p.brush = custom3;
            });


            custom4.on("mousedown", function() {
                zog("custom4");
                p.brush = custom4;
            });

///////the mask 
        var mask = p.mask = new zim.Rectangle(100,100, "red").addTo(content2).alp(0);
       // mosaic.setMask(mask);

        // LAYOUT
        // holder, regions, lastMargin, backgroundColor,
        // vertical, regionShape, scalingObject, hideKey
        var layout2 = new zim.Layout({
            holder:page2,
            regions:[
        {object:header, marginTop:3, maxWidth:80, height:8, align:"center", valign:"top"},
        {object:content2, marginTop:2, maxWidth:100, backgroundColor:frame.grey},
        {object:buttons2, marginTop:1, maxWidth:100, minHeight:13,}
            ],
            lastMargin:3,
            // regionShape:new zim.Shape(),
            scalingObject:stage
        });
        layoutManager.add(layout2);
        // buttons2.outline()
        return p;
    }



    return app;

}(app || {});
