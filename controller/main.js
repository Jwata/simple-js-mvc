var Main = (function  () {
    function Main () {
    }

    Main.prototype.init = function() {
        var game = new GameController();
        game.create();
    };

    return Main;
})();
