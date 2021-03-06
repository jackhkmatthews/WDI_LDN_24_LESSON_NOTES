---
title: Front-end Routing with UI-Router
type: Lab
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
competencies: Front-end frameworks
---

# Front-end Routing with UI-Router

## Introduction

To practice working with UI-Router, you're going to make a single-page app with multiple views. Rather than starting totally from scratch, you'll be build up our previous **Infamous Criminals** interface to be more like a _real_ app.  Your mission is to convert the starter code so that each section of the interface has one purpose – one page per function.

To get started run:

```sh
$ bower i && npm i
```

## Exercise

Your app should have:

- A home/about page, explaining what this application is for
- An INDEX page, listing all our criminals
- A NEW page, with a form to add a new criminal
- A SHOW page, showing just one criminals

Try to create seperate controllers:

- `criminals-index.controller.js`
- `criminals-show.controller.js`
- `criminals-new.controller.js`

You will need to have also:

- `router.config.js`
- `api.constant.js`

#### Starter Code

In your starter folder you'll find a complete **Infamous Criminals** interface, but only on one page.

#### Deliverable

An Angular application with multiple states using UI-Router.

<img width="965" src="https://cloud.githubusercontent.com/assets/25366/9508418/062aca0e-4c0a-11e5-96c0-380af7b757c1.png">
<img width="965" src="https://cloud.githubusercontent.com/assets/25366/9508419/06392be4-4c0a-11e5-87f9-e9c612a9d19f.png">
<img width="965" src="https://cloud.githubusercontent.com/assets/25366/9508420/06400ba8-4c0a-11e5-903b-475028e6bbe8.png">


## Additional Resources

- [UI-Router docs](http://angular-ui.github.io/ui-router/site/#/api/ui.router)
