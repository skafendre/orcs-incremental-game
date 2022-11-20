# Untitled Orc Game

An unfinished idle game.

## Game design

The game will be a hybrid patchwork, featuring mechaning commonly found in specifics [game genres].
The game will be an empire builder, within a simulated high-fantasy world.
The player oversees the foundation and governance of an empire, starting almost from scratch and unlocking new mechanics as the game goes on [incremental].
The game will features minimal graphics, focusing on vectorial icons [incremental]
The game world will be procedurally generated.
The game world will be inhabited by different npc factions, each with their specificity.
The player will maintain armies, and raid locations for ressources.
The player will build and maintain locations, consisting of both economics and military bases.
The player will research technologies, unlocking new features, building, ressources, units and boosting production [incremental game]
There will be a lot of care to make the world feel alive and immersing. [simulation]
The game will feature a wide range of RNG for multiple features.
Avoid negative enforcement mechanics as much as possible.
The game should provide different solutions to a single problem.
The game will features multiple resources and production chains [base building game]
The game should provide meaningful risk/reward mechanics.
The game will revolve upon military combat.
The game should encourage active play, while offering small rewards for offline play, if properly setup.
The game should discourage “left in background”. Offline and left in background should offer equal rewards.

### Details

Where to find inspiration in game mechanics

From Indies to AAA, the strategy/simulation/tactical umbrella is a mine of inspirations and ideas.
This umbrella of game is focused on game mechanics. Overhaul mods in particular are often source of interesting and novels game mechanics. Overhaul mods are focused in added or reworked game mechanics, particularly in AAA games, as the assets are already made by professional talents (art, animations, models, sfx), which leave a playground for people interested in in-depth and complex mechanics.
Inspirations games

This is a list of game and specifics mechanics that might shape or otherwise end up in the game.

Dwarf fortress (world building, simulation, living world, depth)
Stellaris (economy, world building)
MyLands (multiple bases?, leaders, tech tree, exploration)
Kittens Game, Shark game (economy, ressources system, intermediate ressources, new mechanics introduction pace)
Eve Online (interface, map with raid progress (modeled after anomaly scan), valuable drops needed to be selled at trade hubs, trade route danger, standing mechanic, alliances)
Total war warhammer (generals, units types, battle mechanics, corruption system, asymmetric
factions)
Attilla Total war (asymmetric starts, stability mechanic, economy, armies needs to stay close to home)
Crusader Kings 2 (world building, world events like crusades, liege system, diplomacy, leaders personification (traits, stats, log of notable deeds, relations with other NPCs))
Heroes of Might and Magic (faction design, asymmetric factions, quirky factions buildings, capturate productions building outside players camps.)
NGU idle (engaging and unexpected mechanics, old mechanics handling themselves when nearing obsolescence)

#### on graphics and artistic direction.

Clean and elegant web UI.
Minimalistic vector icons.
Mostly white background with black font.
Carefully chosen palette, for conveying importance, rarity or power. (higher tiers, rare ressources, rare units, new mechanic)
Find some emotional design ? (see darkest dungeon text speeches)

#### on the tech stack

I want to use Vue coz I think its neat.
Nuxt appears as a promising meta-framework.
The state management plugin for Vue (à la Redux) will provide a solid and secure interface for handling the game state.
Typescript seems like an important security for the long term, at the cost of slower initial prototyping and added initial setup work.
Carefully consider the use of a CSS framework. A responsive and modern grid system based on flex is needed, like bulma.
Carefully consider the use of a component framework. Will this be needed, and will the default theme be easily overwritten and customized ? The game would benefit from an original, elegant and UX focused interface, while not being another bootstap website.
Will use Google cloud as a microservice provider when needed.
Mod support should be considered from the start, which might imply the development and maintenance of tools aimed for the community down the road.

#### on the logs and banter

To help immerse the player into the fictional game world, banter should be used.
In [Darkest Dungeons]: Heroes comments on their sanity state in the hamlet, or on the difficulty of the mission in the embark screen.
In XCOM: Soldiers interact with each other in the main base screen, and react to certain actions (like medikit). In LWoC, the characters interact with one another with the duo mechanic.
In [Civilization, TW]: Leader in diplomacy reacts to proposal, in thematics responses.

Banter should not obscure or affect negatively the usability of the game main mechanics.
Banter should help fill the player downtime, like waiting for an expedition to complete or a building to be built.


#### on the possible factions
Undead
Light Elves
Dark Elves
Demons
Humans (lot of subfactions)
Dwarves
Lizards
Satyrs
Orcs / Green Horde
Cyclops
Which playables faction to choose implement ? :
Humans: would be a classic and sure choice in terms of upgrade, lore, politics, religions. May be generic and bland if done poorly, not sure procedural human kingdom lore will be convincing. Arduous task to say the least.
Elves: no
Dwarves: would be DF
Demons: could be neat, there is a lot of inspirations to draw from everywhere, diplomacy through corruption.
Orcs: strong contender. Would draw inspiration from TW Warhammer for the high-fantasy settings, and from 40K for sci-fi. Can ally with a lot of other orc-ish races, like goblins, cyclops etc. Could research strange and impractical techs, opening way to quirky mechanics design. Limited political, trade and religion lore possibilities. Very strong orcs troops with expandables  
Undead: pretty cool idea actually. Could do a lot of sidegrades. Reanimate fallen enemies. Reanimate fallen mythical beasts. Troops would more expandables than the other empires. Elite troops would be more powerful but a lot costlier to field.

####on currencies and ressources
Would the different factions use different types of currencies ?

Troops: The primary currency of the game would be the troops. Troops are used to launch raids on enemies locations, rewarding other currencies as loot.

Gold: Used to trade with some factions

Wood: To build stuff and craft simple weapons

Iron, steel: To build structure and more powerful weapons.

Intermediate ressources: I like the idea of intermediate ressources a lot, but I have seen negative views on those, judged too complex (kittens game). Kittens game does obfuscation of new mechanics though. Might be too complex, as the game will already heavily focus on the military aspect more than anything.

Civil population: could be a resource if the game handles civil base building, for supporting the economy and researching new tech. Seems important for an incremental game. An all military group won’t be able to research new techs at all.

#### about prestige / ng+
Either the game will go full incremental, and propose different planets after a while. Or going more empire builder way which has an end. Will have to carefully take a decision here, as it will change drastically the scope of the game and the main audience.
Incremental means reduced npc threats as the player can’t lose, and should not be hindered much, the game will not end after completing a world, rather the player will embark into a new world through some kind of portal, like [Burning Crusade], with aliens races and stuff. Incremental will irrevocably gets samey at some point for sure.
Incremental might get more audience though. Incremental will also gate the game out of multiple factions, there is no replayability, only the same ever-ending grind found in most of the genre. As I write this I feel my initial plan of going full incremental is not compatible with a strong world building, or at the very least it would make the whole process significantly harder and slower.

Empire builder means more meaningful diplomacy, harder difficulty possible, lot of side grades, expanded units rosters at all stages of the game, more specific world building and thus stronger, endgame crisis. A thing to consider.

Ultimately it will be a mixture of both, but the game needs one stronger direction.

#### side mechanics
I like the way kittens introduced new mechanics progressively.
Implementing crises at some points for spicing things up !

#### on tier based balance

I love procedural stuff. I want to make a lot of different factions, for that the game need a strong and flexible scaling system for location generation.

#### on rainding
The meta for raids should evolve through the game.
At the beginning the player should focus on sending all his army on the strongest sites.
As the game progress, the options to send and field multiple squads should take over.


# Tech

Built on Nuxt.js 3, vuex

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).