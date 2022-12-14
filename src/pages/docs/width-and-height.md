---
title: Width and Height
description: The diagram is made up of three layers. 
---

{% callout type="note" title="TLDR; Width and Height" %}
For width, if it is inline, it gets the width from the children(1). 
If it is block, it gets the width from the parent(2).

For height, it gets the height from the children(1).
If this element's height has not impact on the parent(3), you can use percentage to control its height.
{% /callout %}

* (1) as small as possible to contain the content;
* (2) as big as possible to fill the parent;
* (3) parent's height is explicitly set or child is absolutely positioned.

![](../../../../../../Downloads/IMG_948A0C9B1EB2-1.jpeg)

Of course, this is not accurate, but other cases are more straightforward.

## Case study 1: h-full has no effect
![](../../../../../../Desktop/Screenshot 2022-12-13 at 8.43.18 pm.png)


## Case study 2: h-full+absolute has effect
![](../../../../../../Desktop/Screenshot 2022-12-13 at 8.51.35 pm.png)

We will not cover box model here, because there are many good resources on the internet and
browser's developer tool can help you a lot.

