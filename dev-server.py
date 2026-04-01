"""
Promopod Dev Server
-------------------
Hot-reload static file server using Python livereload.

Usage:
    python dev-server.py

Preview: http://localhost:5500
"""

from livereload import Server

PORT = 5500

server = Server()

# Watch all HTML, CSS, JS and image files for changes
server.watch("*.html")
server.watch("assets/css/*.css")
server.watch("assets/js/*.js")
server.watch("assets/images/*")

print(f"\n  Promopod Dev Server")
print(f"  Local:   http://localhost:{PORT}")
print(f"  Hot reload: enabled (HTML, CSS, JS, images)\n")

server.serve(root=".", port=PORT, host="localhost", open_url_delay=1)
