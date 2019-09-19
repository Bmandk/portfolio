var x = {
    "projects": [
        {
            "type": "twopiece",
            "directory": "smadreland",
            "thumbnail": {
                "image": require("./projects/smadreland/smadreland.jpg"),
                "text": "Smadreland Simulator"
            },
            "page": {
                "name": "Smadreland Simulator (2018)",
                "markdown": require("./projects/smadreland/smadreland.md"),
                "media1": require("./projects/smadreland/smadreland-game.jpg"),
                "media2": require("./projects/smadreland/smadreland.mp4")
            }
        },
        {
            "type": "onepiece",
            "directory": "idleconquest",
            "thumbnail": {
                "image": require("./projects/idleconquest/idleconquest.jpg"),
                "text": "IdleConquest"
            },
            "page": {
                "name": "IdleConquest (2018)",
                "markdown": require("./projects/idleconquest/idleconquest.md"),
                "media": require("./projects/idleconquest/idleconquest-game.jpg")
            }
        },
        {
            "type": "twopiece",
            "directory": "michelsinnerjourney",
            "thumbnail": {
                "image": require("./projects/michelsinnerjourney/michel.jpg"),
                "text": "Michel's Inner Journey"
            },
            "page": {
                "name": "Michel's Inner Journey (2018)",
                "markdown": require("./projects/michelsinnerjourney/michel.md"),
                "media1": require("./projects/michelsinnerjourney/michel-game.jpg"),
                "media2": require("./projects/michelsinnerjourney/michel-game.mp4")
            }
        },
        {
            "type": "game",
            "directory": "vikingrevenge",
            "thumbnail": {
                "image": require("./projects/vikingrevenge/viking-revenge.jpg"),
                "text": "Viking Revenge"
            },
            "page": {
                "name": "Viking Revenge (2017)",
                "markdown": require("./projects/vikingrevenge/viking-revenge.md"),
                "gamejson": process.env.PUBLIC_URL + "/projects/vikingrevenge/Build/VikingRevenge.json",
                "gamejs": process.env.PUBLIC_URL + "/projects/vikingrevenge/Build/UnityLoader.js"
            }
        },
        {
            "type": "twopiece",
            "directory": "controller",
            "thumbnail": {
                "image": require("./projects/controller/controller.jpg"),
                "text": "4D Controller"
            },
            "page": {
                "name": "4D Controller (2015)",
                "markdown": require("./projects/controller/controller.md"),
                "media1": require("./projects/controller/controllerbleh.jpg"),
                "media2": require("./projects/controller/controller.mp4")
            }
        },
        {
            "type": "twopiece",
            "directory": "wizardsmackdown",
            "thumbnail": {
                "image": require("./projects/wizardsmackdown/wizardsmackdown.jpg"),
                "text": "Wizard Smackdown"
            },
            "page": {
                "name": "Wizard Smackdown (2014)",
                "markdown": require("./projects/wizardsmackdown/wizardsmackdown.md"),
                "media1": require("./projects/wizardsmackdown/wizardsmackdown-game.jpg"),
                "media2": require("./projects/wizardsmackdown/wizardsmackdown.mp4")
            }
        },
    ]
}

export default x;