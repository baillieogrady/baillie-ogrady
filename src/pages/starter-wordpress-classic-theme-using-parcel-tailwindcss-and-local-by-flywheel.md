---
layout: ../layouts/Post.astro
title: 'Starter WordPress Classic Theme using Parcel, TailwindCSS and Local by Flywheel.'
pubDate: 2024-04-30
description: ''
---

See repo here: [link](https://github.com/baillieogrady/parcel-tailwind-classic-wordpress-theme)

**Disclaimer: hot reloading does not work when saving PHP files and this setup has only been tested using Local by Flywheel to create the WordPress instance.**

First, create a folder for your theme and open it in your text editor, in this instance I’ll be using VSCode and for the WordPress instance I’ll be using Local by flywheel.

Create the two mandatory WordPress files inside this folder: **style.css** and **index.php**, populating the style.css with the following so it can be activated in the CMS:

<!-- screenshot / screen recording -->

After this, we’ll create two template files **header.php** and **footer.php**, since you’ll most likely need these in every project. Once created, include the necessary mark up such as the **wp_head()** function in the header and **wp_footer()** function in the footer. Following this, output them in the index.php file using the **get_header()** and **get_footer()**:

<!-- screenshot / screen recording -->

Moving on, we’ll now create a **src** folder to store our development assets. Inside this folder make an **index.css** and **index.js** file and import the index.css file.

<!-- screenshot / screen recording -->

Next, we’ll set up our dev environment. I’m assuming you already have Node and NPM installed, if not, install them here: https://nodejs.org/en/download. Alternatively, run **brew install node** in the terminal, if you have brew installed. Proceed to install parcel, postcss and Tailwindcss with the following command in the theme root directory: **npm i parcel postcss tailwindcss**.

<!-- screenshot / screen recording -->

To setup Tailwind we’ll run **npx tailwindcss init** to generate a tailwind config file, changing the content value to capture all the src folder and PHP files in the theme directory.

<!-- screenshot / screen recording -->

Next, add the three default tailwind directives to the index.css and that’s tailwind good to go

<!-- screenshot / screen recording -->

Following that, we’ll go back in the root directory, create a **.postcssrc** file and add the following plugins to support CSS imports and nesting:

<!-- screenshot / screen recording -->

Also, we’ll just need to add a dev and build script to the package.json, once added open the terminal and run **npm run build**. This should generate a dist folder with our compiled assets.

<!-- screenshot / screen recording -->

Finally, create a **functions.php** file in the root theme directory and add the following to enqueue both our compiled css and js files.

<!-- screenshot / screen recording -->

Once that’s added, it’s time to test. Run **npm run start** and open your local WordPress url in the browser. You should notice the TailwindCSS default styles and HMR working when editing and saving the index.css and index.js files.

<!-- screenshot / screen recording -->

As mentioned earlier, hot reloading won’t work when editing and saving PHP files so if that’s a must for you, maybe consider using [Vite](https://vitejs.dev).