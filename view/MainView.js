var MainView = (function() {
    function MainView () {
        var self = this;

        this.someElement;
        this.otherElement;
    }

    MainView.prototype.create = function() {
        var data = game.gameModel.getSomethingData();
        console.log(data);
    };

    MainView.prototype.destroy = function() {
    };
    return MainView;
})();
