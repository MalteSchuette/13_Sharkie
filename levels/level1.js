let level1;

function initLevel() {
    level1 =  new Level(
        [
        new LilaJelly(250,250),
        new YellowJelly(),
        new GreenJelly(),
        new PinkJelly(),
        new GreenFish(400,300),
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
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 720*4),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 720*4),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 720*4),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 720*4),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 720*5),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 720*5),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 720*5),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 720*5),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 720*6),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 720*6),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 720*6),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 720*6),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D2.png', 720*7),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D2.png', 720*7),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D2.png', 720*7),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D2.png', 720*7),
            new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 720*8),
            new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 720*8),    
            new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 720*8),
            new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 720*8)
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