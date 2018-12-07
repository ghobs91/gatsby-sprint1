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

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/101

Trello: https://trello.com/c/5fchQ3Wr/183-responsive-front-end-v1

Ticket 2

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/124

Trello: https://trello.com/c/y7gtOEAn/220-successfully-retrieve-offline-pages

Ticket 3

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/122

Trello: https://trello.com/c/nHAjqDuS/210-save-page-object-to-offline-db

Ticket 4

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/126

Trello: https://trello.com/c/y7gtOEAn/220-successfully-retrieve-offline-pages

####Back End

Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/114

Trello 1: https://trello.com/c/OcqHYsA7/204-service-worker-and-sqlite-db-page-schema

 
 
##Detailed Analysis
Pick one of your tickets and provide a detailed analysis of the work you did.  This should be approximately ¼ page of text, and at least three screenshots.
 
####Front End Ticket 3 analysis
This ticket involved integrating the LocalForage offline storage into our front and back end flow.

In the below screenshot, you can see a portion of the action function in which after submitting the url to the scraper, the scraper creates a new page object, then returns all page objects including the new one. LocalForage is then used to save a new offline page object corresponding to that new page object created on the back end. 
![alt text](https://i.imgur.com/eVtjjIV.png)

Below, you can see the LocalForage function that fetches all offline pages when it's determined that the client is offline.

![alt text](https://i.imgur.com/uAK1Erv.png)

Finally, below you can see the LocalForage function that returns a specific offline page, when that page is clicked and a modal needs to be loaded:
 
![alt text](https://i.imgur.com/Iwi2YC3.png)
 
##Part 2 - Milestone Reflections
 
As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences working with a team to make your product look and feel as good as it works under the hood. Describe how the duties of you and your team shifted tasks shifted towards the front end - and debugging the back end to improve UX. As a group, provide documentation of your progress and remaining tasks:

The challenge and learning opportunity this week revolved around dedicating enough of our efforts to front end polish while having to take care of bugs on the back end. This required us to constantly keep the lines of communication open in order to shift workload between team members efficiently. This was especially important for our situation, as our back end bugs made it so that important portions of the front end couldn't render correctly. As a result, it was difficult to accurately gauge the front end polish, as you can't polish what isn't showing. 

The big lesson that came out of this is to adapt our priorities on core functionality first, even if it meant security and auth flow weren't perfect. We also learned to be more vocal to PMs and staff when a backend issue causes our functionality to regress instead of adding features. We now know going forward to make sure not to sacrifice core functions in the name of aspects like security that won't be important until down the road.

Link to each page and describe any remaining bugs, fixes, or tasks that need to be completed on that page

This past week 

1. Home Page: https://anywhere-reader-test.netlify.com/
2. Dashboard: https://anywhere-reader-test.netlify.com/articles
3. Settings: https://anywhere-reader-test.netlify.com/settings
4. Modal: https://anywhere-reader-test.netlify.com/viewpage

## Whiteboard

Link: 

