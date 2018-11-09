---
title: Labs 8 Sprint 1
date: "2018-11-09T22:40:32.169Z"
---

##Part 1 - Individual Accomplishments this Week
Paste your team’s github contribution graph here and indicate your Github Handle:
https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pulse
My github: @ghobs91
 
Provide a paragraph (5-8 sentences) summarizing the work you did this week, the challenges you faced, the tools you used, and your accomplishments
 
My work this week primarily revolved around django backend and some react front end testing. I built the basic django infrastructure that we would build the rest of our backend around. I then used docker to integrate PostgreSQL into our django and ran it in a virtual environment for testing purposes. 
 
Our team correctly predicted that going with a language and framework we were unfamiliar with would be challenging up front, but rewarding later, due to Djangos robust boilerplate features. The biggest challenge for me personally was getting Docker to successfully connect a PostgreSQL database, local setup gave me some issues that I eventually sorted out with some help from teammates and my PM. I was pleased to see that I was able to give myself a crash course in Python and eventually get Django and Postgres set up, despite being unfamiliar with all 3.
 
 
 
 
 
##Tasks Pulled
List the tasks you pulled this week, and provide a link to the successfully merged PR completing that task and the trello card for that task. You must have at least one front end and one back end. The expected total is 6 with a minimum of 4.

####Front End
Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/28

Trello: https://trello.com/c/p6DwakFh/49-react-testing

####Back End

Ticket 1

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/11

Trello: https://trello.com/c/C9ZhrUIJ/17-basic-django-backend

Ticket 2

Github: https://github.com/Lambda-School-Labs/Labs8-OfflineReader/pull/23 

Trello: https://trello.com/c/rlOfsk0s/39-connect-postgres-to-django

Ticket 3

Github (Wiki/deployment task): https://github.com/Lambda-School-Labs/Labs8-OfflineReader/wiki/Environment-Setup:-Django-&-Python

Trello:  https://trello.com/c/06g9v29i/45-wiki-for-django-python-setup
 
 
 
 
##Detailed Analysis
Pick one of your tickets and provide a detailed analysis of the work you did.  This should be approximately ¼ page of text, and at least three screenshots.
 
####Back End Ticket 1 analysis
This ticket involved setting up the initial django back end that we would build off of. Before starting this, I gave myself a crash course in Python to familiarize myself with the syntax. The training kit was particularly helpful in getting up to speed on Python. Upon initially generating a basic django backend, the file structure looks like so:

![alt text](https://i.imgur.com/HcvMoLv.png)

After generating this project, I made sure to obscure any sensitive keys like the secret key and database login into a separate .env file, and include .env in the .gitignore file. After importing the python-decouple framework, the values defined in .env were then called in settings.py like so:

![alt text](https://i.imgur.com/ZNLleGp.png)

Once this task was completed, I set out to connect a test postgres database to the django backend using docker and pgAdmin. This entailed using a virtual linux environment to emulate the postgres database, so that I can create a migration, a superuser, and other tasks to ensure the db was working properly.
 
![alt text](https://i.imgur.com/6OZ9RRR.png) 
 
##Part 2 - Milestone Reflections
 
As a part of your journal entry, write ¼ to ½ a page reflecting on your experiences forming a team. What did you do to help the team solidify as a group? What did you do that you now realize caused friction in this process?
 
Part of the challenge, and yet also one of the biggest learning experiences, of Labs, has definitely been adjusting to the dynamics of working in a team, as opposed to working alone. The initial learning curve was in effectively delegating tasks. Due to the heavily boilerplate-eque nature of the beginning of a project, we had to determine the optimal way to split up tasks so that one person wasn’t waiting for another’s boilerplate to be set up before they could begin to work on their task. This was especially important due to the fact that our team is a mixture of Full Stack and iOS members. 
 
While still a work in progress, our decision was to have each half of our FSW team alternate between two backend tasks and two front end tasks. In addition, we have the iOS team build autonomously as essentially a separate front end team, using boilerplate backend on firebase to test their code whenever our backend is being worked on. One area of friction that we ran into was getting members of the team up to speed on environment setup for a framework they hadn’t used yet, especially when it came to django and postgres. We remedied this by developing wiki pages that detail setup for every new framework we make use of.
 
 
As a group, provide links to evidence that:

Front end deploy: https://anywhere-reader-test.netlify.com/

Back end deploy: https://anywhere-reader-test.herokuapp.com

User accounts are created: ![alt text](https://i.imgur.com/cZhY16J.png) 
 

