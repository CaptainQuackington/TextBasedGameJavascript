<!DOCTYPE html>
<html>
<head>
    <title>Mini Adventure Game</title>
    <style>
        #gameImage {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
        }
    </style>
</head>
<body>

    <!-- HTML: Game content -->

    <h2 id="roomTitle">Room Title</h2>
    <img id="gameImage" src="" alt="Room Image">
    <p id="roomDescription">Room Description</p>

    <!-- User input -->
    <input type="text" id="userInput" placeholder="Type your command">
    <button onclick="processCommand()">Go</button>

    <!-- JavaScript: Game logic -->

    <script>
        // Game rooms
        var rooms = {
            'start': {
                'title': 'The Mysterious Dungeon',
                'description': 'You are in a dark, cold dungeon. There are doors to the north, east, and south.',
                'image': 'start-room.jpg',
                'directions': {
                    'north': 'library',
                    'east': 'laboratory',
                    'south' : 'storage'
                }
            },
            'library': {
                'title': 'The Ancient Library',
                'description': 'You find yourself surrounded by dusty books. There\'s a door to the south.',
                'image': 'library.jpg',
                'directions': {
                    'south': 'start'
                }
            },
            'storage': {
                'title': 'An old storage',
                'description': 'You find yourself surrounded by a bunch of boxes. There\'s a door to the north.',
                'image': 'storage.jpg',
                'directions': {
                    'north': 'start',
                    'south': 'SecretRoom'
                }
            },
            'SecretRoom': {
                'title': 'Hidden Room',
                'description': 'You push over a few boxes, and find a small trapdoor, you go through it, its very dark, you can go north to go back, or continue to keep going. There\'s a door to the north.',
                'image': 'hidden.jpg',
                'directions': {
                    'north': 'storage',
                    'continue' : 'Temple'
                }
            },
            'Temple': {
                'title': 'Temple Entrance',
                'description': 'You find a big door with 2 pedistals on each side, oh also the doors just closed behind u d:, There\'s 2 doors, west and east.',
                'image': 'hidden.jpg',
                'directions': {
                    'west': 'TempleRoom1',
                    'east': 'TempleRoom2'
                }
            },
            'TempleRoom1': {
                'title': 'Temple Room 1',
                'description': '...',
                'image': 'hidden.jpg',
                'directions': {
                }
            },
            'TempleRoom2': {
                'title': 'Temple Room 2',
                'description': '...',
                'image': 'hidden.jpg',
                'directions': {
                }
            },
            'laboratory': {
                'title': 'The Alchemist\'s Laboratory',
                'description': 'Strange potions bubble on the stove. There\'s a door to the west and north.',
                'image': 'laboratory.jpg',
                'directions': {
                    'west': 'start',
                    'north' : 'Balcony'
                }
            },
            'Balcony': {
                'title': 'Balcony',
                'description': 'The stars smile back at you. There\'s a door to the south.',
                'image': 'balcony.jpg',
                'directions': {
                    'south': 'laboratory'
                }
            }
        };

        var currentRoom = 'start'; // Starting room
        updateRoom();

        function processCommand() {
            var command = document.getElementById('userInput').value.toLowerCase();
            var directions = rooms[currentRoom].directions;

            if (directions[command]) {
                currentRoom = directions[command];
                updateRoom();
            } else {
                alert('You cannot go that way.');
            }

            document.getElementById('userInput').value = ''; // Clear input field
        }

        function updateRoom() {
            var room = rooms[currentRoom];
            document.getElementById('roomTitle').innerText = room.title;
            document.getElementById('roomDescription').innerText = room.description;
            document.getElementById('gameImage').src = room.image;
        }
    </script>

</body>
</html>
