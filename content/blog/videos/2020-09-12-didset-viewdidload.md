---
templateKey: blog-post
slug: 
author: Peter Witham
tags: ["Video"]
title: Using didSet on Swift properties to clean up viewDidLoad
date: 2020-09-12T16:36:51
description: Anytime you can remove code from viewDidLoad it has to be a good thing, so here is a quick tip on property setup.
---

We have all seen those big view controllers and especially viewDidLoad functions with a whole bunch of set up code in them. Well, there is a very simple idea you can use to clean at least some of it up and make things more readable in the process.

On properties, we can use didSet as a place to put our setup code in. In this video, I'll refactor a few simple set up lines of code back up into the IBOutlets and away from the view controller load function.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qSB5X18XxHM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
