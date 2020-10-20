---
templateKey: blog-post
slug: 
author: Peter Witham
tags: []
title: Xcode 12.2 beta debug break point when running application
date: 2020-10-20T10:51:56
description: This problem hit me and I found the solution in the release notes. Break point hits when starting an application, the workaround.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/b7TJylGnjBs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This problem hit me with beta 3 of Xcode 12.2, I found the solution in the release notes and hopefully this will save you from trying to find it.

## The problem
You try running an application in Xcode and it causes a break point to hit immediately.

## The Solution
Continue execution of the application using the debug controls and everything should work fine for you.