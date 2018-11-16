---
title: Labs 8 Sprint 2
date: "2018-16-11T22:40:32.169Z"
---

##Part 1 - Individual Accomplishments this Week
Paste your team’s github contribution graph here and indicate your Github Handle:
https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pulse
My github: @ghobs91
 
Provide a paragraph (5-8 sentences) summarizing the work you did this week, the challenges you faced, the tools you used, and your accomplishments
 
My work this week focused on the 2nd two bullets of this weeks MVP, connecting the front and back end to enable creation of article objects, and integrating Oauth 3rd party libraries with our authentication system. For the first task, I built out the async redux structure needed to interact with our django backend in order to create user objects with articles associated with them. For the second task, I wrote and then fully refactored our front end login flow, adding google Oauth in the second refactor.

The biggest challenges and lessons this week revolved around a) Putting too many tasks into each PR, and b) Not efficiently dividing mvp tasks between us in a way that led to duplication of work. For the former, I will work to better divide my tasks into multiple PRs, as the 2 PRs I submitted this week were quite large, and were realistically at least 4-5 PRs worth of work. For the latter, our group will spend some time today building an improved work flow so that we efficiently utilize our efforts and don't struggle to meet MVP going forward.
 
 
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
 
As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences working with a team to integrate several servers, pages, APIs, and services into one project. Describe how your pieces of the project interfaced with and integrated with your teammates.
 
This week was enlightening in the intricacies of implementing multiple APIs and having them play well with our backend, and with each other. Each API has its own format of how JSON should be submitted and how it is returned. This pushed us to write our own wiki entry to standardize across the team the formatting in which we would submit articles for each user. We made this wiki collaborative so that the full stack and iOS teams both had input into their needs for data modeling.

This made us learn just how incredibly important it is to communicate and coordinate our efforts well. If one team member is not up to speed on how another is implementing a certain API, they will have issues determing the optimal way for their article objects to be created in line with how associated user objects are set up, for example. We learned a valuable lesson this week just how crucial it is for us to better coordinate our delegation of MVP tasks so that effort and time is not wasted on duplication of efforts that then need to be refactored. I'm confident going forward that our productivity will be greatly increased when we start to begin every week with a discussion of exactly how the MVP tasks will be divided, and which members should work closely together when relevant. 
 
As a group, provide links to evidence that:

Front end deploy: 

-Stripe: https://i.imgur.com/JBg6vHI.png
-oAuth Facebook: https://i.imgur.com/rPoA43u.png and https://i.imgur.com/uK26e0Q.png
-oAuth Google: https://i.imgur.com/dxIwJUI.png

Back end deploy: https://anywhere-reader-test.herokuapp.com
 

## Whiteboard

Link: https://www.youtube.com/watch?v=azUko6LCb5k

