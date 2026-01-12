
import urllib.request

urls = [
    "https://unpkg.com/simple-icons@latest/icons/lua.svg",
    "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/chess-rook.svg"
]

for url in urls:
    try:
        with urllib.request.urlopen(url) as response:
            print(f"--- {url} ---")
            print(response.read().decode('utf-8'))
    except Exception as e:
        print(f"Error fetching {url}: {e}")
