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

    app.get("pastTourDates") { req async throws in
        try await req.view.render("./Secciones/pastTourDates", ["title": "Christian Death – Past Tour Dates"])
    }

    app.get("upcomingTourDates") { req async throws in
        try await req.view.render("./Secciones/upcomingTourDates", ["title": "Christian Death – Upcoming Tour Dates"])
    }

    try app.register(collection: TodoController())
}
