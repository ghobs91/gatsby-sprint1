---
title: Labs 8 Sprint 3
---

##Part 1 - Individual Accomplishments this Week
Paste your team’s github contribution graph here and indicate your Github Handle:
https://github.com/Lambda-School-Labs/Labs8-OfflineReader/graphs/contributors
My github: @ghobs91
 
Provide a paragraph (5-8 sentences) summarizing the work you did this week, the challenges you faced, the tools you used, and your accomplishments
 
My work this week initially focused on implementing the 2nd API, and then on building out the front end and redux framework of our core functionality. For the first task, I chose to integrate NewsAPI into an Explore tab, pulling the latest headlines to display for users. This was meant to give new users a starting point for idea of what articles to save. For the second task, I created the front end and redux flow which allows a user to submit a url to our scraper, have the scraper process the page, create a Page object with those properties, and then repopulate the users page with those new articles.

The biggest challenges and lessons this week revolved around prioritizing the most important tasks. This was particularly important this week, because we needed to make sure we were all focusing our time on tasks that pertained to core functionality. 
 
 
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

Link: 

