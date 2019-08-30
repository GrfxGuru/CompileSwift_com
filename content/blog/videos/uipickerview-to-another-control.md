---
title: Using a UIPickerView as input for another control
author: Peter Witham
featuredImage:
date: "2019-08-30T11:00:00"
description: Use a UIPickerView to offer pre-built input for populating other controls, like labels or entry fields. This video shows you how to do it.
---

## The Problem
You want to offer a pre-selected list of options to a user. This helps protect the content that gets entered into another control like a label or a text field or maybe even just an entry to be stored in a database.

## The Solution
So the solution is actually very straight forward, give them a picker that they can scroll to find the desired selection in. As that value changes, you can take that selection and put it somewhere else in your application. In this example, we change the value of a label.

### The Steps
1. Place the UIPickerView and Label on the storyboard.
2. Make the view controller the delegate and data source for the UIPickerView.
3. Add the needed protocols for acting as a delegate.
4. Add an outlet for the label so we can access it's value in code.
5. Provide data to the UIPickerView.
6. Make use of the `pickerView:didSelectRow:inComponent:` to detect changes and update the label.

## The Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/VUPnW9TD1ug" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
