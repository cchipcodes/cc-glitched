# Welcome to Card Chaos: Glitched.
![Card Chaos: Glitched](https://github.com/cchipcodes/cc-glitched/blob/main/CCG%20Clear%20BKG%20Icons.png)

Card Chaos: Glitched is an open world rogue-lite made on the browser-native platform Jamango. I made it for my EPQ Artefact, on the topic "A browser game that merges genres to determine the design and success of a unique game".

The game can be played on the [Jamango! website](https://jamango.io/game/EC5DD/card-chaos-glitched). 

# Create Your Own
Anyone can take a look at the code and make their own game using it. Here's how:

## 1. Remix on Jamango!
Go to the game page linked above and click"Play Now". Next, go to the home menu (H) and click on the Remix Game button. This creates a version of the game that you own and that can be modified.

## 2. Copy from GitHub
The other method is to download or clone this GitHub repository, following a similar process as the [Jamango Template](https://github.com/JamangoGame/template#bring-these-traits-into-an-existing-world). Once you've saved this on your local drive, go to the [Jamango Creator Hub](https://jamango.io/create/worlds) a new world. Next, open the script editor (J) and click on the connect folder button. When asked, chose **Folder to Browser**, as this will bring the local code to the world. This will open your file explorer. Navigate to the **Idea5** folder in where you saved the project and click Open. This will connect your local project to the world, allowing you to use a local IDE to edit the code.

> **WARNING** - Remixing will copy the game world, but copying from GitHub won't, meaning you'll have to build your own assets and world using the world template you've chosen.

>  The game is licensed under the [GNU General Public License v3.0](https://github.com/cchipcodes/cc-glitched/blob/main/LICENSE).

# Project Architecture
Most of the game takes it's code from the [Jamango Template](https://github.com/JamangoGame/template#bring-these-traits-into-an-existing-world), with a few modificaions and additions to the script. src holds all the game's scripts. The [game folder](https://github.com/cchipcodes/cc-glitched/tree/main/Idea5/src/game) within src holds all the custom scripts made specifically for the game's mechanics so it doesn't interfere with existing template code.
