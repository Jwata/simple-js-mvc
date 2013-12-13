var GameModel = (function() {
    function GameModel () {
        var self = this;

        this.privateData;
        this.somthingData;
    }

    GameModel.prototype.create = function() {
        //this.privateData = _root.lwf.privateData;

        this.somthingData = "hoge";
    };

    GameModel.prototype.getSomethingData = function() {
        return this.somthingData;
    };

    return GameModel;
})();
