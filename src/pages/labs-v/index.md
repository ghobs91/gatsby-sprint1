---
title: Labs 8 Sprint 5
---

##Part 1 - Individual Accomplishments this Week
Paste your team’s github contribution graph here and indicate your Github Handle:
https://github.com/Lambda-School-Labs/Labs8-OfflineReader/graphs/contributors
My github: @ghobs91
 
Provide a paragraph (5-8 sentences) summarizing the work you did this week, the challenges you faced, the tools you used, and your accomplishments
 
My work this week focused on finalizing and testing offline storage against our production database. In particular, I added functionality to our offline storage that enables audio and video streams to be saved to the client's offline indexedDB database. I did this using the saveoffline API, which accepts a url, extracts audio/video from the site, and then returns a stream/download link. This link is then converted into a blob object and saved to the offline db in that form. 

The biggest challenges and lessons this week revolved around several issues I had with running the backend and database locally. This slowed things down a bit initially, as it made it much harder to accurately test offline storage.
 
##Tasks Pulled
List the tasks you pulled this week, and provide a link to the successfully merged PR completing that task and the trello card for that task. You must have at least one front end and one back end. The expected total is 6 with a minimum of 4.

####Front End
Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/126

Trello: https://trello.com/c/sbAdkcGv/227-test-offline-storage-against-production-db-syncing

Ticket 2

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/124

Trello: https://trello.com/c/y7gtOEAn/220-successfully-save-and-retrieve-basic-offline-page-objects

Ticket 3

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/176

Trello: https://trello.com/c/bKE07pYg/268-finalize-offline-storage-and-documentation

Ticket 4

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/152

Trello: https://trello.com/c/oBgMkccF/282-navbar-touchup

####Back End

Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/150

Trello 1: https://trello.com/c/adRxbySC/254-offline-storage-testing-and-finalizing

 
 
##Detailed Analysis
Pick one of your tickets and provide a detailed analysis of the work you did.  This should be approximately ¼ page of text, and at least three screenshots.
 
####Front End Ticket 3 analysis
This ticket involved finalizing the structure and function of our offline storage flow.

In the below screenshot, you can see a portion of the action function in which if the website is determined to be youtube, the saveoffline API is used to extract a video download link, and that download stream is then saved as a blob object to the clients offline storage. 
![alt text](https://i.imgur.com/Yu3PARJ.png)

Below, you can see the logic that runs if it's a non youtube website. Localforage steps in and saves the pageobject being returned from the database.

![alt text](https://i.imgur.com/ogSpehJ.png)

Finally, below you can see the LocalForage function that iterates through all offline pages saved and populates the page with them if the user is offline:
 
![alt text](https://i.imgur.com/GZ3sq6T.png)
 
##Part 2 - Milestone Reflections
 
As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences working with a team to bring an application to completion. The 90-90 rule is a quip referencing the very real difficulty of truly completing a project. Describe some of the final tasks that were the most difficult for your team to resolve - challenging bugs, layout and presentation woes, or anything else that was easy to get mostly working, but hard to get perfect

For your project, provide in 350 words or less each:

The tech stack used to build the project
A description of the application Also provide:
A link in the readme to a document that provides links for the location for all media files (images, etc.) on the sight, and evidence of the license for that media.

----

This project has been a big learning experience and time of growth, both in skills and mindset. Learning how to work together as a team to deligate tasks, agree on important decisions, and communicate important information, was incredibly valuable.  The most challenging part of the final stretch was the unfortunate timing of several bugs we encountered. However, we put in the extra hours and worked hard as a team to get things in place. This was a great way to get a preview of what "crunch time" is like at a company.

Our tech stack was React and Redux for the front end, Django/Python for the backend, Postgres for the production database, and IndexedDB for the offline storage database.