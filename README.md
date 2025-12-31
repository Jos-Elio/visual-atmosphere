# VISUAL ATMOSPHERE GENERATOR
#### Video Demo:  <URL HERE>
#### Description:
My Final Project is an interactive audiovisual artist website.
The Visual Atmosphere Generator is a web-based audiovisual instrument that allows users to explore looping visuals with real-time color, contrast, and motion adjustments, either with a built-in audio track or their own music.

This project was created as the final project for CS50 Introduction to Computer Science. My name is Jos, and I am a visual and musical artist from Germany. I created this interactive website for my artistic persona "Jos Elio Angel". For live music shows, I design immersive visuals, which are integrated throughout the website and within the Visual Atmosphere Generator.

To make arts more accessible, it is always important for me that people can also access my works outside of art spaces and concert halls. So I designed the playful VJ-page atmosphere.html. Users are greeted with an info window explaining how to use the instrument. They can select between three visual loops, adjust hue, contrast, and playback speed, and enter fullscreen mode to project the visuals on a wall or monitor for exhibitions, parties, or karaoke nights. An audio play button allows users to play and pause the song "Jos Elio Angel – Change."

Challenges included setting up robust HTML structure with JavaScript (app.js) to handle video and audio files, creating a custom navigation bar instead of using Bootstrap, and ensuring responsive behavior across desktop and mobile devices.

#### Features:
- Video-based visual loops
- Fullscreen mode
- Hue and contrast controls
- Video speed control
- Loop switching
- Audio playback
- Info modal for instructions

#### Tech Stack
- HTML
- CSS
- JavaScript (Vanilla)

#### Future Improvements
- Preset saving
- User-uploaded visuals
- Backend for media management

#### Deployment
Live version: https://DEIN-LINK

#### Design Choices
JavaScript was used to control video playback, visual filters, fullscreen behavior, and user interaction through sliders and buttons. I chose to use native browser APIs instead of external libraries to better understand how media elements, events, and state management work in vanilla JavaScript. JavaScript is also used to load partials of header.html and footer.html in each HTML file.

I deliberately chose to build this project without a backend or database.
While I initially considered using Flask and Python to manage media files, I decided against it in order to keep the project lightweight and fully client-side. This decision reduced complexity and made the application easier to deploy and maintain.

The file app.js contains all JavaScript logic used throughout the project and is responsible for handling dynamic content loading, user interaction, media control, and visual manipulation.

At the beginning of the file, I implemented an asynchronous function to load reusable HTML partials such as the header and footer. Using the Fetch API and async/await, this approach avoids code duplication across multiple pages and ensures consistent navigation throughout the website. Guards are used to prevent errors on pages where certain elements do not exist.

For responsive design, the file includes a mobile navigation toggle that enables opening and closing the navigation menu on smaller screens. This is handled through event listeners that dynamically toggle CSS classes.

On the landing page (index.html), JavaScript is used to control the background video audio. A mute/unmute button allows users to interactively enable or disable sound, providing a better user experience while respecting autoplay restrictions.

For the interactive core of the project (atmosphere.html), the JavaScript file controls a modal information window that explains how to use the Visual Atmosphere Generator. The modal is dismissible via a button and is only active when the required elements are present.

The main interactive functionality is implemented through multiple sliders and buttons that manipulate a looping video element in real time. Hue rotation and contrast adjustments are applied using CSS filter properties, while motion is controlled through the video’s playbackRate. These parameters are updated dynamically via input event listeners, allowing for immediate visual feedback.

A fullscreen mode is implemented using the browser’s Fullscreen API, enabling users to project the visuals in an immersive way. The script handles entering and exiting fullscreen mode, as well as updating button states when fullscreen changes occur.

Audio playback is controlled through custom play/pause buttons and a volume slider, allowing users to either listen to the built-in track or mute it and use their own music instead.

The project also includes a video loop switcher that allows users to swap between different visual loops without reloading the page. Additionally, preset buttons are implemented to instantly apply predefined combinations of color, contrast, speed, and video loops. These presets demonstrate state control and provide curated visual moods.

Throughout the file, conditional checks are used to ensure that JavaScript functionality only runs on pages where the corresponding elements exist. This makes the code robust, reusable across multiple pages, and free of runtime errors..


#### Files I wrote for this project:
App.js contains all the JavaScript code, styles.css includes all CSS necessary for the project.

All .html files I wrote for this project include a header partial loaded through JavaScript code from app.js. The header includes the Navigation Bar, through which no matter on which page you currently are, you can access each subpage.
All .html files are responsive, the features are fully accessible both on desktop and mobile devices.

index.html:
This is the landing page, the background is a video loop with an audio playback of the song "Jos Elio Angel – Intro". Users can unmute and mute the audio. Through the Navigation Bar you can access each other subpage.

music.html:
Here you can listen to my music using embedded Bandcamp and Spotify audio players. You can also get directly to the Bandcamp and Spotify profiles to follow and buy the music if you want.

atmosphere.html:
The Visual Atmosphere Generator with instructions, sliders, fullscreen, video loop switching, and audio playback.

about.html:
Find information about my music and biography.

contact.html:
Email contact link; background photo by artist Roxana Rios.