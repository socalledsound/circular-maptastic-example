// 2. Define your p5 Sketch using Instance Mode syntax (passing 'p')
    const sketch1 = (p) => {
        let img
        let maskedImg
      p.setup = async () => {
        img = await p.loadImage('cute.png');
       
        // Create canvas inside the specified element size
        let canvas = p.createCanvas(400, 400);
        
        // Give your canvas element a specific ID so Maptastic can find it
        canvas.id('p5-canvas1');
        
        p.background(0);
        
        
        // 3. Initialize Maptastic once the canvas element exists in the DOM
        //Maptastic('p5-canvas1');
        Maptastic('p5-canvas1');
      };

      p.draw = () => {
        p.background(0, 10); // leave trails
      maskedImg = createCircularMask(img, p)
      //console.log(maskedImg)
       p.imageMode(p.CENTER);
        p.image(maskedImg, 200,200, p.width,p.height);
      };
      
    };

    

    // 4. Instantiate the p5 sketch into your container element
    const myP5Instance1 = new p5(sketch1, 'left-side');
    //const myP5Instance2 = new p5(sketch2, 'right-side');


    function  createCircularMask(img, p) {
     console.log(img.width)
    let maskedImg = img.get()
    // Create an offscreen graphics buffer for the mask
    let maskBuffer = p.createGraphics(p.width,p.height)
     maskBuffer.circle(200,200, 200);
    // Apply the mask to the image
    maskedImg.mask(maskBuffer);
  return maskedImg
  }