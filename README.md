# Aeonix Energy Website

Introduction
This website was made, in part, with the intention to be future proof. As such, updating pages and adding news articles is relatively simple. If that is your intention, instructions can be found in the following section.
This document covers the structure of the website, including hosting options, frameworks used, the format of the site, and other relevant areas.
This website is created with a ReactJS front end and a HonoJS back end, hosted on Cloudflare pages. It is connected to a Cloudflare D1 Database, which manages incoming messages and stored data, such as the news and product information. Whenever either page is loaded, it queries the database, allowing an admin to easily add content.
Updating a page
Updating a page through this method is done through the administration page. As of 2025 August 1, the link is
aeonix-website-react.aeonix-energy.workers.dev/admin-aeonix
Once the domain transfers, it would be found under
aeonix.energy/admin-aeonix
Once the page is accessed, an administrator can add content, according to a set of predefined fields. The password is shared among all actions. As of 2025 August 1, the password is:
Qpz531{xQ]wc
Adding a news article requires an image link, which is sourced from the news article itself. To get the link, simply right click on the image and select “Copy Link.”
Adding a product is similar. There is not yet an image hosting method built in the application itself, but images can be hosted on sites such as imgur.com and linked to the site. Such a format also supports up to two paragraphs. The text areas DO NOT automatically support newline characters, if you wish to form a new line, replace the new line character with “<br />”. For example, if you wish to display
Lorem Ipsum
Dolor Sit Amet
You would want to input 
Lorem Ipsum<br />Dolor Sit Amet
Into the text area.
	When removing news articles, you simply need to select a section of text from within the included blurb. For example, if the blurb of a news article is
Lorem Ipsum Dolor Sit Amet
You can remove it by typing “Lorem”, “Sit”, “Dolor Sit”, or any combination of characters that exist inside the blurb. Similarly, products are removed in the same way, except that it matches on the product name, rather than the blurbs.

Website Setup
The front end for the website 	(src/react-app) is organized into assets, components, pages, and the default app.tsx/main.tsx required for the setup. The app.tsx utilizes react router to route the pages. The color scheme is defined within index.css. 
The assets directory contains various edited logos and static media. The static media is organized by page. The components directory contains code for the navigation bar and the footer. The pages directory contains the bulk of the website code. Note that the structure contains a multitude of unimplemented components. These components were initially in the website but were removed for a multitude of reasons. Most of the rest of the site is hard-coded, so one can simply edit the code as if it were html.
The raw source code is stored on my personal repository
Homepage Video
The highlight video, found on page load, can be found in the homepage folder within media. It exists as “the-video.mp4” for browsers and “the-video.gif” for phones. The .gif is necessary for allowing the video to play on iOS devices, as they automatically disable autoplay. Kdenlive files, which were used to create the video, can be found in the root folder “homepage_video.” However, the images reside within the media directory.
In addition to the video, the centerpiece also features a gradient to allow the text to be readable. Keep this in mind when making changes. 

Back End
The back end was written in HonoJS, and serves to handle administration changes and posts to the contact form. In it, it automatically handles formatting problems and should be prompt-injection proof. The back end is not visible to the public, and although the code can be found on the github repository, I have found it simpler to just disconnect the github repository from Cloudflare before the final push.
	
