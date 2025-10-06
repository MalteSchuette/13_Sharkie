let level1;

function initLevel() {
    level1 =  new Level(
        [
        new LilaJelly(750,250),
        new YellowJelly(1750, 400),
        new GreenJelly(750, 50),
        new PinkJelly(1750, 200),
        new GreenFish(1900,10),
        new GreenFish(1900,80),
        new GreenFish(1900,150),
        new GreenFish(1900,220),
        new GreenFish(1900,370),
        new GreenFish(1900,440),
        new OrangeFish(900,10),
        new OrangeFish(900,80),
        new OrangeFish(900,230),
        new OrangeFish(900,300),
        new OrangeFish(900,370),
        new OrangeFish(900,440),
        new PinkFish(2300,10),
        new PinkFish(2300,80),
        new PinkFish(2300,230),
        new PinkFish(2300,300),
        new PinkFish(2300,370),
        new PinkFish(2300,440),
        new Endboss()
        ],
        [
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', -720),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', -720),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', -720),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', -720),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 0),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 0),
            new BackgroundObject('assets/img/3. Background/Layers/1. Light/1.png', 0),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 720),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 720),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 720),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 720),
            new BackgroundObject('assets/img/3. Background/Layers/1. Light/2.png', 720),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 720*2),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 720*2),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 720*2),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 720*2),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 720*3),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 720*3),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 720*3),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 720*3),
        ],
        [
        new Coin(100, 100),
        new Coin(280, 50),
        new Coin(380, 150),
        new Coin(1200, 250),
        new Coin(1500, 350)
        ]
    );
}