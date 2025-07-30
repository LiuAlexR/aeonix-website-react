# Website Documentation

---

## Introduction

This website was developed with future-proofing in mind, making it relatively simple to update existing pages and add new content like news articles. If that's your goal, you'll find detailed instructions in the "Updating a Page" section below.

This document outlines the website's structure, including hosting options, the frameworks used, the site's format, and other relevant areas.

The website utilizes a **ReactJS** front end and a **HonoJS** back end, both hosted on **Cloudflare Pages**. It's connected to a **Cloudflare D1 Database**, which manages incoming messages and stores data such as news and product information. Whenever either the news or product page is loaded, it queries the database, allowing an administrator to easily add new content.

---

## Updating a Page

Page updates are performed through the administration page.

As of August 1, 2025, the current link is:\
`aeonix-website-react.aeonix-energy.workers.dev/admin-aeonix`

Once the domain transfer is complete, it will be found at:\
`aeonix.energy/admin-aeonix`

Once accessed, an administrator can add content according to a set of predefined fields. The password is shared among all administrative actions. As of August 1, 2025, the password is:\
`Qpz531{xQ]wc`

When adding a news article, you'll need an **image link**, which is sourced directly from the news article itself. To get the link, simply right-click on the image and select “Copy Link.”

Adding a product is similar. There isn't an image hosting method built into the application yet, but images can be hosted on sites like [imgur.com](https://imgur.com/) and linked to the site. This format also supports up to two paragraphs of text. **The text areas DO NOT automatically support newline characters.** If you wish to form a new line, replace the newline character with `<br />`. For example, to display:

Lorem Ipsum\
Dolor Sit Amet

You would input:\
`Lorem Ipsum<br />Dolor Sit Amet`

When removing news articles, you simply need to select a section of text from within the included blurb. For example, if the blurb of a news article is "Lorem Ipsum Dolor Sit Amet," you can remove it by typing "Lorem," "Sit," "Dolor Sit," or any combination of characters that exist inside the blurb. Similarly, products are removed in the same way, except the match is based on the product name rather than the blurb.

---

## Website Setup

The front end of the website (`src/react-app`) is organized into `assets`, `components`, `pages`, and the default `app.tsx`/`main.tsx` files required for setup. The `app.tsx` file utilizes **React Router** to handle page routing. The color scheme is defined within `index.css`.

* The **`assets`** directory contains various edited logos and static media, organized by page.
* The **`components`** directory contains code for the navigation bar and the footer.
* The **`pages`** directory contains the bulk of the website code. Note that the structure contains a multitude of unimplemented components, which were initially part of the website but were removed for various reasons. Most of the rest of the site is hard-coded, so you can simply edit the code as if it were HTML.

The raw source code is stored on my personal repository.

---

## Homepage Video

The highlight video, displayed on page load, can be found in the `homepage` folder within `media`. It exists as `the-video.mp4` for browsers and `the-video.gif` for phones. The `.gif` is necessary for allowing the video to play on iOS devices, as they automatically disable autoplay. Kdenlive files, which were used to create the video, can be found in the root folder `homepage_video`. However, the images used in the video reside within the `media` directory.

In addition to the video, the centerpiece also features a gradient to ensure text readability. Keep this in mind when making changes.

---

## Back End

The back end was written in **HonoJS** and serves to handle administration changes and submissions from the contact form. In it, it automatically handles formatting problems and should be prompt\-injection proof. The back end is not visible to the public, and although the code can be found in the GitHub repository, I found it simpler to just disconnect the GitHub repository from Cloudflare before the final push.