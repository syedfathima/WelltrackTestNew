export const config = {
	playStore: 'https://play.google.com/store/apps/details?id=com.cyberpsyc.welltrackapp',
	appStore: 'https://itunes.apple.com/ca/app/welltrack-interactive-self-help-therapy/id1249494293',
	logLevel: 1, //0=trace, 1=debug, 2=warn, 3=critical
	activities: {
		'pleasure_en': [
			// tslint:disable:max-line-length
			{ 'key': 'bathtub', 'text': 'Soak in the bathtub', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'walk', 'text': 'Go for a walk', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'write', 'text': 'Write in a journal or blog', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'music', 'text': 'Playing an instrument', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'treat', 'text': 'Eat a special treat', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'funny', 'text': 'Watch a funny movie or TV show', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'pet', 'text': 'Play with a pet', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'art', 'text': 'Create some art', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'instrument', 'text': 'Practice an instrument', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'drive', 'text': 'Go for a leisurely drive', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'massage', 'text': 'Have a massage', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'puzzle', 'text': 'Do a puzzle', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'dressup', 'text': 'Dress up nicely', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'photo', 'text': 'Take photos', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'flowers', 'text': 'Buy flowers', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'park', 'text': 'Visit a park or garden', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'library', 'text': 'Go to the Library', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'planvacation', 'text': 'Plan a vacation', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'newrecipe', 'text': 'Try a new recipe', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'newdance', 'text': 'Learn a new dance', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'biking', 'text': 'Go for a bike ride', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'outdoors', 'text': 'Enjoying the outdoors', 'isSelected': false, 'category': 'pleasurable' }
		],
		'social_en': [
			{ 'key': 'call', 'text': 'Call a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'volunteer', 'text': 'Do volunteer work', 'isSelected': false, 'category': 'social' },
			{ 'key': 'coffee', 'text': 'Drinking (coffee/tea/etc)', 'isSelected': false, 'category': 'social' },
			{ 'key': 'movie', 'text': 'See a movie with family or a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'dinner', 'text': 'Go out to dinner', 'isSelected': false, 'category': 'social' },
			{ 'key': 'gift', 'text': 'Give a gift', 'isSelected': false, 'category': 'social' },
			{ 'key': 'reminisce', 'text': 'Reminisce with friends or family', 'isSelected': false, 'category': 'social' },
			{ 'key': 'game', 'text': 'Play cards or a board game', 'isSelected': false, 'category': 'social' },
			{ 'key': 'bbq', 'text': 'Host a dinner or barbecue', 'isSelected': false, 'category': 'social' },
			{ 'key': 'class', 'text': 'Attend a community class', 'isSelected': false, 'category': 'social' },
			{ 'key': 'sport', 'text': 'Play a team sport', 'isSelected': false, 'category': 'social' },
			{ 'key': 'concert', 'text': 'See live music with family or a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'artcafe', 'text': 'Visit an art cafe with family or a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'festival', 'text': 'Attend a festival with family or a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'dancing', 'text': 'Go dancing with a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'videogame', 'text': 'Play a video game with family or a friend', 'isSelected': false, 'category': 'social' },
			{ 'key': 'market', 'text': 'Visit a farmer\'s market with family or a friend', 'isSelected': false, 'category': 'social' }
		],
		'achievement_en': [
			{ 'key': 'plants', 'text': 'Tend plants', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'exercise', 'text': 'Exercise', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'debts', 'text': 'Pay debts', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'repair', 'text': 'Household repairs', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cook', 'text': 'Cook or bake', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleankitchen', 'text': 'Clean or tidy the kitchen', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleanbathroom', 'text': 'Clean or tidy a bathroom', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleanliving', 'text': 'Clean or tidy a living area', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleanbedroom', 'text': 'Clean or tidy a bedroom', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'laundry', 'text': 'Do a load of laundry', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'groom', 'text': 'Groom or clean a pet', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'declutter', 'text': 'Declutter a small area', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'returnbooks', 'text': 'Return library books', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'organizephotos', 'text': 'Organize photos', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'yard', 'text': 'Yard work', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'recycle', 'text': 'Drop off recycling', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'thankyou', 'text': 'Write a thank-you note', 'isSelected': false, 'category': 'achievement' }
		],
		'pleasure_fr': [
			// tslint:disable:max-line-length
			{ 'key': 'bathtub', 'text': 'Traîner dans la baignoire', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'walk', 'text': 'Aller faire une promenade à pied', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'write', 'text': 'Écrire dans un journal ou sur un blogue', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'music', 'text': 'Écouter de la musique', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'treat', 'text': 'Manger quelque chose de spécial', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'funny', 'text': 'Regarder un film ou une émission de télévision amusante', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'pet', 'text': 'Jouer avec un animal de compagnie', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'art', 'text': 'Créer une œuvre artistique', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'instrument', 'text': 'Pratiquer un instrument de musique', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'drive', 'text': 'Aller faire une promenade en voiture', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'massage', 'text': 'Subir un massage', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'puzzle', 'text': 'Faire un casse-tête', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'dressup', 'text': 'Porter de beaux vêtements', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'photo', 'text': 'Prendre des photos', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'flowers', 'text': 'Acheter des fleurs', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'park', 'text': 'Visiter un parc ou un jardin', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'library', 'text': 'Aller à la bibliothèque', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'planvacation', 'text': 'Prévoir des vacances', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'newrecipe', 'text': 'Essayer une nouvelle recette', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'newdance', 'text': 'Essayer une nouvelle danse', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'biking', 'text': 'Aller faire une randonner en bicyclette', 'isSelected': false, 'category': 'pleasurable' },
			{ 'key': 'outdoors', 'text': 'Aller faire une activité de plein air', 'isSelected': false, 'category': 'pleasurable' }
		],
		'social_fr': [
			{ 'key': 'call', 'text': 'Appeler un(e) ami(e)', 'isSelected': false, 'category': 'social' },
			{ 'key': 'volunteer', 'text': 'Faire du bénévolat', 'isSelected': false, 'category': 'social' },
			{ 'key': 'coffee', 'text': 'Boir du café ou du thé', 'isSelected': false, 'category': 'social' },
			{ 'key': 'movie', 'text': 'Aller voir un film', 'isSelected': false, 'category': 'social' },
			{ 'key': 'dinner', 'text': 'Sortir au restaurant', 'isSelected': false, 'category': 'social' },
			{ 'key': 'gift', 'text': 'Fair un cadeau', 'isSelected': false, 'category': 'social' },
			{ 'key': 'reminisce', 'text': 'Remémorer des bons souvenir avec des amis ou la famille', 'isSelected': false, 'category': 'social' },
			{ 'key': 'game', 'text': 'Jouer aux cartes ou à un jeu de société', 'isSelected': false, 'category': 'social' },
			{ 'key': 'bbq', 'text': 'Organiser un souper ou un bbq', 'isSelected': false, 'category': 'social' },
			{ 'key': 'class', 'text': 'Aller suivre un cours offert aux mmebres de la communauté', 'isSelected': false, 'category': 'social' },
			{ 'key': 'sport', 'text': 'Jouer à un sport d\'équipe', 'isSelected': false, 'category': 'social' },
			{ 'key': 'concert', 'text': 'Allert voir un concert avec un(e) ami(e) ou de la famille', 'isSelected': false, 'category': 'social' },
			{ 'key': 'artcafe', 'text': 'Se rendre dans un café artistique avec un(e) ami(e) ou de la famille', 'isSelected': false, 'category': 'social' },
			{ 'key': 'festival', 'text': 'Assister à un festival avec un(e) ami(e) ou un membre de la famille', 'isSelected': false, 'category': 'social' },
			{ 'key': 'dancing', 'text': 'Aller danser avec un(e) ami(e)', 'isSelected': false, 'category': 'social' },
			{ 'key': 'videogame', 'text': 'Jouer à un jeu vidéo avec un(e) ami(e) ou un membre de la famille', 'isSelected': false, 'category': 'social' },
			{ 'key': 'market', 'text': 'Aller à un marché des producteurs avec un(e) ami(e) ou un membre de la famille', 'isSelected': false, 'category': 'social' }
		],
		'achievement_fr': [
			{ 'key': 'plants', 'text': 'S\'occuper des plantes', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'exercise', 'text': 'Faire de l\'exercise', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'debts', 'text': 'Rembourser ses dettes', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'repair', 'text': 'Faire des réparations dans la maison', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cook', 'text': 'Cuisiner ou faire de la pâtisseries', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleankitchen', 'text': 'Nettoyer ou ranger la cuisine', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleanbathroom', 'text': 'Nettoyer ou ranger une salle de bain', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleanliving', 'text': 'Nettoyer ou ranger le salon', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'cleanbedroom', 'text': 'Nettoyer ou ranger une chambre', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'laundry', 'text': 'Faire la lessive', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'groom', 'text': 'Laver ou pomponner un animal de compagnie', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'declutter', 'text': 'Se débarrasser du superflu dans un coin de la maison', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'returnbooks', 'text': 'Rapporter des livres à la bibliothèque', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'organizephotos', 'text': 'Organiser ses photos', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'yard', 'text': 'Faire du travail d\'entretien dans la cours', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'recycle', 'text': 'Apporter le recyclage au dépôt', 'isSelected': false, 'category': 'achievement' },
			{ 'key': 'thankyou', 'text': 'Rédiger une note de remerciement', 'isSelected': false, 'category': 'achievement' }
		]
	},
	timezones: [
		{ "key": "America/Halifax", "text": "(GMT -4:00) Atlantic Time (Canada), Halifax, Caracas, La Paz" },
		{ "key": "America/New_York", "text": "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima" },
		{ "key": "America/Mexico_City", "text": "(GMT -6:00) Central Time (US & Canada), Mexico City" },
		{ "key": "America/Edmonton", "text": "(GMT -7:00) Mountain Time (US & Canada)" },
		{ "key": "America/Los_Angeles", "text": "(GMT -8:00) Pacific Time (US & Canada)" },
		{ "key": "AST", "text": "(GMT -9:00) Alaska" },
		{ "key": "", "text": "--------------" },
		{ "key": "Etc/GMT+12", "text": "(GMT -12:00) Eniwetok, Kwajalein" },
		{ "key": "Pacific/Midway", "text": "(GMT -11:00) Midway Island, Samoa" },
		{ "key": "Pacific/Honolulu", "text": "(GMT -10:00) Hawaii" },
		{ "key": "Pacific/Marquesas", "text": "(GMT -9:30) Taiohae" },
		{ "key": "AST", "text": "(GMT -9:00) Alaska" },
		{ "key": "America/Los_Angeles", "text": "(GMT -8:00) Pacific Time (US & Canada)" },
		{ "key": "America/Edmonton", "text": "(GMT -7:00) Mountain Time (US & Canada)" },
		{ "key": "America/Mexico_City", "text": "(GMT -6:00) Central Time (US & Canada), Mexico City" },
		{ "key": "America/New_York", "text": "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima" },
		{ "key": "America/Caracas", "text": "(GMT -4:30) Caracas" },
		{ "key": "America/Halifax", "text": "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz" },
		{ "key": "Canada/Newfoundland", "text": "(GMT -3:30) Newfoundland" },
		{ "key": "America/Sao_Paulo", "text": "(GMT -3:00) Brazil, Buenos Aires, Georgetown" },
		{ "key": "Atlantic/South_Georgia", "text": "(GMT -2:00) Mid-Atlantic" },
		{ "key": "Atlantic/Cape_Verde", "text": "(GMT -1:00) Azores, Cape Verde Islands" },
		{ "key": "Africa/Casablanca", "text": "(GMT +0:00) Western Europe Time, London, Lisbon, Casablanca" },
		{ "key": "Europe/Paris", "text": "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris" },
		{ "key": "Asia/Jerusalem", "text": "GMT +2:00) Kaliningrad, South Africa" },
		{ "key": "Asia/Qatar", "text": "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg" },
		{ "key": "Asia/Tehran", "text": "(GMT +3:30) Tehran" },
		{ "key": "Europe/Moscow", "text": "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi" },
		{ "key": "Asia/Kabul", "text": "(GMT +4:30) Kabul" },
		{ "key": "Asia/Karachi", "text": "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent" },
		{ "key": "Asia/Colombo", "text": "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi" },
		{ "key": "Asia/Kathmandu", "text": "(GMT +5:45) Kathmandu, Pokhara" },
		{ "key": "Asia/Dacca", "text": "(GMT +6:00) Almaty, Dhaka, Colombo" },
		{ "key": "Asia/Rangoon", "text": "(GMT +6:30) Yangon, Mandalay" },
		{ "key": "Asia/Bangkok", "text": "(GMT +7:00) Bangkok, Hanoi, Jakarta" },
		{ "key": "Asia/Shanghai", "text": "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong" },
		{ "key": "Australia/Eucla", "text": "(GMT +8:45) Eucla" },
		{ "key": "Asia/Tokyo", "text": "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk" },
		{ "key": "Australia/Darwin", "text": "(GMT +9:30) Adelaide, Darwin" },
		{ "key": "Australia/Melbourne", "text": "(GMT +10:00) Eastern Australia, Guam, Vladivostok" },
		{ "key": "Australia/Lord_Howe", "text": "(GMT +10:30) Lord Howe Island" },
		{ "key": "Pacific/Kosrae", "text": "(GMT +11:00) Magadan, Solomon Islands, New Caledonia" },
		{ "key": "Pacific/Norfolk", "text": "(GMT +11:30) Norfolk Island" },
		{ "key": "Pacific/Fiji", "text": "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka" },
		{ "key": "Pacific/Chatham", "text": "(GMT +12:45) Chatham Islands" },
		{ "key": "Pacific/Enderbury", "text": "(GMT +13:00) Apia, Nukualofa" },
		{ "key": "Pacific/Kiritimati", "text": "(GMT +14:00) Line Islands, Tokelau" }
	]
}
