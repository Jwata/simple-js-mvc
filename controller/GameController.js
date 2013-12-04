var GameController = (function() {
    function GameController () {
        var self = this;
    }

    GameController.prototype.create = function() {
        this.init();
    };

    GameController.prototype.init = function() {
        console.log('init game ....');
    };

    GameController.prototype.finish = function() {
        console.log('finish game ....');
    };

    return GameController;
})();