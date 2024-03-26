```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    note right of browser:the JavaScript code excecuted in the browser rerenders the page with new note and sends the new note to the server 
    server-->>browser:HTML document new note
    deactivate server
 ```