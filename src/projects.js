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
        }
    ]
}

export default x;