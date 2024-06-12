// place files you want to import through the `$lib` alias in this folder.

// ---- Website Page Tree ----
export interface Page {
	name: string,
	link: string,
	subpages?: Page[]
}
export let pageTree: Page[] = [
	{ name: 'Home', link: '/' },
	{
		name: 'About',
		link: '/about',
		subpages: [
			{ name: 'Music', link: '/about/music' },
			{ name: 'Schedule', link: '/about/schedule' },
			{ name: 'Venue', link: '/about/venue' },
			{ name: 'Wedding Party', link: '/about/wedding-party' }
		]
	},
	{ name: 'RSVP', link: '/rsvp' },
	{ name: 'Gallery', link: '/gallery' },
	{ name: 'FAQ', link: '/faq' }
];

// ---- Image Library ----
export interface Image {
	src: string;
	alt: string;
	title: string;
	creator: string;
	type?: 'art' | 'photo';
	description?: string;
	pin: boolean;
}
export const imageLibrary: Image[] = [
	{
		src: '/images/EnjoyingDiscoveryPark.jpg',
		alt: 'Mason and Neil smiling together in front of a scenic beach at the Seattle Sound outside Discovery Park.  Mason, on the left, is wearing glasses and a grey sweater, while Neil, on the right, is wearing glasses and a dark hoodie.  They are standing close together with a beautiful view of the water and greenery in the background under a cloudy sky.',
		title: 'Enjoying Discovery Park',
		creator: 'Neil Kumar',
		type: 'photo',
		description: 'This was from our first trip up to the Seattle area.',
		pin: true
	},
	{
		src: '/images/InSickness.jpg',
		alt: 'Mason and Neil lying close together in a van, wrapped in sleeping bags and blankets.  Mason is holding Neil, both looking unwell and resting.  Mason is wearing glasses and has her arm around Neil, who has his eyes closed.  The setting appears cozy with a soft blanket and pillows surrounding them, capturing a tender moment of care during their road trip while they were both sick.',
		title: 'In Sickness and Health',
		creator: 'Lucy Deakins',
		type: 'photo',
		description: 'On our first roadtrip together, we both got sick 😢.',
		pin: true
	},
	{
		src: '/images/TheMonster.jpg',
		alt: "Neil and Mason lying on a couch, with Neil playfully pretending to be a monster attacking Mason's phone.  Neil is making a funny, exaggerated face with his mouth open and eyes wide, while Mason is smiling and partially visible in the foreground.",
		title: 'The Neil Monster Attacks!!!',
		creator: 'Mason Arnold',
		type: 'photo',
		description: "A young monster Neil attempts to attack Mason's camera.",
		pin: true
	},
	{
		src: '/images/NeilAndMasonByRileyArnold.jpg',
		alt: 'Digital artwork by Riley Arnold depicting two figures, Mason Arnold and Neil Kumar, in a close and affectionate embrace.  Mason is illustrated wearing a green outfit and glasses, leaning into Neil, who sports a blue shirt and a bun hairstyle.  Both figures are set against a warm mustard-yellow background, emphasizing their closeness in the shared moment.',
		title: 'Neil and Mason',
		creator: 'Riley Arnold',
		type: 'art',
		description: '{undefined}',
		pin: true
	},
	{
		src: '/images/JellyFish.jpg',
		alt: "Neil and Mason at the Seattle Aquarium, standing together inside a clear, curved tunnel filled with jellyfish.  They are smiling and standing close, enjoying the exhibit. The background shows other visitors and various displays, with the aquarium's ambient lighting highlighting the marine life.",
		title: 'Jelly Fishies!!!',
		creator: 'Riley Arnold',
		type: 'photo',
		description: 'Standing under the jellyfish at the Seattle Aquarium.',
		pin: false
	},
	{
		src: '/images/party/adriana.jpg',
		alt: 'Adriana is crouching and smiling in a lush garden filled with blooming flowers.  She is wearing a drak green dress with a grey denim jacket, white sneakers, and has a yellow bag slung over her shoulder.  The background is rich with greenery and colorful flowers, with trees providing a natural backdrop.',
		title: 'Adriana',
		creator: '{undefined}',
		type: 'photo',
		description: '{undefined}',
		pin: false
	},
	{
		src: '/images/party/aldrin.jpg',
		alt: "Neil and Aldrin smiling at Neil's senior prom.  Neil on the left, is wearing a black suit with a white shirt, a red tie wrapped around his forehead, and a red pocket square.  Aldrin, on the right, is wearing a blue suit with a light blue shirt and a grey tie.  They are standing together with Neil's arm around Aldrin's shoulder, in front of a rustic wooden and stone backdrop.",
		title: 'Krishna and Aldrin',
		creator: 'Cameron Ryan',
		type: 'photo',
		description: "Neil and Aldrin at Neil's senior prom.",
		pin: false
	},
	{
		src: '/images/party/emily.jpg',
		alt: 'Mason and Emily smiling together indoors.  Both are wearing glasses and have their heads close together.  Mason, on the left, has dark hair and is wearing a patterned top, while Emily, on the right, has her hair up in a bun and is wearing a tank top.  They appear to be enjoying a happy moment together.',
		title: 'Emily',
		creator: 'Mason Arnold',
		type: 'photo',
		description: '{undefined}',
		pin: false
	},
	{
		src: '/images/party/riley.jpg',
		alt: "Mason and Riley standing and laughing together in front of a corrugated metal wall.  Mason, on th eleft, is wearing a blue t-shirt, grey pants, and grey sneakers, with her arm around Riley's shoulder.  Riley, on the right, is wearing a white topand black leggings with white star patterns, and black sneakers.  Both are smiling and appear to be enjoying a light-hearted moment.",
		title: 'Sisters',
		creator: '{undefined}',
		type: 'photo',
		description: '{undefined}',
		pin: false
	},
	{
		src: '/images/party/tyler.jpg',
		alt: 'A silly photograph of Tyler taken directly from his Instagram page',
		title: 'innit 4 the thrill (2)',
		creator: 'Instagram: @vpysher',
		type: 'photo',
		description: '{undefined}',
		pin: false
	},
	{
		src: '/images/party/vanessa.jpg',
		alt: 'Neil and Vanessa smiling at the Denver Botanical Gardens.  Neil, on the right, is wearing glasses and a black t-shirt, whil Vanessa, on the left, is wearing glasses and has long, curly red hair.  They are standing close together with lush greenery in the background, enjoying a sunny day.',
		title: 'The Best of Friendos',
		creator: 'Neil Kumar',
		type: 'photo',
		description: 'A friendo and an enemio walk into a botanic garden...the third one sees ducks.',
		pin: false
	},
	{
		src: '/images/01.jpg',
		alt: 'A shapeless blob, blurred',
		title: 'Template Image 1',
		creator: 'Unsplash',
		description: 'A placeholder image used for testing website formatting',
		pin: false
	}
];

