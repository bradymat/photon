import html from 'yo-yo'

module.exports = (state, dispatch) => {
  return html`
  <div>
  <section id="header">
    <div class="inner">
      <span class="icon major fa-github"></span>
      <h1>bradymat​</h1>
      <p>Wellington based web design & web development agency</p>
      <p>We cater to Small Businesses wanting a new website at the cheapest price​</p>
      <br>
      <ul class="actions special">
        <li><a href="#one" class="button">Learn More</a></li>
        <li><a href="#four" class="button">Pricing</a></li>
        <li><a href="#footer" class="button">Get In Touch</a></li>
      </ul>
    </div>
  </section>

  <!-- One -->
  <section id="one" class="main style1">
    <div class="container">
      <div class="row gtr-150">
        <div class="col-6 col-12-medium imp-medium">
          <span class="image fit"><img src="https://user-images.githubusercontent.com/20106637/43214563-bdcc1cc4-908d-11e8-88c4-057d66d1dc47.png" alt="IEIO Mobile" /></span>
        </div>
        <div class="col-6 col-12-medium">
          <header class="major">
            <h2>All Our Websites Come With​</h2>
          </header>
          <ul class="contact-icons">
            <h3>Responsive Design</h3>
						<li class="icon fa-tablet">
              Your website will look great on any device
						</li>
            <br>
            <h3>Fast Technology</h3>
						<li class="icon fa-bolt">
                We use the latest technology to make your website crazy fast
						</li>
            <br>
            <h3>Search Engine Optimization</h3>
						<li class="icon fa-google">
                Rank high in search engines like google quickly
						</li>
					</ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Two -->
  <section id="two" class="main style2">
    <div class="container">
    <header>
      <h2 class="text-center">Listen to Our Happy Clients</h2>
    </header>
    <br>
      <div class="row gtr-150">
        <div class="col-6 col-12-medium testimonialContainer">
          <div class="testimonial">
          <span class="icon text-center fa-quote-right"></span>
          <br>
          <p>Great website, it displays all my information and it doesn't cost me monthly! It shows off my menus and lets hungry customers know where to find me. It looks great on my phone too.</p>
          <p class="text-center bold">Abdalla Tammam​</p>
          <p class="text-center">Camel Grill</p>
          <span class="img-center" ><img src="https://user-images.githubusercontent.com/20106637/43216349-ea2c3510-9092-11e8-98ee-6c64c78cda1c.jpg" alt=">Abdalla Tammam​" /></span>
          </div>
        </div>
        <div class="col-6 col-12-medium">
          <div class="testimonial">
          <span class="icon text-center fa-quote-right"></span>
          <br>
          <p>Fantastic website, it's ranked #1 on Google when you search for "caravan warrant" in Otago. It brings in heaps of clients. The clean mobile focused design is perfect for my clients who are usually electricians out on the go with their phones or tablets</p>
          <p class="text-center bold">Allan Perry</p>
          <p class="text-center">Independent Electrical Inspectors Otago​</p>
          <span class="img-center" ><img src="https://user-images.githubusercontent.com/20106637/43215857-6862a2c2-9091-11e8-86aa-c0846afdce85.jpg" alt="Allan Perry" /></span>
          </div>
        </div>
      </div>
      <br>
    </div>
  </section>

  <!-- Three -->
  <section id="three" class="main style1 special">
    <div class="container">
      <header class="major">
        <h2>Recent Work</h2>
      </header>
      <br>
      <div class="row gtr-150">
        <div class="col-6 col-12-medium">
          <span class="recentWork image fit"><img class="" src="https://user-images.githubusercontent.com/20106637/43216743-dadc7cc2-9093-11e8-89ca-e857af6f26ac.jpg" alt="Camel Grill Website on Desktop" /></span>
          <h3>Camel Grill</h3>
          <p>Made for quick visits and hungry customers! Easily find the right information fast.</p>
          <ul class="actions special">
            <li><a class="" href="http://camelgrill.co.nz" target="_blank">Visit Website</a></li>
          </ul>
        </div>
        <div class="col-6 col-12-medium">
          <span class="recentWork image fit"><img class="" src="https://user-images.githubusercontent.com/20106637/43216883-32117876-9094-11e8-9456-2fa3ac8a2bd4.jpg" alt="IEIO Website on Desktop" /></span>
          <h3>Independent Electrical Inspectors Otago</h3>
          <p>Mobile first website, most of IEI Otago's clients are tradesmen out on the job using tablets and smartphones. I created a user interface with large buttons so their clients can quickly get the information they need.</p>
          <ul class="actions special">
            <li><a class="" href="http://ieio.co.nz" target="_blank">Visit Website</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Four -->
  <section id="four" class="main style2 special">
    <div class="container">
      <header class="">
        <h2>Choose What Solution Best Fits You</h2>
        <br>
      </header>
      <div class="row gtr-150">
      <div class="col-4 col-12-medium">
        <br>
        <span class="offer-heading bold">Static Website</span>
        <p>Perfect if you don't need to change your website often</p>
        <span class="white bold">$<span class="highlight bold">0</span>/month</span>
        <br>
        <p>Website Personally Setup For You</p>
        <p>Mobile Friendly Website</p>
        <p>Up to 6 Pages Included</p>
        <p>Setup price $299</p>
        <ul class="actions special">
          <li><a href="#footer" class="button">Get In Touch</a></li>
        </ul>
      </div>
      <div class="col-4 col-12-medium">
        <div class="center-offer">
        <br>
        <span class="center-offer-heading bold">CMS Website</span>
        <p>When you need to update your website regularly</p>
        <span class="bold">$<span class="center-highlight bold">29</span>/month</span>
        <br>
        <p>Website Personally Setup For You</p>
        <p>Mobile Friendly Website</p>
        <p>Up to 12 Pages Included</p>
        <p>You Can Manage Content Yourself</p>
        <p>Setup price $499</p>
        <ul class="actions special">
          <li><a href="#footer" class="center-offer-button">Get In Touch</a></li>
        </ul>
        </div>
      </div>
      <div class="col-4 col-12-medium">
        <br>
        <span class="offer-heading bold">eCommerce Website</span>
        <p>Looking to sell online? This is the solution for you</p>
        <span class="white bold">$<span class="highlight bold">69</span>/month</span>
        <br>
        <p>Website Personally Setup For You</p>
        <p>Mobile Friendly Website</p>
        <p>Up to 12 Pages Included</p>
        <p>Sell Unlimited Products</p>
        <p>Setup price $499</p>
        <ul class="actions special">
          <li><a href="#footer" class="button">Get In Touch</a></li>
        </ul>
      </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
    <section id="footer">
    <header>
      <h2 class="text-center">Get In Touch</h2>
    </header>
    <ul class="contact-icons color1">
				<li><a class="icon fa-map-marker"><span class="white icon-margin">Wellington, NZ</span></a></li>
				<li ><a class="icon fa-phone" href="tel:+64274667607" target="_blank"><span class="white icon-margin">027 466 7607</span></a></li>
				<li ><a class="icon fa-envelope" href="mailto:hello@bradymat.com" target="_blank"><span class="white icon-margin">hello@bradymat.com</span></a></li>
				<li ><a class="icon fa-github" href="https://github.com/bradymat" target="_blank"><span class="white icon-margin">github.com/bradymat</span></a></li>
      </ul>
			<ul class="copyright">
        <li>© <span id="date" class="white">${getDate()}</span> bradymat. All Rights Reserved. Developed by <a href="http://bradymat.com" target="_blank">bradymat</a></li>
      </ul>
    </section>
    </div>
  `
  function getDate () {
    var d = new Date();
    return d.getFullYear();
  }
}
