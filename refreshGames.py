import os
import json

GAMES_DIR = 'games'
OUTPUT_DIR = 'api'
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'games')

def find_valid_games():
    games = []
    if not os.path.exists(GAMES_DIR):
        print(f"Directory not found: {GAMES_DIR}")
        return games

    for game_id, folder in enumerate(sorted(os.listdir(GAMES_DIR))):
        folder_path = os.path.join(GAMES_DIR, folder)
        if not os.path.isdir(folder_path):
            continue

        for filename in ['index.html', 'index.htm']:
            if os.path.isfile(os.path.join(folder_path, filename)):
                games.append({'id': game_id, 'path': f'{GAMES_DIR}/{folder}/{filename}'})
                break
    return games

def save_games_list(games):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(games, f, indent=2)
    print(f"Game list saved to {OUTPUT_FILE}")

if __name__ == '__main__':
    games_list = find_valid_games()
    save_games_list(games_list)
