
module.exports = {
    // Standard Documentation
    frontendSideEffects : `
        This is where you explain what frontend side effects there are.
        e.g. window variables, exports, event listeners etc
        This demo has the side effect of creating a quik.demo function
    `,
    backendSideEffects : `
        This is where you explain what backend side effects there are.
        e.g. global variables, exports, APIs, middleware etc
    `,
    // 
    // Standard callbacks (automatically called)
    // 
    onMiddlewareSetup : async (app, ...userArguments) => {
        // this is where you can use app (the express.js app)
        // you can also access the Standard settings with app.settings
        // userArguments are whatever options you'd like the users to provide to you
    },
    generateFrontend : async (app, ...userArguments) => {
        // you can use this function to generate frontend code based on backend code
        // This function is automatically run after the onMiddlewareSetup()
        // this function should return a string or a promise (a promise that returns a string)
        // the string that this function returns will be evaluated (run) on frontend code, before any of the normal (non-library) code
        // if you want to provide something to the user
        //     use the "quik" variable (see example below)
        // once you use that variable, frontend files can import it from quik-client
        //     for example: 
        //         let { demo } = require('quik-client')
        //     that would successfully import the quik.demo function below
        return `
            console.log("This is going to get run as soon as the frontend page loads")
            console.log("The server is running on port: ${app.settings.port}")
            quik.demo = ()=> {
                console.log('this is a demo function')
            }
        `
    },
    afterBundlerSetup  : async (app, ...userArguments) => {
        // this is where you can use app (the express.js app)
        // you can also access the Standard settings with app.settings
        // userArguments are whatever options you'd like the users to provide to you
    },
    afterServerStarted  : async (app, ...userArguments) => {
        // this is where you can use app (the express.js app)
        // you can also access the Standard settings with app.settings
        // userArguments are whatever options you'd like the users to provide to you
    },
    // You can add additional attributes here that the user can call directly
}