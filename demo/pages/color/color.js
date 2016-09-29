Page({
    time:null,
    position : -1,
    data:{
        recordName:'过关：',
        second : 0,
        record :0,
        n : 5,
        mColors:[],
        modalHidden:true
    },
    onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
        this.data.mColors = [];

        this.chooseColor = this.changeColor;
    },
    startGrame: function(e){
        var self = this;
        this.time = setTimeout(function countdown(){
            var second = self.data.second;
            if(second){
                self.setData({second:second-1});
                setTimeout(countdown,1000);
            }else{
                self.time = null;
                self.chooseColor = function(){}
                self.setData({modalHidden:false});
            }
        },0);
    },
    beginGrame: function(){
        this.setData({
            mColors : this.initColors(),
            record : 0,
            second :60
        });
        this.startGrame();
    },
    changeColor: function(e){
        var target = e.target,
            dataset = target && target.dataset,
            position = dataset && dataset.position;
            console.log(this.position,position);
           if(this.position == position){
               this.setData({
                    mColors : this.initColors(),
                    record : this.data.record+1
               });
           }

    },
    getRandom: function(){
        var n = this.data.n,
            maxtra = n * n;
        return this.position = Math.floor(Math.random() * maxtra);  
    },
    getRandomColor: function(){
        return Math.floor(Math.random() * 255);  
    },
    initColors: function(){
        var colorArr = [],
            n = this.data.n,
            maxtra = n * n,
            randomColor = this.getRandomColor(),
            random = this.getRandom();
        for(var i = maxtra;i--;){
            if(i === random){
                colorArr[i] = randomColor - 15 < 0 ? randomColor + 15 :randomColor - 15 ;
            }else{
                 colorArr[i] = randomColor;
            }
           
        }
        return colorArr;
    },
    reset: function(){
        this.setData({
            mColors : [],
            record : 0,
            modalHidden:true
        });
       this.chooseColor =  this.changeColor; 
    }
})