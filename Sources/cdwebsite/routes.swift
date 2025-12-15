import Fluent
import Vapor

func routes(_ app: Application) throws {
    app.get { req async throws in
        try await req.view.render("index", ["title": "Hello Vapor!"])
    }

    app.get("hello") { req async -> String in
        "Hello, world!"
    }

    app.get("listen") { req async throws in
        try await req.view.render("./Secciones/listen", ["title": "Christian Death – Listen"])
    }

    try app.register(collection: TodoController())
}
