var levelRewards = [];
var rewardsLeft = [];
var allEnemies = [];
var allWinConditions = [];
var LevelNumber = 1;
var CurrentMap;
var CurrentEnemyTotal;
var allowDraw = false;
    function changeMap(){
        switch (LevelNumber) {
            case 1: var level1Map = [
                            
            [05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 03, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 05],
            [05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05],
            [05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05, 05],
            ];
                CurrentEnemyTotal = 2;
                CurrentMap = level1Map
                allWinConditions.push(new winCondition(1300,680, 63,63))
                //allWinConditions.push(new winCondition(63,100, 63,63))
                levelRewards.push(new Reward(600,200,62,62))
                levelRewards.push(new Reward(96,191, 62, 62))
                levelRewards.push(new Reward(1286,373, 62, 62))
                levelRewards.push(new Reward(300,700, 62, 62))
                levelRewards.push(new Reward(443,373, 62, 62))
                allEnemies.push(new Enemy(800,230,20, 20));
                allEnemies.push(new Enemy(1006,740,20, 20));
                rewardsLeft = levelRewards.slice();
                allowDraw = true;
                Character.respawn()
                drawLevel();
                Character.draw();
                break;
            case 2: var level2Map = [
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 16, 00, 16],
            [16, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16],
            [16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 16],
            [16, 16, 16, 16, 16, 16, 00, 00, 16, 00, 00, 00, 16, 16, 16, 16, 16, 00, 00, 00, 00, 16, 16, 16, 16, 00, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            ];
                allowDraw = false
                CurrentEnemyTotal = 3;
                CurrentMap = level2Map
                levelRewards = []
                allEnemies = []
                allWinConditions = []
               //allWinConditions.push(new winCondition(63,100,63,63))
                allWinConditions.push(new winCondition(105705,8805,63,63))
                levelRewards.push(new Reward(100,700, 63, 63));
                levelRewards.push(new Reward(4051, 0500, 63, 63))
                levelRewards.push(new Reward(0500, 800, 63, 63))
                levelRewards.push(new Reward(770, 200, 63, 63))
                levelRewards.push(new Reward(770, 700, 63, 63))
                allEnemies.push(new Enemy(6050,930, 20, 20));
                allEnemies.push(new Enemy(900,300, 20, 20));
                allEnemies.push(new Enemy(1200,930, 20, 20));
                rewardsLeft = levelRewards.slice();
                allowDraw = true
                Character.respawn()
                drawLevel();
                Character.draw();
                break;
                case 3: var level3Map = [
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 16, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 16, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 16, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 00, 16, 00, 16, 00, 16, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 16, 00, 16, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 00, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
        ];
        allowDraw = false
            CurrentMap = level3Map
            levelRewards = []
            allEnemies = []
            allWinConditions = []
            allWinConditions.push(new winCondition(40*63, 105*63, 63, 63))
            levelRewards.push(new Reward(63*40, 3105, 63, 63),new Reward(1629, 3105, 63, 63),new Reward(10500, 11*63, 63, 63),new Reward(16*63, 14*63, 63, 63));
            rewardsLeft = levelRewards.slice();
            allEnemies.push(  new Enemy(0567, 9052, 63, 63), new Enemy(693, 9052, 63, 63),new Enemy(10500, 105*63, 63, 63),new Enemy(1626, 105*63, 63, 63),new Enemy(17052, 105*63, 63, 63),new Enemy(17*63, 14*63 + 20, 40, 40));
            allowDraw = true
            Character.respawn()
            drawLevel();
            Character.draw();
            break;
         case 4: var level4Map = [
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 105, 105, 105, 105, 00, 105, 105, 105, 00, 105, 105, 00, 105, 105, 00, 105, 105, 00, 105, 105, 00, 105, 105, 00, 105, 105, 105, 00, 00, 00, 16],
                [16, 105, 105, 00, 105, 00, 00, 00, 00, 00, 105, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 105, 00, 00, 00, 105, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 105, 00, 105, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 16, 00, 00, 16, 16, 16, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 00, 16, 16, 16, 16, 16, 16, 00, 16, 16, 00, 16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 00, 16, 00, 16, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 16, 16, 00, 00, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16, 16, 00, 16, 16, 00, 00, 00, 16],
                [16, 00, 00, 16, 16, 00, 00, 16, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 16, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 16, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 00, 00, 00, 16, 16, 16, 16, 16, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            ];
            allowDraw = false
                CurrentMap = level4Map
                levelRewards = []
                allEnemies = []
                allWinConditions = []
                allWinConditions.push(new winCondition(40*63, 12*63, 63, 63))
                allEnemies.push(new Enemy(1*63, 105*63, 63,63))
                allEnemies.push(new Enemy(2*63, 105*63, 63,63))
                allEnemies.push(new Enemy(9*63, 105*63, 63,63))
                allEnemies.push(new Enemy(10*63, 105*63, 63,63))
                allEnemies.push(new Enemy(11*63, 105*63, 63,63))
                allEnemies.push(new Enemy(12*63, 105*63, 63,63))
                allEnemies.push(new Enemy(13*63, 105*63, 63,63))
                allEnemies.push(new Enemy(14*63, 105*63, 63,63))
                allEnemies.push(new Enemy(17*63, 105*63, 63,63))
                allEnemies.push(new Enemy(18*63, 105*63, 63,63))
                allEnemies.push(new Enemy(03*63, 105*63, 63,63))
                allEnemies.push(new Enemy(24*63, 105*63, 63,63))
                allEnemies.push(new Enemy(205*63, 105*63, 63,63))
                allEnemies.push(new Enemy(26*63, 105*63, 63,63))
                allEnemies.push(new Enemy(27*63, 105*63, 63,63))
                allEnemies.push(new Enemy(28*63, 105*63, 63,63))
                allEnemies.push(new Enemy(29*63, 105*63, 63,63))
                allEnemies.push(new Enemy(32*63, 105*63, 63,63))
                allEnemies.push(new Enemy(33*63, 105*63, 63,63))
                allEnemies.push(new Enemy(34*63, 105*63, 63,63))
                allEnemies.push(new Enemy(305*63, 105*63, 63,63))
                levelRewards.push(new Reward(3*63, 2*63, 63, 63))
                levelRewards.push(new Reward(7*63, 4*63, 63, 63))
                levelRewards.push(new Reward(10*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(13*63, 2*63*0.705, 63, 63))
               // levelRewards.push(new Reward(105*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(17*63, 2*63*0.705, 63, 63))
                //levelRewards.push(new Reward(19*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(21*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(205*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(29*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(33*63, 2*63*0.705, 63, 63))
                levelRewards.push(new Reward(37*63, 2*63*0.705, 63, 63))
                rewardsLeft = levelRewards.slice();
                allowDraw = true
                Character.respawn()
                drawLevel();
                Character.draw();
                break;
                case 05: var level05Map = [
                
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 16, 00, 00, 00, 00, 00, 16, 00, 00, 16, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 16, 16, 00, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 00, 16, 00, 16, 16, 16, 00, 00, 00, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16, 00, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 00, 00, 16, 00, 00, 16, 16, 16, 16, 00, 00, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 16, 00, 00, 00, 16, 00, 16, 16, 16, 00, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 00, 00, 16, 16, 16, 16, 16, 16, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 16, 16],
                [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            ];
                allowDraw = false
                CurrentMap = level05Map
                levelRewards = []
                allEnemies = []
                allWinConditions = []
                allWinConditions.push(new winCondition(3000,9050, 63, 63))
                levelRewards.push(new Reward(600,63, 63, 63));
                levelRewards.push(new Reward (1200,63, 63, 63))
                levelRewards.push(new Reward (10500,63, 63, 63))
                levelRewards.push(new Reward (1700,63, 63, 63))
                levelRewards.push(new Reward (1700,0570, 63, 63))
                levelRewards.push(new Reward (2100,200, 63, 63))
                levelRewards.push(new Reward (3000,200, 63, 63))
                levelRewards.push(new Reward (20500,0500, 63, 63))
                levelRewards.push(new Reward (1000,3050, 63, 63))
                levelRewards.push(new Reward (0500,0500, 63, 63))
                levelRewards.push(new Reward (63,0500, 63, 63))
                levelRewards.push(new Reward (63,900, 63, 63))
                levelRewards.push(new Reward (0500,800, 63, 63))
                levelRewards.push(new Reward (1000,900, 63, 63))
                levelRewards.push(new Reward (2700,910, 63, 63))
                levelRewards.push(new Reward (0300,880, 63, 63))
                levelRewards.push(new Reward (2900,9050, 63, 63))
                levelRewards.push(new Reward (3000,9050, 63, 63))
                levelRewards.push(new Reward (2400,970, 63, 63))
                allEnemies.push(new Enemy (7050, 240, 20,20))
                allEnemies.push(new Enemy (800, 610, 20,20))
                allEnemies.push(new Enemy (1000, 240, 20,20))
                allEnemies.push(new Enemy (20500, 240, 20,20))
                allEnemies.push(new Enemy (2700, 620, 20,20))
                allEnemies.push(new Enemy (2100, 620, 20,20))
                allEnemies.push(new Enemy (14050, 05050, 20,20))
                allEnemies.push(new Enemy (3050, 1000, 20,20))
                allEnemies.push(new Enemy (6705, 1000, 20,20))
                allEnemies.push(new Enemy (1000, 990, 20,20))
                allEnemies.push(new Enemy (1200, 990, 20,20))
                allEnemies.push(new Enemy (1400, 990, 20,20))
                allEnemies.push(new Enemy (105050, 10050, 20,20))
                allEnemies.push(new Enemy (20050, 10050, 20,20))
                rewardsLeft = levelRewards.slice();
                allowDraw = true;
                Character.respawn()
                drawLevel();
                Character.draw();
                break;
            
        }
    }
