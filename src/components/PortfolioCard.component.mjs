/** @format */

class PortfolioCard {
	constructor({ heading, tech, image, alt, description, links }) {
		// internalize arguments
		this.heading = heading;
		this.tech = tech;
		this.image = image;
		this.alt = alt;
		this.description = description;
		this.website = links.website || links.github;
		this.links = [];

		// convert the links object into an array

		for (const link in links) {
			if (Object.hasOwnProperty.call(links, link)) {
				const element = links[link];

				this.links.push(element);
			}
		}

		// create the Element

		this.Element = document.createElement('div');
		this.Element.className = 'portfolio-card';
	}

	render(target) {
		const html = `
			<a
				class="portfolio-link"
				target="_blank"
				href="${this.website.href}"
				rel="norefferer noopener"
				title="Link to website"
			>
				<img src="${this.image}" alt="${this.alt}" loading="lazy" >
			</a>
			<div class="portfolio-details">
				<div>
					<h4>${this.heading}</h4>
					<span class="portfolio-tech">${this.tech}</span>
				</div>
				<p class="portfolio-description">${this.description}</p>
				<div class="portfolio-link-bar">
					${this.links
						.map(
							(link) =>
								`<a
								href="${link.href}"
								target="_blank"
								rel="norefferer noopener"
								>${link.icon.toString()}</a
							>`
						)
						.join('')}
				</div>
			</div>
		`;

		this.Element.innerHTML = html;

		target.appendChild(this.Element);
	}
}

export { PortfolioCard };
