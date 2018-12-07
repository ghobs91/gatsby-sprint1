---
title: Labs 8 Sprint 4
---

##Part 1 - Individual Accomplishments this Week
Paste your team’s github contribution graph here and indicate your Github Handle:
https://github.com/Lambda-School-Labs/Labs8-OfflineReader/graphs/contributors
My github: @ghobs91
 
Provide a paragraph (5-8 sentences) summarizing the work you did this week, the challenges you faced, the tools you used, and your accomplishments
 
My work this week initially focused on completing the responsive design framework, onto which we would build out the full polish for the front end. For the navigation bar, I accomplished this by using media queries to move the navigation links from the bar to a hamburger menu when the view is smaller than a certain width. For the page list, this was accomplished by using media queries and flexbox to make it so that the number of page cards per row steadily decreased when shrinking the screen, until only showing one per row in mobile screen sizes.

After completing this on Monday, the rest of my week focused on the front end and back end tasks needed to enable an offline storage mechanism that can sync with the backend database. After much research, I settled on using IndexedDB, as it has become the industry standard for this task. To be efficient, we're using LocalForage, an IndexedDB framework that allows us to easily save page objects to offline storage. I built out the general structure in our actions functions, which make it so that when a user submits a URL to be saved, the page object is saved on both the backend and offline storage in tandem. To enable the UI to be accessible offline, I made use of service workers, as they're also an industry standard, and work well with our react.js front end.

The biggest challenges and lessons this week revolved around debugging, as our team had recurring issues setting up our back end to correctly create page objects associated with a specific user, using the authentication flow we completed last week.
 
 
##Tasks Pulled
List the tasks you pulled this week, and provide a link to the successfully merged PR completing that task and the trello card for that task. You must have at least one front end and one back end. The expected total is 6 with a minimum of 4.

####Front End
Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/77

Trello: https://trello.com/c/uEPxSvkD/151-front-end-structure-to-submit-url-to-scraper

Ticket 2

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/80

Trello: https://trello.com/c/A5WEHbMF/152-front-end-component-redux-structure-to-plug-into-pages-api

Ticket 3

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/89

Trello: https://trello.com/c/glUNdW3N/173-clean-up-flow-layout-of-sending-url-to-scraper-and-loading-articles

####Back End

Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/81

Trello 1: https://trello.com/c/Yh7joaDx/166-scraper-handling-of-main-page-text
Trello 2: https://trello.com/c/BuXinrWe/165-handle-cover-image-and-full-text-in-scraper
 
 
##Detailed Analysis
Pick one of your tickets and provide a detailed analysis of the work you did.  This should be approximately ¼ page of text, and at least three screenshots.
 
####Front End Ticket 2 analysis
This ticket involved pulling together the flow of submit url -> scraper processes url -> creates page object -> front end populates with new page object.

In the below screenshot, you can see a portion of the action function that pertains to making a POST request to the scraper with the URL. After successfully scraping the article, the function then makes a GET request to pull the new Page object and repopulate the page. 
![alt text](https://i.imgur.com/au54sGY.png)

Below is the main fetch pages action fxn that runs whenever the dashboard is loaded/refreshed:

![alt text](https://i.imgur.com/VP2dSOi.png)

Finally, below you can see the front end flow that pulls this all together:
 
![alt text](https://i.imgur.com/EK3Zbyz.png 
 
##Part 2 - Milestone Reflections
 
As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences working with a team to convert a disparate set of components into a single, cohesive, and complete product. Describe the challenges you faced and the steps you took to overcome them.
As a group, demonstrate that you project has implemented every feature in the specification. Bugs can be present, and a rough experiences is expected. List each major feature in your specification and provide a link to where that feature is implemented.

This past week taught our team a great deal on how to work with a deadline and prioritize tasks. We struggled the first day due to a miscommunication from the rubric regarding which core functions to focus on, but quickly regrouped and divided up tasks accordingly. One of the challenges we faced was how to optimally complete a core function when another function was delayed in its completion. This taught us how to better modularize our functionality so that it could stand alone when another fxn wasn't completely operational. We also learned how best to determine how best to work on similar tasks without writing conflicting code. 

1. Home Page: https://anywhere-reader-test.netlify.com/landingpage
2. Dashboard: https://anywhere-reader-test.netlify.com/
3. Settings: https://anywhere-reader-test.netlify.com/settings
4. Modal: https://anywhere-reader-test.netlify.com/viewpage

## Whiteboard

Link: https://youtu.be/uLyaX6oJwJw

