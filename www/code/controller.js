var app = function(app) {

    app.makeController = function(stage, p, pages) {

        // pages.on("page", function(e) {
        pages.on("pagetransitioned", function(e) {
            zog(pages.page.name);
            if (pages.page.name == "page2"){
                p.loader.centerReg(stage);

                stage.update();
            }
        })

        var hotSpots = new zim.HotSpots([
{page:p.page1, rect:p.page1.tabs.buttons[1], call:function(){pages.go(p.page2, "down");}},
{page:p.page2, rect:p.page2.tabs.buttons[0], call:function(){pages.go(p.page1, "up");}},
          ]);

        // p.page1.tabs.on("change", function() {
        //     zog("button = " + p.page1.tabs.text);
        //     pages.go(p.page2, "down");
        // });
        // p.page2.logo.on("mousedown", function(){
        //     pages.go(p.page1, "up");
        // })

        p.loader.on("loaded",function(e){
            zim.loop(e.bitmaps, function(bitmap){
                bitmap.scaleTo(p.content2,100,100).centerReg(p.content2, true, 0); // under mosaic
            });
            p.loader.removeFrom(p.loader.parent);

            var pic = e.bitmap;
            pic.cache(0,0,pic.getBounds().width,pic.getBounds().height);

            pic.on("pressmove", function(){

                function pickcolor() {
                    var x = stage.mouseX;
                    var y = stage.mouseY;
                    var point = pic.globalToLocal(x,y);
                    var pixel = pic.cacheCanvas.getContext("2d").getImageData(point.x, point.y, 1, 1);
                    var data = pixel.data;
                    var color = 'rgba('+  data[0] + ','
                                   +  data[1] + ','
                                   +  data[2] + ','
                                   + (data[3] / 255) +
                    ')';


                    var point = pic.parent.globalToLocal(x,y);
                    if (zim.rand() < .2){
                    // var circle = new zim.Circle(10,color).addTo(stage).pos(stage.mouseX,stage.mouseY);
                        // var draw = p.brush.clone().addTo(mosaic,zim.rand(mosaic.numChildren - 1)).pos(stage.mouseX,stage.mouseY);
                        if (p.brush.custom == 1) {
                            zog("custom1");
                            var draw = new zim.Shape(30,30).scale(.1).addTo(p.mosaic).pos(point.x, point.y);
                            draw.graphics.f(color).p("ANcUnI6yACIoV5eIVrvzIVsPvg");
                        } else if(p.brush.custom == 2){
                            zog("custom2");
                            var draw = new zim.Shape(30,30).scale(.1).addTo(p.mosaic).pos(point.x, point.y);
                            draw.graphics.f(color).p("AgLnFQhwhTiJgeQkRg+h9EHQiAEQFvFvQC4C4DRCCQDZh0DEivQGIlbhwklQhxkoknBAQhcAThjA2g");
                        }  else if(p.brush.custom == 3){
                            zog("custom2");
                            var draw = new zim.Shape(30,30).scale(.1).addTo(p.mosaic).pos(point.x, point.y);
                            draw.graphics.f(color).p("AFFF+QAuCaAKA0QAmC1gnBJQgwBYhGAyQhjBHiIgMQhBgFhGgjQhPgngpg6Qgqg6gShTQgPhHAAhgQAAgpAVg7QAahAAJgcIglA1QgpA5haBaQiICJhGAIQiEAQhggqQg7gagyg1Qg6g+gUh5QgRhtAWhOQAliDDJhCQBlgiBigJQgLgDhPgIQhVgIg6gMQjEgmgrhtQgbhDAOiHQAPiDAkgwQAzhEAogfQBGg1BfgIQCCgJCqCKQBVBFA2BAQgFgKgHgQQgJgSgLghQgFgRgDgMQgGgRgDgSQgHghgCgVIgCgDIgDhEQgBgiAIgwIAAgCQALg4AUgqQA3h5BogeIAYgGQBPgOBcAGQBxAIA4AoQCPBngeDfQgPBvgsBgQABgBApg5QA1hCA5gzQC3ikCyAlQBXASBUBbQA/BEAjBIQAEAIAEANQAgBdhRBuQgdAngtAmQgwAmgaAPIhAAkIgDABQgVAKgjAOQgVAIgRAFQhCAcgKADQgKADC0AOQDEAVAxAjQBPA7ANBzQANBrgvBuQgvBxhUA8QheBDhrgZQjhg1hZhaQgZgagXgmQgTgggKgHg");
                        } else if(p.brush.custom == 4){
                            zog("custom2");
                            var draw = new zim.Shape(30,30).scale(.1).addTo(p.mosaic).pos(point.x, point.y);
                            draw.graphics.f(color).p("AtZAAINZyhINaShItaSig");
                        } else {
                            var draw = p.brush.clone().addTo(p.mosaic,zim.rand(p.mosaic.numChildren - 1)).pos(point.x, point.y);
                            draw.color = color;
                        }
                    }




                    stage.update();

                };
                pickcolor();



                //////get brush
                			// function getbrush(){

                			// }



                //use the brush to draw

                	  //       function draw(x, y, pickcolor) {
                	  //       	zog(p.brushes);
                	  //               p.brush.fillStyle = color;
                	  //               p.brush.beginPath();
                	  //               p.brush.arc(stage.mouseX, stage.mouseY, 0, 2*Math.PI);
                	  //               p.brush.fill();
                	  //           zog(color)
                	  //           };
                	  //       draw();
                			// draw(x, y + img.height + 20, color);

                    	});






            stage.update();
        });



        // SAVE BUTTON
        // The Loader comes with a save() method to save a picture in the browser
        var saveBut = p.page2.tabs.buttons[2];
        saveBut.color = frame.purple;
        saveBut.text = "SAVE";
        saveBut.on("click", function() {
            if (p.content2.numChildren < 1) return;
            p.loader.save(p.content2);
        });




        // DELETE
        // Delete would normally be a button but the room available was small...
        // Also, Delete usually needs a confirmation pop-up which can be handled with a zim.Pane()
        // but here we try something different - we use a CheckBox to allow users to change their mind
        // but if the user goes to another item then the delete is final and the layer is removed
        // This lets us fit in a CheckBox like the others, and provides a temporary way to undo
        var deleteBox = p.page2.tabs.buttons[1];
        deleteBox.label.color = "#880000";

        deleteBox.on("click", function() {
            // temporarily remove the item but give user a chance to undo delete
            // once another item is selected we will permanantly delete the layer
            // we need to handle permanetly deleting in the setItem()

            p.content2.visible = false;
 //////////////////////////////////////////////I'm try to add the loader when the pic has been delete.
 /////////////////////////////////////////////but it dosen't work
            p.loader.addTo(stage);


            stage.update();
        });
        p.content2.visible = true;



        // SIZE the brush
        // Make size controls with a divider backing and a Label
        // Create an event that will set the scale of the content item to the Slider value
        p.slider.on("change", function(){
            // if (p.brush) p.brush.clone().scale(p.slider.currentValue);
             if (p.brush) p.brush.scale(p.slider.currentValue);
            stage.update();
        });



    }//end of make controller





    return app;
}(app || {});
