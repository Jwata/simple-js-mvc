var GameController = (function() {
    function GameController () {
        var game = self = this;

        this.gameModel;
        this.mainView;
    }

    GameController.prototype.create = function() {
        self.gameModel = new GameModel();
        self.gameModel.create();

        self.mainView = new MainView();
        //self.mainView.setGame(game);
        self.mainView.create();

        self.initGame();
    };

    GameController.prototype.initGame = function() {
        console.log('init game ....');

        // now that we've created all the view elements,
        // and the model, get the game started
    };

    GameController.prototype.finish = function() {
        console.log('finish game ....');
    };

    return GameController;
})();
