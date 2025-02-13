export const DB_NAME = "videotube";



// import express from "express"
// const app = express()

// ;(async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URl}/${DB_NAME}`)
//        app.on("error", (error) => {
//         console.log("ERROR", error);
//         throw error
//        })
//        app.listen(process.env.PORT, () => {
//         console.log(`app is listen on ${process.env.PORT}` )
//        })
//     } catch (error) {
//         console.log("ERROR", error)
//         throw err
//     }
// })()