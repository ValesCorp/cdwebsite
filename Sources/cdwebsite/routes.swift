import Fluent
import Vapor

func routes(_ app: Application) throws {
    app.get { req async throws in
        try await req.view.render("index", ["title": "Hello Vapor!"])
    }

    app.get("hello") { req async -> String in
        "Hello, world!"
    }

    app.get("music") { req async throws in
        try await req.view.render("./Secciones/music", ["title": "Christian Death – Music"])
    }

    app.get("contacts") { req async throws in
        try await req.view.render("./Secciones/contacts", ["title": "Christian Death – Contacts"])
    }

    try app.register(collection: TodoController())
}
