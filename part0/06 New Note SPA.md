```mermaid
    sequenceDiagram
        participant browser
        participant server

        Note over browser, server: New Note SPA Diagram
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate server
        server-->>browser: HTML document
        deactivate server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: CSS
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: JavaScript
        deactivate server    

        Note left of browser: List of notes is downloaded from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
        deactivate server   

        Note left of browser: User types in new note and submits
        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        server-->>browser: Status code 201
        deactivate server

        Note left of browser: Add the new note to the list

        loop refresh
            browser-->>browser: Display the updated list of notes
        end
```