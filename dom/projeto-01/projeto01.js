new Vue({
    el:'#app',
    data: {
        monsterLifeBar: 'lifeBar',
        playerLifeBar: 'lifeBar',
        lifePlayer: 100,
        lifeMonster: 100,
        resultClass: '',
        resultText: '',
        arrLog: [],
        numSpecialAttack: 10,
        numAddLife: 5
    },
    computed:{
        widthLifePlayer() {
            if (this.lifePlayer <= 20) {
                this.playerLifeBar = 'lifeBarDanger';
            } else {
                this.playerLifeBar = 'lifeBar';
            }
            return 'width:' + this.lifePlayer + '%'
        },
        widthLifeMonster() {
            if (this.lifeMonster <= 20) {
                this.monsterLifeBar = 'lifeBarDanger';
            }
            return 'width:' + this.lifeMonster + '%'
        },
        showControls() {
            return this.lifeMonster > 0 && this.lifePlayer > 0;
        }
    },
    methods: {
        attack: function(special) {
            let damage1 = Math.random()/10,
                damage2 = Math.random()/10,
                damageMonster = 0,
                damagePlayer = 0
            ;
            
            damageMonster = Math.ceil(this.calcDamage((damage2 < damage1) 
            ? damage2 : damage1, this.lifeMonster));
            damagePlayer = Math.ceil(this.calcDamage((damage2 > damage1) 
            ? damage2 : damage1, this.lifePlayer));

            if (special === true && this.numSpecialAttack > 0) {
                this.lifePlayer += 2;
                this.numSpecialAttack -=1;
            }

            this.lifeMonster -=  damageMonster;
            if (this.lifeMonster > 0) {
                this.lifePlayer -= damagePlayer;
            }
            this.addLog(damagePlayer, damageMonster);

            if (this.lifePlayer === 0) {
                this.resultText = 'You Loose!';
                this.resultClass = 'text-danger'
            } else if(this.lifeMonster === 0) {
                this.resultClass = 'text-success';
                this.resultText = 'You Win!';
            }
        },
        calcDamage: function(damage, life) {
            return damage * life;
        },
        addLife: function() {
            if (this.numAddLife > 0) {
                let damage = Math.random()/10,
                    damagePlayer = 0;
                ;
                damagePlayer = Math.ceil(this.calcDamage(damage, this.lifePlayer));
                this.lifePlayer += 3;
                this.lifePlayer -= damagePlayer
                this.numAddLife -=1;
                this.addLog(damagePlayer, 0);
            }
        },
        giveUp()
        {
            this.lifeMonster = this.lifePlayer = 100;
            this.monsterLifeBar = this.playerLifeBar = 'lifeBar';
            this.arrLog = [];
            this.numAddLife = 5;
            this.numSpecialAttack = 10;
        },
        addLog(damagePlayer, damageMonster) {
            this.arrLog.unshift({'monster': damagePlayer, 'player': damageMonster});
        }
    }
});