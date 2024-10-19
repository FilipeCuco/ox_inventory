local clothingOpts = {
	["shirt"] = {
		event = "qb-radialmenu:ToggleClothing",
		args = {id = "Shirt"},
	},
	["hat"] = {
		event = "qb-radialmenu:ToggleProps",
		args = "Hat",
	},
	["mask"] = {
		event = "qb-radialmenu:ToggleClothing",
		args = {id = "Mask"},
	},
	["vest"] = {
		event = "qb-radialmenu:ToggleClothing",
		args = {id = "Vest"},
	},
	["glasses"] = {
		event = "qb-radialmenu:ToggleProps",
		args = "Glasses",
	},
	["watch"] = {
		event = "qb-radialmenu:ToggleProps",
		args = "Watch",
	},
	["bag"] = {
		event = "qb-radialmenu:ToggleClothing",
		args = {id = "Bag"},
	},
	["pants"] = {
		event = "qb-radialmenu:ToggleClothing",
		args = {id = "Pants"},
	},
	["shoes"] = {
		event = "qb-radialmenu:ToggleClothing",
		args = {id = "Shoes"},
	},
}

RegisterNUICallback("useClothing", function(typ, cb)
	local clothing = clothingOpts[typ]
	TriggerEvent(clothing.event, clothing.args)			
	cb(1)
end)