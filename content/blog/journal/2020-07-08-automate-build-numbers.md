---
templateKey: blog-post
slug:
author: Peter Witham
tags: ["Xcode", "Automation", "Journal"]
title: Automate those build and version numbers for Xcode
date: 2020-07-08T12:15:15
description: Take the pain out of keeping those build and version numbers upto date with one simple tool.
---

If like me, you are always working on new versions and regular releases of applications built with Xcode, then you have encountered the problem of keeping those build and version numbers up to date and correct for the next release in all the right places in your project code.

It is important to keep version and build numbers correct. Especially for passing the Apple Store upload and review process smoothly.

Well, Apple has a solution to help us if we dig a little and use just one command line tool to help us not have to figure out the next number and then set it in all the right places.

## Say hello to agvtool by Apple!

Agvtool is a command line application that we can run to either automatically figure out the next version and / or build number for us, or use it to set the desired value for us in all the right places inside our application code.

Using agvtool is very straight forward once you have ensured you have everything set up correctly in your Xcode project. So let’s work through that checklist now together.

1. Open the project in Xcode and check that your Targets have a version number. Probably the best way is to click on a target and go to the ‘Build Settings’ tab. Now find the ‘Versioning’ section, you may have to change the filter from ‘Basic’ too ‘All’ to see it.

Look or search for ‘Current Project Version’ and make sure it has a number, e.g. 1.

Now find ‘Versioning System’ and make sure ‘Apple Generic’ is selected.

2. Now switch to the ‘Info’ tab and look for ‘Bundle versions string, short’ and check that it has a version number for example 1.0. Now do the same for ‘Bundle version’.

Now that was not so bad was it? You are all set up to automate.

## Let automation begin

When using agvtool to set the numbers you need to make sure Xcode is not open.

From here on out you will be using the terminal to run the tool, so open it up now. If you are not a friend of the terminal do not worry, these steps are very easy and require no prior knowledge other than how to change to a directory using the terminal.

With the terminal open, change directory to the location of your project. For this example, my project is called ‘my-project’ and it exists in a folder called ‘my-projects’ that is located inside my user folder (the shortcut for that on the terminal is the tilde character).So I’ll change to that location with the following.

```bash
$cd ~/my-projects/my-project
```

This is the location where my project file exists (my-project.xcodeproj).

### Check the current version and build numbers

First of all let’s use the tool to check the current version and build numbers we have in our application. Hint, the output should match the ones we set previously.

```bash
$agvtool what-version

Current version of project my-project is:
    1

```

Great, let’s check the marketing version

```bash
$agvtool what-marketing-version

Looking for marketing version in native targets...
Looking for marketing version (CFBundleShortVersionString) in native targets...

Found CFBundleShortVersionString of "1.0" in “my-project.xcodeproj/../my-project/Info.plist"

```

Fantastic, everything seems to be working correctly.

### Set the current version and build numbers

Now to walk on the wild side and set the numbers.

We have two options open to us, we can either specify the numbers that we want to set them to, or we can let the tool figure out the next number for us. I am going to show you both ways.

First, we will ask the tool to figure out the next number for us automatically because we just want to increment to the next available number.

```bash
$agvtool next-version -all

Setting version of project my-project to:
    2.

Also setting CFBundleVersion key (assuming it exists)

Updating CFBundleVersion in Info.plist(s)...

Updated CFBundleVersion in “my-project.xcodeproj/../my-project/Info.plist" to 2

```

Amazing, right? Everything worked as we hoped. If you open the project in Xcode now you will see everything has been set for us.

Bonus tip, to open an Xcode project (works for workspace as well) from the terminal you can just type _open_ followed by the project file name.

OK, so what if you need to set a specific version for whatever reason? Well it’s simple, instead of using _next-version_ we do it slightly differently. Why don’t we set the marketing version to 4.5 and the build number to 10.

```bash
$agvtool new-marketing-version 4.5

Setting CFBundleShortVersionString of project my-project to:
    4.5.

Updating CFBundleShortVersionString in Info.plist(s)...

Updated CFBundleShortVersionString in “my-project.xcodeproj/../my-project/Info.plist" to 4.5

agvtool new-version 10

Setting version of project XCodeGenDemoApp to:
    10.

```

That’s it! Open the project again in Xcode and you should see the numbers we specified.

## The wrap

So as you can see, we can save ourselves a lot of trouble by taking advantage of the agvtool to set and check the numbers.
