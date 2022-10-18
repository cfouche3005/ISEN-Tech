// priority: 50

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')



onEvent('recipes', event => {

  //Remove
  event.remove({output: 'minecraft:ender_eye'})
  event.remove({output: 'rebornstorage:small_item_disk'})
  event.remove({output: 'rebornstorage:medium_item_disk'})
  event.remove({output: 'rebornstorage:large_item_disk'})
  event.remove({output: 'rebornstorage:larger_item_disk'})
  event.remove({output: 'rebornstorage:small_fluid_disk'})
  event.remove({output: 'rebornstorage:medium_fluid_disk'})
  event.remove({output: 'rebornstorage:large_fluid_disk'})
  event.remove({output: 'rebornstorage:larger_fluid_disk'})
  event.remove({output: 'extradisks:infinite_storage_block'})
  event.remove({output: 'extradisks:infinite_storage_part'})
  event.remove({output: 'extradisks:infinite_storage_disk'})
  event.remove({output: 'extradisks:infinite_fluid_storage_block'})
  event.remove({output: 'extradisks:infinite_fluid_storage_part'})
  event.remove({output: 'extradisks:infinite_fluid_storage_disk'})
  event.remove({output: 'refinedstorage:quartz_enriched_iron'})
  event.remove({id: 'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron'})

  //Custom
  
  event.custom(
    {
      "type": "thermal:smelter",
      "ingredients": [
        {
          "tag": "forge:ender_pearls",
          "count": 1
        },
        {
          "item": "minecraft:blaze_powder",
          "count": 1
        }
      ],
      "result": [
        {
          "item": 'minecraft:ender_eye',
          "count": 1
        }
      ],
      "energy": 16000
    }
  )
  event.custom(
    {
      "type": "thermal:smelter",
      "ingredients": [
        {
          "tag": "forge:ingots/iron",
          "count": 1
        },
        {
          "tag": "forge:gems/quartz",
          "count": 3
        }
      ],
      "result": [
        {
          "item": 'refinedstorage:quartz_enriched_iron',
          "count": 1
        }
      ],
      "energy": 64000
    }
  )
  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " APA ",
        "EPSPC",
        " APA ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'industrialforegoing:supreme_black_hole_unit'
        },
        "A": {
          "item": 'extradisks:1048576k_storage_disk'
        }
      },
      "result": {
        "item": "refinedstorage:creative_storage_disk",
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " APA ",
        "EPSPC",
        " APA ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'industrialforegoing:supreme_black_hole_tank'
        },
        "A": {
          "item": 'extradisks:1048576k_fluid_storage_disk'
        }
      },
      "result": {
        "item": "refinedstorage:creative_fluid_storage_disk",
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " APA ",
        "EPSPC",
        " APA ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'industrialforegoing:supreme_black_hole_tank'
        },
        "A": {
          "item": 'ae2:fluid_storage_cell_256k'
        }
      },
      "result": {
        "item": 'ae2:creative_fluid_cell',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " APA ",
        "EPSPC",
        " APA ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'industrialforegoing:supreme_black_hole_unit'
        },
        "A": {
          "item": 'ae2:item_storage_cell_256k'
        }
      },
      "result": {
        "item": 'ae2:creative_item_cell',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " CPC ",
        "EPSPC",
        " CPC ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'industrialforegoing:supreme_black_hole_unit'
        }
      },
      "result": {
        "item": 'storagedrawers:creative_storage_upgrade',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " APA ",
        "EPSPC",
        " APA ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'industrialforegoing:supreme_black_hole_unit'
        },
        "A": {
          "item": 'storagedrawers:creative_storage_upgrade'
        }
      },
      "result": {
        "item": 'storagedrawers:creative_vending_upgrade',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "  B  ",
        " APA ",
        "EPSPC",
        " APA ",
        "  D  "
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'twilightforest:lamp_of_cinders'
        },
        "C":{
          "item": 'storagedrawers:emerald_storage_upgrade'
        },
        "D":{
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        },
        "E":{
          "item": 'botania:gaia_ingot'
        },
        "B":{
          "item": 'mekanism:ultimate_chemical_tank'
        },
        "A": {
          "item": 'appmek:chemical_storage_cell_256k'
        }
      },
      "result": {
        "item": 'appmek:creative_chemical_cell',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "PPP",
        "PSP",
        "PPP"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'refinedstorageaddons:wireless_crafting_grid'
        }
      },
      "result": {
        "item": 'refinedstorageaddons:creative_wireless_crafting_grid',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "PPP",
        "PSP",
        "PPP"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "tag": 'refinedstorage:controller'
        }
      },
      "result": {
        "item": 'refinedstorage:creative_controller',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "PPP",
        "PSP",
        "PPP"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'botania:fabulous_pool'
        }
      },
      "result": {
        "item": 'botania:creative_pool',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "PPP",
        "PSP",
        "PPP"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'create:steam_engine'
        }
      },
      "result": {
        "item": 'create:creative_motor',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "AAAAA",
        "APPPA",
        "APSPA",
        "APPPA",
        "AAAAA"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "A": {
          "item": 'mekanism:ultimate_fluid_tank'
        },
        "S": {
          "item": 'mekanism:ultimate_fluid_tank'
        }
      },
      "result": {
        "item": 'mekanism:creative_fluid_tank',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "AAAAA",
        "APPPA",
        "APSPA",
        "APPPA",
        "AAAAA"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "A": {
          "item": 'mekanism:ultimate_energy_cube'
        },
        "S": {
          "item": 'mekanism:ultimate_energy_cube'
        }
      },
      "result": {
        "item": 'mekanism:creative_energy_cube',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "AAAAA",
        "APPPA",
        "APAPA",
        "APPPA",
        "AAAAA"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "A": {
          "item": 'mekanism:ultimate_chemical_tank'
        }
      },
      "result": {
        "item": 'mekanism:creative_chemical_tank',
        "count": 1
      },
      "acceptMirrored": false
    }
  )

  event.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [
        "ABCDE",
        "QPPPF",
        "OPSPG",
        "NPPPH",
        "MLKJI"
      ],
      "key": {
        "P": {
          "item": 'mekanism:pellet_antimatter'
        },
        "S": {
          "item": 'create:blaze_cake'
        },
        "A":{
          "item": 'create_confectionery:chocolate_candy'
        },
        "B":{
          "item": 'create_confectionery:chocolate_candy_1'
        },
        "C":{
          "item": 'create_confectionery:chocolate_candy_2'
        },
        "D":{
          "item": 'create_confectionery:chocolate_candy_3'
        },
        "E":{
          "item": 'create_confectionery:black_chocolate_candy'
        },
        "F":{
          "item": 'create_confectionery:black_chocolate_candy_1'
        },
        "G":{
          "item": 'create_confectionery:black_chocolate_candy_2'
        },
        "H":{
          "item": 'create_confectionery:black_chocolate_candy_3'
        },
        "I":{
          "item": 'create_confectionery:white_chocolate_candy'
        },
        "J":{
          "item": 'create_confectionery:white_chocolate_candy_1'
        },
        "K":{
          "item": 'create_confectionery:white_chocolate_candy_2'
        },
        "L":{
          "item": 'create_confectionery:white_chocolate_candy_3'
        },
        "M":{
          "item": 'create_confectionery:ruby_chocolate_candy'
        },
        "N":{
          "item": 'create_confectionery:ruby_chocolate_candy_1'
        },
        "O":{
          "item": 'create_confectionery:ruby_chocolate_candy_2'
        },
        "Q": {
          "item": 'create_confectionery:ruby_chocolate_candy_3'
        }
      },
      "result": {
        "item": 'create:creative_blaze_cake',
        "count": 1
      },
      "acceptMirrored": false
    }
  )
});
