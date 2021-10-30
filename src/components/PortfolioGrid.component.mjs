/** @format */

class PortfolioGrid {
	constructor({ heading, image, description, links }) {
		// internalize arguments
		this.image = image;
		this.description = description;
		this.link = links.website || links.github;
		this.heading = heading;

		// create the Element

		this.Element = document.createElement('div');
		this.Element.className = 'portfolio-grid-element';

		this.Element.style = `background-image: url("${this.image}")`;
	}

	render(target) {
		const html = `
			<a
				class="portfolio-grid-link"
				target="_blank"
				href="${this.link.href}"
				rel="norefferer noopener"
				title="Link to website"
			>	<h4>${this.heading}</h4>
				<p class="portfolio-grid-details">${this.description}</p>
			</a>
		`;

		this.Element.innerHTML = html;

		target.appendChild(this.Element);
	}
}

export { PortfolioGrid };
