// creating navbar list start
const bannerSecLeft = document.querySelector(".banner_section_left");
const navbar = document.createElement("div");
navbar.className = "custom_menu";
bannerSecLeft.appendChild(navbar);

const ul_navbar = document.createElement("ul");

navbar.append(ul_navbar);

const navLis = [
	{
		href: "index.html",
		class: "fa fa-arrow-right",
		span: "padding_15",
		value: "HOME",
	},
	{
		href: "the-wedding.html",
		class: "fa fa-arrow-right",
		span: "padding_15",
		value: "THE WEDDING",
	},
	{
		href: "wedding-planner.html",
		class: "fa fa-arrow-right",
		span: "padding_15",
		value: "WEDDING PLANNER",
	},
	{
		href: "blog.html",
		class: "fa fa-arrow-right",
		span: "padding_15",
		value: "BLOG",
	},
	{
		href: "contact.html",
		class: "fa fa-arrow-right",
		span: "padding_15",
		value: "CONTACT",
	},
];

navLis.forEach((navli) => {
	const li = document.createElement("li");
	li.innerHTML = `<a href=${navli.href}><i class="${navli.class}" aria-hidden="true">
							</i>
							<span class=${navli.span}>${navli.value}</span></a> `;
	ul_navbar.append(li);
});

const navbarContact = document.createElement("div");
navbarContact.className = "custom_menu";
bannerSecLeft.appendChild(navbarContact);

const ulNavbarContact = document.createElement("ul");

navbarContact.append(ulNavbarContact);

const navLisContact = [
	{
		href: "index.html",
		src: "./img/call-icon.png",
		span: "padding_15",
		value: "Call +01 1234567890",
	},
	{
		href: "index.html",
		src: "./img/mail-icon.png",
		span: "padding_15",
		value: "demo@gmail.com",
	},
];

navLisContact.forEach((n) => {
	const li = document.createElement("li");
	li.innerHTML = `<a href=${n.href}><img src=${n.src}>
							<span class=${n.span}>${n.value}</span></a> `;
	ulNavbarContact.appendChild(li);
});

const navbarSocial = document.createElement("div");
navbarSocial.className = "social_icon";
bannerSecLeft.appendChild(navbarSocial);

const ulNavbarSocial = document.createElement("ul");
navbarSocial.append(ulNavbarSocial);
const navLisSocial = [
	{
		href: "index.html",
		src: "./img/fb-icon.png",
	},
	{
		href: "index.html",
		src: "./img/twitter-icon.png",
	},
	{
		href: "index.html",
		src: "/img/linkedin-icon.png",
	},
];

navLisSocial.forEach((n) => {
	const li = document.createElement("li");
	li.innerHTML = `<a href=${n.href}><img src=${n.src}></a> `;
	ulNavbarSocial.append(li);
});
