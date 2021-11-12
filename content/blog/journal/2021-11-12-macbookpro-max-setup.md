---
templateKey: blog-post
slug:
author: Peter Witham
tags: ["MacBook Pro", "Journal"]
title: New development machine setup
date: 2021-11-12T14:47:00
description: My new laptop is setup and I did a few things differently this time.
---

With the new MacBook Pro 14" MAX in my possession, I went ahead this week and set it up as my main machine replacement. This time around, I set up from scratch, something I don't do very often as it is impossible to remember all the minor tweaks I make over time.

I made a couple of changes that I think are worth noting.

## Goodbye NVM and RVM

I usually use [NVM](https://github.com/nvm-sh/nvm) and [RVM](https://rvm.io) to manage my Node and Ruby installs but this time around, I have replaced those with [asdf](https://asdf-vm.com). This feels better and more maintainable; anytime you can replace multiple tools with one is a good thing. The idea behind asdf is that you use plugins to manage the tools you want to install.

So, I installed the Node and Ruby plugins.

```
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

Now I tell asdf to install the latest versions of both.

```
asdf install node latest
asdf install ruby latest
```

And that is it, all done. How easy is that?

## Make choices, not a buffet

Another decision this time around was to install base tools like Xcode, Tower, and other daily drivers. But! To not go around installing tools based on my previous setup, I will now install them as I use them.

Not only does this save setup time, but it also keeps dead and duplicate tools off of my system that I have to maintain.

Now, this is tough because we all like to change tools to keep things interesting. For example, maybe I use Sublime Text one day, then on another, it might be Nova or Visual Studio Code. But I'm forcing myself to make choices and only use one until there is a reason to install another.

I recommend trying it. You will get to know a particular tool better than jumping around all the time.

## What Else?

You could say my setup is incomplete, and you would be correct, but see the note above about installing 'just in time' as I need them. This also applies to 3rd party libraries. There are some tools I would usually install globally, like GatsbyJS and React-Native.

This time, I am going to try and keep all those packages to 'per-project'. Again, this is an attempt to reduce maintenance over time and only deal with things as they come up.

We will see how this all works out over time, but right now, my machine is slim, has plenty of space, and is responsive. Now to try and keep it that way!

Reach out to me at all the places you find CompileSwift and let me know how you manage your development machines these days. I'd love to hear about it.