// ---- Icon Library ----
export interface Icon {
	path: string;
	viewBox: string;
}
export const iconLibrary: { [key: string]: Icon } = {
	'checked-calendar': {
		path: 'M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z',
		viewBox: '0 0 448 512'
	},
	'open-envelope-with-document': {
		path: 'M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
		viewBox: '0 0 512 512'
	},
	heart: {
		path: 'M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z',
		viewBox: '0 0 36 36'
	},
	dropdown: {
		path: 'M6 15l6 -6l6 6',
		viewBox: '0 0 24 24'
	},
	photo: {
		path: 'M15 3a2 2 0 0 1 1.995 1.85l.005 .15a1 1 0 0 0 .883 .993l.117 .007h1a3 3 0 0 1 2.995 2.824l.005 .176v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9a3 3 0 0 1 2.824 -2.995l.176 -.005h1a1 1 0 0 0 1 -1a2 2 0 0 1 1.85 -1.995l.15 -.005h6zm-3 7a3 3 0 0 0 -2.985 2.698l-.011 .152l-.004 .15l.004 .15a3 3 0 1 0 2.996 -3.15z',
		viewBox: '0 0 24 24'
	},
	art: {
		path: 'M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25 M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0 M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0 M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0',
		viewBox: '0 0 24 24'
	}
};

