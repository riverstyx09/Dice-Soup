Hooks.on('diceSoNiceReady', (dice3d) => {

  dice3d.addSystem({ id: "source-green", name: "🔮 Green Source", group: "Dice Soup" }, "default");
  dice3d.addSystem({ id: "source-purple", name: "🔮 Purple Source", group: "Dice Soup" }, "default");
  dice3d.addSystem({ id: "source-red", name: "🔮 Red Source", group: "Dice Soup" }, "default");
  dice3d.addSystem({ id: "space", name: "🔮 Space", group: "Dice Soup" }, "default");
  dice3d.addSystem({ id: "gilded", name: "🔮 Coins", group: "Dice Soup" }, "default");

//-------------------- DICE PRESETS --------------------

// Coins
dice3d.addDicePreset({
    type: "d2",
    labels: [ '1', '2'],
    emissive: 0xffc7bd,
    colorset: 'copper',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d4",
    labels: [ '1', '2', '3', '4'],
    emissive: 0xffc7bd,
    colorset: 'copper',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d6",
    labels: [ '1', '2', '3', '4', '5', '6'],
    emissive: 0xffc7bd,
    colorset: 'copper',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "df",
    labels: [ '−', ' ', '+'],
    emissive: 0xffc7bd,
    colorset: 'copper',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d8",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8'],
    emissive: 0xffffff,
    colorset: 'silver',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d10",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    emissive: 0xffffff,
    colorset: 'silver',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d100",
    labels: [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
    emissive: 0xffffff,
    colorset: 'silver',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d12",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    emissive: 0xffdb94,
    colorset: 'gold',
    system: "gilded"
});
dice3d.addDicePreset({
    type: "d20",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    emissive: 0xffdb94,
    colorset: 'gold',
    system: "gilded"
});

// Space
dice3d.addDicePreset({
    type: "d2",
    labels: [ '1', '2'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d4",
    labels: [ '1', '2', '3', '4'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d6",
    labels: [ '1', '2', '3', '4', '5', '6'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "df",
    labels: [ '−', ' ', '+'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d8",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d10",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d100",
    labels: [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d12",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});
dice3d.addDicePreset({
    type: "d20",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    emissive: 0x5900ff,
    colorset: 'space',
    system: "space"
});

//Source - Green
dice3d.addDicePreset({
    type: "d2",
    labels: [ '1', '2'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d4",
    labels: [ '1', '2', '3', '4'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d6",
    labels: [ '1', '2', '3', '4', '5', '6'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "df",
    labels: [ '−', ' ', '+'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d8",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d10",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d100",
    labels: [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d12",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});
dice3d.addDicePreset({
    type: "d20",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    emissive: 0x27b092,
    colorset: 'source-green',
    system: "source-green"
});

//Source - Purple
dice3d.addDicePreset({
    type: "d2",
    labels: [ '1', '2'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d4",
    labels: [ '1', '2', '3', '4'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d6",
    labels: [ '1', '2', '3', '4', '5', '6'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "df",
    labels: [ '−', ' ', '+'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d8",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d10",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d100",
    labels: [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d12",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});
dice3d.addDicePreset({
    type: "d20",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    emissive: 0x8c00ff,
    colorset: 'source-purple',
    system: "source-purple"
});

//Source - Red
dice3d.addDicePreset({
    type: "d2",
    labels: [ '1', '2'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d4",
    labels: [ '1', '2', '3', '4'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d6",
    labels: [ '1', '2', '3', '4', '5', '6'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "df",
    labels: [ '−', ' ', '+'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d8",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d10",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d100",
    labels: [ '10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d12",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});
dice3d.addDicePreset({
    type: "d20",
    labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    emissive: 0xff0000,
    colorset: 'source-red',
    system: "source-red"
});

//-------------------- TEXTURES --------------------

	dice3d.addTexture("diamondback", {
	    name: "🔮 Diamondback",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/diamondback.webp",
	    bump: "modules/dice-soup/textures/diamondback.bmp"
	});

	dice3d.addTexture("etched", {
	    name: "🔮 Etched",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/etched.webp",
	    bump: "modules/dice-soup/textures/etched.bmp"
	});

	dice3d.addTexture("geo1", {
	    name: "🔮 Geometric #1",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/geometric_1.webp",
	    bump: "modules/dice-soup/textures/geometric_1.bmp"
	});
	dice3d.addTexture("geo2", {
	    name: "🔮 Geometric #2",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/geometric_2.webp",
	    bump: "modules/dice-soup/textures/geometric_2.bmp"
	});

	dice3d.addTexture("ice-cold", {
	    name: "🔮 Ice Cold",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/ice_cold.webp"
	});
	dice3d.addTexture("ice-cold-2", {
	    name: "🔮 Ice Cold #2",
	    composite: "copy",
	    source: "modules/dice-soup/textures/ice_cold_2.webp",
	    bump: "modules/dice-soup/textures/ice_cold_2.bmp"
	});
	dice3d.addTexture("ice-cold-2-color", {
	    name: "🔮 Ice Cold #2 (🖌️)",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/ice_cold_2_colorable.webp",
	    bump: "modules/dice-soup/textures/ice_cold_2.bmp"
	});
	dice3d.addTexture("ice-cold-3", {
	    name: "🔮 Ice Cold #3",
	    composite: "copy",
	    source: "modules/dice-soup/textures/ice_cold_3.webp",
	    bump: "modules/dice-soup/textures/ice_cold_3.bmp"
	});

	dice3d.addTexture("leaf-imprints", {
	    name: "🔮 Leaf Imprints",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/leafed.webp",
	    bump: "modules/dice-soup/textures/leafed.bmp"
	});


	dice3d.addTexture("liquid-fire", {
	    name: "🔮 Liquid Fire",
	    composite: "copy",
	    source: "modules/dice-soup/textures/liquid_fire.webp"
	});
	dice3d.addTexture("liquid-fire-2", {
	    name: "🔮 Liquid Fire #2",
	    composite: "copy",
	    source: "modules/dice-soup/textures/liquid_fire_2.webp"
	});
	dice3d.addTexture("liquid-lava", {
	    name: "🔮 Liquid Lava",
	    composite: "copy",
	    source: "modules/dice-soup/textures/liquid_lava.webp"
	});
	dice3d.addTexture("liquid-lava-colorable", {
	    name: "🔮 Liquid Lava (🖌️)",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/liquid_lava_colorable.webp"
	});
	dice3d.addTexture("liquid-red", {
	    name: "🔮 Liquid Red",
	    composite: "copy",
	    source: "modules/dice-soup/textures/liquid_red.webp"
	});
	dice3d.addTexture("liquid-red-colorable", {
	    name: "🔮 Liquid Red (🖌️)",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/liquid_red_colorable.webp"
	});
	dice3d.addTexture("liquid-water", {
	    name: "🔮 Liquid Water",
	    composite: "copy",
	    source: "modules/dice-soup/textures/liquid_water.webp"
	});
	dice3d.addTexture("liquid-water-2", {
	    name: "🔮 Liquid Water #2",
	    composite: "copy",
	    source: "modules/dice-soup/textures/liquid_water_2.webp"
	});
	dice3d.addTexture("liquid-water-2-color", {
	    name: "🔮 Liquid Water #2 (🖌️)",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/liquid_water_2_colorable.webp"
	});

	dice3d.addTexture("origami", {
	    name: "🔮 Origami",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/origami.webp",
	    bump: "modules/dice-soup/textures/origami.bmp"
	});

	dice3d.addTexture("ornate1", {
	    name: "🔮 Ornate #1",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/ornate_1.webp",
	    bump: "modules/dice-soup/textures/ornate_1.bmp"
	});
	dice3d.addTexture("ornate2", {
	    name: "🔮 Ornate #2",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/ornate_2.webp",
	    bump: "modules/dice-soup/textures/ornate_2.bmp"
	});
	dice3d.addTexture("ornate3", {
	    name: "🔮 Ornate #3",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/ornate_3.webp",
	    bump: "modules/dice-soup/textures/ornate_3.bmp"
	});

	dice3d.addTexture("peach", {
	    name: "🔮 Peach",
	    composite: "copy",
	    source: "modules/dice-soup/textures/peach.webp"
	});

	dice3d.addTexture("pink", {
	    name: "🔮 Pink",
	    composite: "copy",
	    source: "modules/dice-soup/textures/pink.webp"
	});


	dice3d.addTexture("royalty", {
	    name: "🔮 Royalty",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/royalty.webp",
	    bump: "modules/dice-soup/textures/royalty.bmp"
	});
	dice3d.addTexture("royalty-2", {
	    name: "🔮 Royalty #2",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/royalty_2.webp",
	    bump: "modules/dice-soup/textures/royalty_2.bmp"
	});
	dice3d.addTexture("royalty-3", {
	    name: "🔮 Royalty #3",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/royalty_3.webp",
	    bump: "modules/dice-soup/textures/royalty_3.bmp"
	});


	dice3d.addTexture("source-green", {
	    name: "🔮 Source - Green",
	    composite: "copy",
	    source: "modules/dice-soup/textures/source_green.webp",
	    bump: "modules/dice-soup/textures/source.bmp"
	});
	dice3d.addTexture("source-purple", {
	    name: "🔮 Source - Purple",
	    composite: "copy",
	    source: "modules/dice-soup/textures/source_purple.webp",
	    bump: "modules/dice-soup/textures/source.bmp"
	});
	dice3d.addTexture("source-red", {
	    name: "🔮 Source - Red",
	    composite: "copy",
	    source: "modules/dice-soup/textures/source_red.webp",
	    bump: "modules/dice-soup/textures/source.bmp"
	});

	dice3d.addTexture("space", {
	    name: "🔮 Space",
	    composite: "copy",
	    source: "modules/dice-soup/textures/space.webp"
	});

	dice3d.addTexture("spiral", {
	    name: "🔮 Spiraling",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/spiraling.webp",
	    bump: "modules/dice-soup/textures/spiraling.bmp"
	});

	dice3d.addTexture("striped", {
	    name: "🔮 Striped",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/striped.webp",
	    bump: "modules/dice-soup/textures/striped.bmp"
	});

	dice3d.addTexture("succulent", {
	    name: "🔮 Succulent",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/succulent.webp",
	    bump: "modules/dice-soup/textures/succulent.bmp"
	});

	dice3d.addTexture("waves", {
	    name: "🔮 Waves",
	    composite: "multiply",
	    source: "modules/dice-soup/textures/waves.webp",
	    bump: "modules/dice-soup/textures/waves.bmp"
	})

//-------------------- COLORSETS --------------------

	.then(() => {
//Coins
	dice3d.addColorset({
            name: 'copper',
            description: "🔮 Copper",
            category: "Dice Soup",
	    foreground: '#000000',
	    background: '#b87661',
	    outline: '#dabba0',		
            texture: 'ornate2',
            material: 'metal',
            font: 'Courier New',
	    visibility: 'hidden'
	});
	dice3d.addColorset({
            name: 'gold',
            description: "🔮 Gold",
            category: "Dice Soup",
	    foreground: '#000000',
	    background: '#a38000',
	    outline: '#ffdb94',		
            texture: 'ornate2',
            material: 'metal',
            font: 'Courier New',
	    visibility: 'hidden'
	});
	dice3d.addColorset({
            name: 'silver',
            description: "🔮 Silver",
            category: "Dice Soup",
	    foreground: '#000000',
	    background: '#6d7474',
	    outline: '#ffffff',		
            texture: 'ornate2',
            material: 'metal',
            font: 'Courier New',
	    visibility: 'hidden'
	});
//Liquid Fire
	dice3d.addColorset({
	    name: 'liquid_fires',
	    description: "🔮 Liquid Fires",
	    category: "Dice Soup",
	    foreground: '#FFEOBD',
	    background: '#BABABA',
	    outline: '#000000',
	    edge: '#000000',
	    texture: ['liquid-fire','liquid-fire-2'],
	    material: 'wood'
	});
//Ornates
	dice3d.addColorset({
            name: 'ornates',
            description: "🔮 Ornates",
            category: "Dice Soup",
	    foreground: 'white',
	    background: ['#a01c35','#1c61a0','#1c8aa0','#a02a1c','#610e05','#54355a','#b083b9','#8c83b9','#83b9a9','#9eb983','#0e3567','#0e6758'],
	    outline: 'white',
	    edge: ['#a01c35','#1c61a0','#1c8aa0','#a02a1c','#610e05','#54355a','#b083b9','#8c83b9','#83b9a9','#9eb983','#0e3567','#0e6758'],	
            texture: ['ornate1','ornate3'],
	    material: 'iridescent'
	});
//Source
	dice3d.addColorset({
            name: 'source-green',
            description: "🔮 Green Source",
            category: "Dice Soup",
	    foreground: '#000000',
	    outline: '#27b092',		
            texture: 'source-green',
            material: 'chrome',
            font: 'Roboto Condensed'
	});
	dice3d.addColorset({
            name: 'source-purple',
            description: "🔮 Purple Source",
            category: "Dice Soup",
	    foreground: '#000000',
	    outline: '#94d0f5',		
            texture: 'source-purple',
            material: 'chrome',
            font: 'Roboto Condensed'
	});
	dice3d.addColorset({
            name: 'source-red',
            description: "🔮 Red Source",
            category: "Dice Soup",
	    foreground: '#000000',
	    outline: '#ff0000',	
            texture: 'source-red',
            material: 'chrome',
            font: 'Roboto Condensed'
	});
//Space
	dice3d.addColorset({
            name: 'space',
            description: "🔮 Space",
            category: "Dice Soup",
	    foreground: '#c9c2ff',
	    outline: '#000000',
            texture: 'space',
	    material: 'wood'
	});
	});


});
