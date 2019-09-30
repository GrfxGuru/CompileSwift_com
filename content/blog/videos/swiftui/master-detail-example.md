---
title: Creating a Master Detail View with Navigation
author: Peter Witham
featuredImage:
date: "2019-09-29T21:44:00"
description: The Master Detail view pattern is very common in applications. This video explains how to create just that using SwiftUI 
---

## The Problem
You are creating an application using SwiftUI and need to have a master detail view with navigation between them.

## The Solution
This is something that SwiftUI has really simplified, we do not need to worry about storyboards or _prepareForSegue_ and all the code that goes with that.

It now just takes a few lines of code using a _NavigationView_ and _NavigationLink_ to have a working system in very little time.

### The Steps
1. Wrap the view in a `NavigationView` tag
2. Add a `NavigationLink` tag to the item you want to touch on to perform the navigation
3. Create the _detail_ view that you will be navigating to during step 2

## The Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bt7oUbHAKaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