// ---- Party Members ----
export let partyMembers = [
	{
		name: 'Riley Arnold',
		image: {
			src: '/images/party/riley.jpg',
			alt: "Mason and Riley standing and laughing together in front of a corrugated metal wall.  Mason, on th eleft, is wearing a blue t-shirt, grey pants, and grey sneakers, with her arm around Riley's shoulder.  Riley, on the right, is wearing a white topand black leggings with white star patterns, and black sneakers.  Both are smiling and appear to be enjoying a light-hearted moment."
		},
		party: 'Bridal',
		honor: 'Maid of Honor',
		description: {
			first_paragraph: '{Not Yet Written}',
			second_paragraph: '{Not Yet Written}'
		}
	},
	{
		name: 'Emily Pierpoint',
		image: {
			src: '/images/party/emily.jpg',
			alt: 'Mason and Emily smiling together indoors.  Both are wearing glasses and have their heads close together.  Mason, on the left, has dark hair and is wearing a patterned top, while Emily, on the right, has her hair up in a bun and is wearing a tank top.  They appear to be enjoying a happy moment together.'
		},
		party: 'Bridal',
		description: {
			first_paragraph: '{Not Yet Written}',
			second_paragraph: '{Not Yet Written}'
		}
	},
	{
		name: 'Tyler Fields',
		image: {
			src: '/images/party/tyler.jpg',
			alt: 'A silly photograph of Tyler taken directly from his Instagram page'
		},
		party: 'Bridal',
		description: {
			first_paragraph: '{Not Yet Written}',
			second_paragraph: '{Not Yet Written}'
		}
	},
	{
		name: 'Julia Fanta Camara',
		image: {
			src: '/images/01.jpg',
			alt: 'A shapless blob, blurred. (This is a placeholder image).'
		},
		party: 'Bridal',
		description: {
			first_paragraph: '{Not Yet Written}',
			second_paragraph: '{Not Yet Written}'
		}
	},
	{
		name: 'Aldrin Feliciano',
		image: {
			src: '/images/party/aldrin.jpg',
			alt: "Neil and Aldrin smiling at Neil's senior prom.  Neil on the left, is wearing a black suit with a white shirt, a red tie wrapped around his forehead, and a red pocket square.  Aldrin, on the right, is wearing a blue suit with a light blue shirt and a grey tie.  They are standing together with Neil's arm around Aldrin's shoulder, in front of a rustic wooden and stone backdrop."
		},
		party: 'Grooms',
		honor: 'Best Man',
		description: {
			first_paragraph:
				'My best friend Aldrin, a beacon of wisdom and strength, has deeply influenced my life with his strong values and unyielding spirit.  He was the backbone I leaned on to not only finish high school but also to navigate the tumultuous early years of college.  With an open heart and ready ear, he has always been there to offer guidance, share a laugh, or simply listen.',
			second_paragraph:
				'His unwavering support has become the cornerstone of my resilience, giving me the strength and determination I needed to persevere through difficult moments in my educational and emotional journey.  Aldrin has a rare gift of grounding those around him, bringing a sense of stability and clarity in times of chaos, while also somehow keeping things light and fun.  I am filled with gratitude for his friendship, a bond that has truly stood the test of time, and enriched my life in more ways that I can count.'
		}
	},
	{
		name: 'Adriana Feliciano',
		image: {
			src: '/images/party/adriana.jpg',
			alt: 'Adriana is crouching and smiling in a lush garden filled with blooming flowers.  She is wearing a drak green dress with a grey denim jacket, white sneakers, and has a yellow bag slung over her shoulder.  The background is rich with greenery and colorful flowers, with trees providing a natural backdrop.'
		},
		party: 'Grooms',
		description: {
			first_paragraph:
				"I met Adriana in a singing cult called 'Quintessence', where our collaboration on music projects blossomed into a friendship that is truly beyond words.  We've seen each other grow throughout high school and kept in touch throughout college.  Through Skype chats and sharing of life's ups and downs, we have forged a bond that is both deep and enduring.",
			second_paragraph:
				"Adriana has an ineffable gift of saying just the right words at just the right time to illuminate the silver linings in any cloud.  Her ability to see and encourage the best in people is a beacon of light in every life she touches and mine is certainly no different.  I have come to rely on her insight and profound empathy to guide me through life's operatic highs and devastating lows.  I look to her as a source of strength, inspiration, and joy.  I carry her affirmations close to my heart, a gentle reminder to approach life with courage and to savor the little moments."
		}
	},
	{
		name: 'Vanessa Maldonado',
		image: {
			src: '/images/party/vanessa.jpg',
			alt: 'Neil and Vanessa smiling at the Denver Botanical Gardens.  Neil, on the right, is wearing glasses and a black t-shirt, whil Vanessa, on the left, is wearing glasses and has long, curly red hair.  They are standing close together with lush greenery in the background, enjoying a sunny day.'
		},
		party: 'Grooms',
		description: {
			first_paragraph:
				"From the very first day of college, Vanessa has been a constant source of joy and companionship in my life.  She was one of the first first friends I made and I couldn't have been luckier because since that moment, she has not only become a pillar in my life but also a balancing force in the whirlwind of experiences that college and beyond brought our way.",
			second_paragraph: '{Not Yet Written}'
		}
	}
];

// ---- Party Switcher Store ----
import { writable } from 'svelte/store';
export const selectedParty = writable('both');