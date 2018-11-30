---
title: Labs 8 Sprint 3
date: "2018-30-11T22:40:32.169Z"
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

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/51

Trello: https://trello.com/c/TjObsJ5W/83-refactored-signup-signin-logout-and-reducer-actions-to-have-most-of-django-auth-flow-setup

Ticket 2

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/39

Trello: https://trello.com/c/8H2oo6NP/21-redux-setup-to-interact-with-api

Ticket 3

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/51

Trello: https://trello.com/c/sw0I9lOk/107-integrate-google-oauth-into-frontend

####Back End

Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/wiki/Article-JSON-structure

Trello: https://trello.com/c/Hz58DXOc/79-create-structure-property-wiki-for-how-article-objects-will-look
 
 
##Detailed Analysis
Pick one of your tickets and provide a detailed analysis of the work you did.  This should be approximately ¼ page of text, and at least three screenshots.
 
####Front End Ticket 3 analysis
This ticket involved setting up our front end auth to integrate Google Oauth login. Using Google's documentation and the Django documentation for auth, we setup the following end result:

![alt text](https://i.imgur.com/ZpAVn7t.png)

Getting Google auth setup involved integrating their node modules and making sure the login flow and transfer of tokens worked with our django backend:

![alt text](https://i.imgur.com/xRTMTiY.png)

Finally, a protected component was created that shows the articles associated with a user, only if that user is logged in:
 
![alt text](https://i.imgur.com/FMz7y0D.png 
 
##Part 2 - Milestone Reflections
 
As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences working with a team to convert a disparate set of components into a single, cohesive, and complete product. Describe the challenges you faced and the steps you took to overcome them.
As a group, demonstrate that you project has implemented every feature in the specification. Bugs can be present, and a rough experiences is expected. List each major feature in your specification and provide a link to where that feature is implemented.

Front end deploy: 

-Stripe: https://i.imgur.com/JBg6vHI.png
-oAuth Facebook: https://i.imgur.com/rPoA43u.png and https://i.imgur.com/uK26e0Q.png
-oAuth Google: https://i.imgur.com/dxIwJUI.png

Back end deploy: https://anywhere-reader-test.herokuapp.com
 

## Whiteboard

Link: https://www.youtube.com/watch?v=azUko6LCb5k

